// Create canvas element
const canvas = document.createElement("canvas");
document.getElementById("particles-js").appendChild(canvas);
const ctx = canvas.getContext("2d");

// Resize canvas to fill the browser window dynamically
window.addEventListener("resize", resizeCanvas, false);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

// Particle settings
const particles = [];
const numParticles = 25;
const maxInitialVelocity = 0.5;
const particleSize = 75;
const particleColors = [
  "rgba(12, 31, 70, 0.01)",
  "rgba(12, 31, 70, 0.02)",
  "rgba(12, 31, 70, 0.03)",
];

const maxSpeed = 0.7; // threshold speed for applying friction
const friction = 0.99; // friction factor

class Particle {
  constructor(x, y, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Apply friction only if the particle speed exceeds the threshold
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > maxSpeed) {
      this.vx *= friction;
      this.vy *= friction;
    }

    if (this.x > canvas.width || this.x < 0) this.vx = -this.vx;
    if (this.y > canvas.height || this.y < 0) this.vy = -this.vy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, particleSize, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color
      .replace("0.2", "1")
      .replace("0.3", "1")
      .replace("0.4", "1");
    ctx.fill();
  }
}

for (let i = 0; i < numParticles; i++) {
  particles.push(
    new Particle(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      (Math.random() - 0.5) * maxInitialVelocity,
      (Math.random() - 0.5) * maxInitialVelocity,
      particleColors[Math.floor(Math.random() * particleColors.length)]
    )
  );
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(draw);
}

draw();

// Mouse interaction
document.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  particles.forEach((particle) => {
    const dx = particle.x - mouseX;
    const dy = particle.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 50;
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const maxForce = 0.1;
    const force = (maxDistance - distance) / maxDistance;

    if (distance < maxDistance) {
      particle.vx += forceDirectionX * force * maxForce;
      particle.vy += forceDirectionY * force * maxForce;
    }
  });
});
