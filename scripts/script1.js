const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const dColorEl = document.getElementById('change-dcolor');
const bgColorEl = document.getElementById('change-bgcolor');
const clearEl = document.getElementById('clear');
const eraserBtn = document.getElementById('eraser');
const drawBtn = document.getElementById('draw');
const toolbox = document.getElementById('toolbox');
const bgColor = window.getComputedStyle(canvas).backgroundColor;
const aboutEl = document.getElementById("about");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

dColorEl.value = '#B43434';
bgColorEl.value = '#ffe4c4';

let size = 5;
let isPressed = false;
let isEraser = false;
let isDragging = false;
let offsetX = 0, offsetY = 0;
let dragOffsetX = 0, dragOffsetY = 0;
let dColor = dColorEl.value;
let x, y;


// Mouse Down
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    const rect = canvas.getBoundingClientRect();
    x = (e.clientX - rect.left) * (canvas.width / rect.width);
    y = (e.clientY - rect.top) * (canvas.height / rect.height);

});

// Mouse Up
document.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

// Mouse Move
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const rect = canvas.getBoundingClientRect();
        const x2 = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y2 = (e.clientY - rect.top) * (canvas.height / rect.height);


        const currentColor = getCurrentDrawColor();

        drawCircle(x2, y2, currentColor);
        drawLine(x, y, x2, y2, currentColor);

        x = x2;
        y = y2;
    }
});

function getCurrentDrawColor() {
    return isEraser ? bgColor : dColor;
}

function drawCircle(x, y, drawColor) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    
    if (isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = drawColor;
    }

    ctx.fill();
}

function drawLine(x1, y1, x2, y2, drawColor) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    
    if (isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.strokeStyle = 'rgba(0,0,0,1)'; // color doesn't matter in erase mode
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = drawColor;
    }

    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeEL.innerText = size;
}

// Size Buttons
increaseBtn.addEventListener('click', () => {
    size += 1;
    if (size > 30) size = 30;
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 1;
    if (size < 1) size = 1;
    updateSizeOnScreen();
});

// Color Picker
dColorEl.addEventListener('change', (e) => {
    dColor = e.target.value;
        // Only update drawing color if not erasing
        dColor = e.target.value;
});

// Clear Button
clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Eraser Mode
eraserBtn.addEventListener('click', () => {
    isEraser = true;
});

// Draw Mode
drawBtn.addEventListener('click', () => {
    isEraser = false;
});

toolbox.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragOffsetX = e.clientX - toolbox.offsetLeft;
    dragOffsetY = e.clientY - toolbox.offsetTop;
    toolbox.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    toolbox.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const newLeft = e.clientX - dragOffsetX;
        const newTop = e.clientY - dragOffsetY;

        const canvasRect = canvas.getBoundingClientRect();
        const toolboxRect = toolbox.getBoundingClientRect();

        // Clamp left/right
        const clampedLeft = Math.max(canvasRect.left, Math.min(newLeft, canvasRect.right - toolbox.offsetWidth));
        // Clamp top/bottom
        const clampedTop = Math.max(canvasRect.top, Math.min(newTop, canvasRect.bottom - toolbox.offsetHeight));

        toolbox.style.left = `${clampedLeft}px`;
        toolbox.style.top = `${clampedTop}px`;
    }
});

aboutEl.addEventListener('click', () => {
    window.location.href = "templates/about.html";
});

function downloadCanvas() {
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext("2d");

    const computedStyle = getComputedStyle(canvas);
    const backgroundColor = computedStyle.backgroundColor;

    tempCtx.fillStyle = backgroundColor;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    tempCtx.drawImage(canvas, 0, 0);

    const image = tempCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "my-drawing.png";
    link.click();
}

bgColorEl.addEventListener('input', () => {
    let bgColorFromPicker = bgColorEl.value;
    canvas.style.backgroundColor = bgColorFromPicker;
});

drawBtn.addEventListener('click', () => {
    drawBtn.classList.toggle('active');
});

eraserBtn.addEventListener('click', () => {
    eraserBtn.classList.toggle('active');
});

btn.addEventListener('click', () => {
    aboutEl.classList.toggle('active');
});

btn.addEventListener('click', () => {
    aboutEl.classList.toggle('active');
});

btn.addEventListener('click', () => {
    clearEl.classList.toggle('active');
});

btn.addEventListener('click', () => {
    increaseBtn.classList.toggle('active');
});

btn.addEventListener('click', () => {
    decreaseBtn.classList.toggle('active');
});