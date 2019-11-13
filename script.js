const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const canvasRect = canvas.getBoundingClientRect();

let dragStart = false;
let beginX = 0;
let beginY = 0;
let endX = 0;
let endY = 0;
let xRatio;
let yRatio;

const image = new Image();
image.src = "./luffy.jpg";
image.onload = function() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;
  xRatio = canvas.width / canvasRect.width;
  yRatio = canvas.height / canvasRect.height;
  ctx.drawImage(image, 0, 0);
  reDrawCanvas();
};

function reDrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);
  ctx.strokeStyle = "#f00";
  ctx.lineWidth = 3;

  ctx.strokeRect(
    beginX * xRatio,
    beginY * yRatio,
    endX * xRatio,
    endY * yRatio
  );
}

function handleMouseDown(e) {
  dragStart = true;
  beginX = e.offsetX;
  beginY = e.offsetY;
  endX = 0;
  endY = 0;
  reDrawCanvas();
}

function handleMouseMove(e) {
  if (dragStart) {
    endX = e.offsetX - beginX;
    endY = e.offsetY - beginY;
  }
  reDrawCanvas();
}

function hadnleMouseUp() {
  dragStart = false;
  reDrawCanvas();
  console.log({
    x1: beginX * xRatio,
    y1: beginY * yRatio,
    x2: endX * xRatio,
    y2: endY * yRatio
  });
}

canvas.onmousedown = handleMouseDown;
canvas.onmousemove = handleMouseMove;
canvas.onmouseup = hadnleMouseUp;
