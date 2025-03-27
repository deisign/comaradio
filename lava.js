
const canvas = document.getElementById("lava");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawBlob(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const time = Date.now() * 0.002;
  drawBlob(
    canvas.width / 2 + Math.sin(time) * 100,
    canvas.height / 2 + Math.cos(time) * 100,
    100,
    "rgba(255,100,100,0.3)"
  );
  requestAnimationFrame(animate);
}
animate();
