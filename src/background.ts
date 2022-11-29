import {
  easeInOutQuad,
  getRandomArbitrary,
  getRandomIntInclusive
} from "./utils";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const workDiv = document.getElementById("work-div") as HTMLDivElement;
const projectDiv = document.getElementById("project-div") as HTMLDivElement;

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
};

enum ShapeType {
  Triangle,
  Circle,
  Square
}

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

    ctx.globalAlpha = 0.5;
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#ccc";
    ctx.fillStyle = "#fff";
  }

  const maxWindowScroll = document.body.scrollHeight - window.innerHeight;
  const maxWorkScroll = workDiv.scrollWidth - workDiv.clientWidth;
  const maxProjectScroll = projectDiv.scrollWidth - projectDiv.clientWidth;

  let c = 0;
  const total = maxWindowScroll + maxWorkScroll + maxProjectScroll;
  let totalScroll = 0;
  let progress = 0;

  if (maxWindowScroll > 0) {
    totalScroll += document.body.scrollTop;
    c++;
  }

  if (maxWorkScroll > 0) {
    totalScroll += workDiv.scrollLeft;
    c++;
  }

  if (maxProjectScroll > 0) {
    totalScroll += projectDiv.scrollLeft;
    c++;
  }

  progress = totalScroll / (total || 1);

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
      endRotation
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
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext("2d");

  if (!context) return;

  ctx = context;

  document.body.addEventListener("scroll", requestDraw);
  workDiv.addEventListener("scroll", requestDraw);
  projectDiv.addEventListener("scroll", requestDraw);

  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#ccc";
  ctx.fillStyle = "#fff";

  const area = canvas.width * canvas.height;
  const minScale = 0.5;
  const maxScale = 2.0;
  const shapeCount = 3 + Math.ceil(area / 100000);
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
      endRotation: getRandomIntInclusive(30, 1440)
    };

    shapes.push(shape);
  }

  requestDraw();
}
