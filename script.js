// Countdown Timer
const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
    // Set target date to next New Year
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextNewYear = new Date(currentYear + 1, 0, 1).getTime();
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = nextNewYear - now;
        
        if (distance < 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// Initialize countdown
updateCountdown();

// Name input and personalization
const nameInput = document.getElementById('nameInput');
const goBtn = document.getElementById('goBtn');
const greetingMessage = document.getElementById('greetingMessage');

const messages = [
    'May all your wishes come true!',
    'Wishing you a year full of success!',
    'Hope this year brings you joy and prosperity!',
    'May this year be your best one yet!',
    'Wishing you happiness and good health!',
    'Let the new year bring you new opportunities!'
];

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    const confettiPieces = 50;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#a8e6cf'][Math.floor(Math.random() * 4)];
        confetti.style.animation = `fall ${2 + Math.random() * 2}s linear`;
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

goBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    
    if (name) {
        greetingMessage.textContent = `🌟 ${name}, ${getRandomMessage()}`;
        createConfetti();
        nameInput.style.transform = 'scale(0.95)';
        setTimeout(() => {
            nameInput.style.transform = 'scale(1)';
        }, 100);
    }
});

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        goBtn.click();
    }
});

// Canvas animation for background
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('main-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    addParticles(x, y) {
        for (let i = 0; i < 3; i++) {
            this.particles.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4 - 2,
                life: 1,
                color: `hsla(${Math.random() * 60 + 200}, 100%, 50%, 0.8)`
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles = this.particles.filter(p => p.life > 0);
        
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1;
            p.life -= 0.02;
            
            this.ctx.fillStyle = `hsla(${Math.random() * 60 + 200}, 100%, 50%, ${p.life * 0.5})`;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

new ParticleSystem();

// Interactive elements
document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', () => {
        emoji.style.animation = 'none';
        setTimeout(() => {
            emoji.style.animation = '';
        }, 10);
    });
});

// Touch/Mouse trail on canvas
const trailCanvas = document.getElementById('trails-canvas');
const trailCtx = trailCanvas.getContext('2d');

trailCanvas.width = window.innerWidth;
trailCanvas.height = window.innerHeight;

let isDrawing = false;

document.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        trailCtx.fillStyle = `rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, 255, 0.3)`;
        trailCtx.beginPath();
        trailCtx.arc(e.clientX, e.clientY, Math.random() * 3 + 2, 0, Math.PI * 2);
        trailCtx.fill();
    }
});

window.addEventListener('resize', () => {
    trailCanvas.width = window.innerWidth;
    trailCanvas.height = window.innerHeight;
});

// Fade out trail after some time
setInterval(() => {
    trailCtx.fillStyle = 'rgba(10, 10, 10, 0.1)';
    trailCtx.fillRect(0, 0, trailCanvas.width, trailCanvas.height);
}, 50);
