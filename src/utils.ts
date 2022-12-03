export function getRandomIntInclusive(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function easeInOutQuad(
  dt: number,
  start: number,
  change: number,
  duration: number
): number {
  const dt2 = dt / (duration / 2);

  if (dt2 < 1) return (change / 2) * dt2 * dt2 + start;

  return (-change / 2) * ((dt2 - 1) * (dt2 - 3) - 1) + start;
}

export function tween(
  from: number,
  to: number,
  duration: number,
  onUpdate: (current: number) => void,
  easeFunc = easeInOutQuad
): Promise<void> {
  return new Promise(resolve => {
    const change = to - from;
    const startTime = Date.now();

    let dt = 0;
    let currentValue = from;

    const raf = requestAnimationFrame || setTimeout;

    const animate = () => {
      dt = Date.now() - startTime;

      currentValue = easeFunc(dt, from, change, duration);
      onUpdate(currentValue);

      if (dt < duration) {
        raf(animate);
      } else {
        resolve();
      }
    };

    animate();
  });
}
