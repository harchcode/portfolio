function getRandomIntInclusive(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function easeInOutQuad(
  dt: number,
  start: number,
  change: number,
  duration: number
): number {
  const dt2 = dt / (duration / 2);

  if (dt2 < 1) return (change / 2) * dt2 * dt2 + start;

  return (-change / 2) * ((dt2 - 1) * (dt2 - 3) - 1) + start;
}

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

type Shape = {
  shapeType: ShapeType;
  startX: number;
  startY: number;
  startScale: number;
  startRotation: number;
  endX: number;
  endY: number;
  endScale: number;
  endRotation: number;
  color: FillColor;
};

enum ShapeType {
  Triangle,
  Circle,
  Square
}

enum FillColor {
  RED,
  YELLOW,
  GREEN,
  BLUE,
  INDIGO,
  PURPLE,
  PINK
}

const fillColors: Record<FillColor, string> = {
  [FillColor.RED]: "#F87171",
  [FillColor.YELLOW]: "#FBBF24",
  [FillColor.GREEN]: "#34D399",
  [FillColor.BLUE]: "#60A5FA",
  [FillColor.INDIGO]: "#818CF8",
  [FillColor.PURPLE]: "#A78BFA",
  [FillColor.PINK]: "#F472B6"
};

const shapes: Shape[] = [];
let isDrawing = false;

const cos30 = Math.cos((Math.PI * 30) / 180);
const triangleRadius = 75;
const triangleSideHalf = triangleRadius * cos30;
const triangleSmallH = triangleRadius / 2;

const squareWidth = 75;
const circleRadius = 50;

function requestDraw() {
  if (!isDrawing) {
    requestAnimationFrame(requestDrawHandler);
  }

  isDrawing = true;
}

function requestDrawHandler() {
  isDrawing = false;

  draw();
}

function draw() {
  // resize canvas if needed
  if (
    canvas.width !== window.innerWidth ||
    canvas.height !== window.innerHeight
  ) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    resetCtx();
  }

  const maxWindowScroll = document.body.scrollHeight - window.innerHeight || 1;
  const progress = window.scrollY / maxWindowScroll;

  ctx.resetTransform();

  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < shapes.length; i++) {
    const {
      startX,
      startY,
      shapeType,
      startScale,
      startRotation,
      endX,
      endY,
      endScale,
      endRotation,
      color
    } = shapes[i];

    const x = easeInOutQuad(progress, startX, endX - startX, 1);
    const y = easeInOutQuad(progress, startY, endY - startY, 1);
    const scale = easeInOutQuad(progress, startScale, endScale - startScale, 1);
    const rotation = easeInOutQuad(
      progress,
      startRotation,
      endRotation - startRotation,
      1
    );

    ctx.fillStyle = fillColors[color];
    ctx.resetTransform();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.rotate((Math.PI / 180) * rotation);

    if (shapeType === ShapeType.Square) {
      ctx.fillRect(
        -squareWidth * 0.5,
        -squareWidth * 0.5,
        squareWidth,
        squareWidth
      );
      ctx.strokeRect(
        -squareWidth * 0.5,
        -squareWidth * 0.5,
        squareWidth,
        squareWidth
      );
    } else if (shapeType === ShapeType.Circle) {
      ctx.beginPath();
      ctx.arc(0, 0, circleRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    } else if (shapeType === ShapeType.Triangle) {
      ctx.beginPath();
      ctx.moveTo(-triangleSideHalf, triangleSmallH);
      ctx.lineTo(triangleSideHalf, triangleSmallH);
      ctx.lineTo(0, -triangleRadius);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }
}

export function initBackground() {
  const cv = document.getElementById("canvas");
  if (!cv) return;

  canvas = cv as HTMLCanvasElement;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext("2d");

  if (!context) return;

  ctx = context;

  window.addEventListener("scroll", requestDraw);

  const area = canvas.width * canvas.height;
  const minScale = 0.75;
  const maxScale = 1.5;
  const shapeCount = 3 + Math.ceil(area / 100000);
  const shapeTypeCount = Object.keys(ShapeType).length / 2;
  const colorCount = Object.keys(FillColor).length / 2;

  shapes.length = 0;

  for (let i = 0; i < shapeCount; i++) {
    const shape: Shape = {
      shapeType: getRandomIntInclusive(0, shapeTypeCount - 1) as ShapeType,
      startX: getRandomIntInclusive(-100, canvas.width + 100),
      startY: getRandomIntInclusive(-100, canvas.height + 100),
      startScale: getRandomArbitrary(minScale, maxScale),
      startRotation: getRandomIntInclusive(0, 360),
      endX: getRandomIntInclusive(0, canvas.width),
      endY: getRandomIntInclusive(0, canvas.height),
      endScale: getRandomArbitrary(minScale, maxScale),
      endRotation: getRandomIntInclusive(30, 720),
      color: getRandomIntInclusive(0, colorCount - 1) as FillColor
    };

    shapes.push(shape);
  }

  resetCtx();
  requestDraw();
}

let currentMode: "light" | "dark" = "light";
export function resetCtx(mode?: "light" | "dark") {
  currentMode = mode ?? currentMode;

  ctx.globalAlpha = 0.2;
  ctx.lineWidth = 1;

  if (currentMode === "light") {
    ctx.strokeStyle = "#999";
    ctx.fillStyle = "#fff";
  } else if (currentMode === "dark") {
    ctx.strokeStyle = "#fff";
    ctx.fillStyle = "#ccc";
  }

  requestDraw();
}
