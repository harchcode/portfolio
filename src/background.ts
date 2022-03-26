import {
  easeInOutQuad,
  getRandomArbitrary,
  getRandomIntInclusive
} from "./utils";

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

const cos30 = Math.cos((Math.PI * 30) / 180);
const triangleRadius = 75;
const triangleSideHalf = triangleRadius * cos30;
const triangleSmallH = triangleRadius / 2;

const squareWidth = 75;
const circleRadius = 50;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
const shapes: Shape[] = [];

export function drawBackground() {
  if (!canvas || !ctx) return;

  const maxScroll = Math.max(
    0,
    document.body.scrollHeight - window.innerHeight
  );

  const progress = window.scrollY / maxScroll;

  ctx.resetTransform();
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
    } else if (shapeType === ShapeType.Circle) {
      ctx.beginPath();
      ctx.arc(0, 0, circleRadius, 0, Math.PI * 2);
      ctx.fill();
    } else if (shapeType === ShapeType.Triangle) {
      ctx.beginPath();
      ctx.moveTo(-triangleSideHalf, triangleSmallH);
      ctx.lineTo(triangleSideHalf, triangleSmallH);
      ctx.lineTo(0, -triangleRadius);
      ctx.fill();
    }
  }
}

export function initBackground() {
  canvas = document.getElementById("canvas") as HTMLCanvasElement;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx = canvas.getContext("2d");
  ctx.globalAlpha = 0.1;

  const area = canvas.width * canvas.height;
  const minScale = 0.5;
  const maxScale = 2.0;
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
      endRotation: getRandomIntInclusive(30, 1440),
      color: getRandomIntInclusive(0, colorCount - 1) as FillColor
    };

    shapes.push(shape);
  }

  requestAnimationFrame(() => {
    drawBackground();
  });
}
