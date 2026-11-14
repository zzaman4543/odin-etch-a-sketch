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
