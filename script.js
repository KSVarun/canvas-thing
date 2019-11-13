const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let dragStart = false;
let beginX = 0;
let beginY = 0;
let endX = 0;
let endY = 0;

const image = new Image();
image.src = "./luffy.jpg";

image.onload = function() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;
  ctx.drawImage(image, 0, 0);
};

function reDrawCanvas() {
  ctx.drawImage(image, 0, 0);
  ctx.strokeStyle = "#f00";
  ctx.lineWidth = 3;
  ctx.strokeRect(beginX, beginY, endX, endY);
}

function handleMouseDown(e) {
  dragStart = true;
  beginX = e.x;
  beginY = e.y;
  reDrawCanvas();
}

function hadnleMouseUp() {
  dragStart = false;

  reDrawCanvas();
}

function handleMouseMove(e) {
  if (dragStart) {
    endX = e.x;
    endY = e.y;
  }
  reDrawCanvas();
//   beginX = 0;
//   beginY = 0;
//   endX = 0;
//   endy = 0;
}

canvas.onmousedown = handleMouseDown;
canvas.onmouseup = hadnleMouseUp;
canvas.onmousemove = handleMouseMove;
