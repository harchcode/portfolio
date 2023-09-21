export function getRandomIntInclusive(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function easeInOutQuad(x: number) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

// For quick, simple to use tween
export function tween(
  from: number,
  to: number,
  duration: number,
  onUpdate: (current: number) => void,
  easingFn = easeInOutQuad
): Promise<void> {
  return new Promise(resolve => {
    const change = to - from;
    const startTime = Date.now();

    let elapsed = 0;
    let currentValue = from;

    const raf = requestAnimationFrame || setTimeout;

    const animate = () => {
      elapsed = Date.now() - startTime;

      currentValue = from + easingFn(elapsed / duration) * change;

      if (elapsed < duration) {
        onUpdate(currentValue);
        raf(animate);
      } else {
        onUpdate(to);
        resolve();
      }
    };

    animate();
  });
}

export function addScrollEventListener(
  fn: (scrollX: number, scrollY: number) => void
) {
  let lastKnownScrollX = 0;
  let lastKnownScrollY = 0;

  let ticking = false;

  function handleScroll() {
    fn(lastKnownScrollX, lastKnownScrollY);
    ticking = false;
  }

  function listener() {
    lastKnownScrollX = window.scrollX;
    lastKnownScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(handleScroll);

      ticking = true;
    }
  }

  window.addEventListener("scroll", listener);

  return [handleScroll, () => window.removeEventListener("scroll", listener)];
}
