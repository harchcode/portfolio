import {
  addScrollEventListener,
  easeInOutQuad,
  getRandomArbitrary,
  getRandomIntInclusive
} from "./utils";

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
  color: string;
};

enum ShapeType {
  Triangle,
  Circle,
  Square
}

const fillColors = [
  "#F87171",
  "#FBBF24",
  "#34D399",
  "#60A5FA",
  "#818CF8",
  "#A78BFA",
  "#F472B6"
];

const shapes: Shape[] = [];
let requestDraw = () => {};

const cos30 = Math.cos((Math.PI * 30) / 180);
const triangleRadius = 75;
const triangleSideHalf = triangleRadius * cos30;
const triangleSmallH = triangleRadius / 2;

const squareWidth = 75;
const circleRadius = 50;

function draw(_scrollX: number, scrollY: number) {
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
  const progress = scrollY / maxWindowScroll;

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

    const delta = easeInOutQuad(progress);
    const x = startX + delta * (endX - startX);
    const y = startY + delta * (endY - startY);
    const scale = startScale + delta * (endScale - startScale);
    const rotation = startRotation + delta * (endRotation - startRotation);

    ctx.fillStyle = color;
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

  [requestDraw] = addScrollEventListener(draw);

  const area = canvas.width * canvas.height;
  const minScale = 0.75;
  const maxScale = 1.5;
  const shapeCount = Math.max(Math.min(Math.ceil(area / 100000), 20), 3);
  const shapeTypeCount = Object.keys(ShapeType).length / 2;

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
      color: fillColors[getRandomIntInclusive(0, fillColors.length - 1)]
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
    ctx.strokeStyle = "#333";
    ctx.fillStyle = "#fff";
  } else if (currentMode === "dark") {
    ctx.strokeStyle = "#fff";
    ctx.fillStyle = "#ccc";
  }

  requestDraw();
}
