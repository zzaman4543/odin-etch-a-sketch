function generateGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        const container = document.getElementById("container");
        container.appendChild(div);
    }
}

function initializeCanvasSize() {
    const canvas = document.getElementById("canvas-id");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function initializeGridEvents() {
    const container = document.getElementById("container");
    container.addEventListener("mouseover", toggleHighlight);
    container.addEventListener("mouseout", toggleHighlight);
}

function drawTrail() {
    const container = document.getElementById("container");
    container.addEventListener("mousemove", drawTrailLine);

    let isFirstMouseMove = true;
    let previousX;
    let previousY;

    function drawTrailLine(event) {
        const currentX = event.clientX;
        const currentY = event.clientY;

        const canvas = document.getElementById("canvas-id");
        const context = canvas.getContext("2d");

        context.lineWidth = 3;

        if (isFirstMouseMove) {
            context.beginPath(); 
            isFirstMouseMove = false;
        } else {
            context.moveTo(previousX, previousY);
            context.lineTo(currentX, currentY);
            context.stroke();
        }

        previousX = currentX;
        previousY = currentY;
    }
}

function toggleHighlight(event) {
    if (event.target.tagName === "DIV") {
        event.target.classList.toggle("highlight");
    }
}

function updateCanvasSizeOnElementResize() {
    const canvas = document.getElementById("canvas-id");

    const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
            canvas.width = entry.borderBoxSize[0].inlineSize;
            canvas.height = entry.borderBoxSize[0].blockSize;
        }
    });

    resizeObserver.observe(canvas);
}

generateGrid();
initializeCanvasSize();
initializeGridEvents();
updateCanvasSizeOnElementResize();
drawTrail();
