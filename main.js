function generateGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        const container = document.getElementById("grid-container");
        container.appendChild(div);
    }
}

function initializeCanvasSize() {
    const canvas = document.getElementById("canvas-id");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function initializeGridEvents() {
    const container = document.getElementById("grid-container");
    container.addEventListener("mouseover", toggleHighlight);
    container.addEventListener("mouseout", toggleHighlight);
}

function initializeNewGridButton() {
    const newGridButton = document.getElementById("new-grid-button");

    newGridButton.addEventListener("click", () => {
        const numberOfSquaresPerSide = getNumberOfSquaresPerSide();
        generateNewGrid(numberOfSquaresPerSide);
    });
}

function toggleHighlight(event) {
    if (event.target.tagName === "DIV") {
        event.target.classList.toggle("highlight");
    }
}

function drawTrail() {
    const container = document.getElementById("grid-container");
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

function getNumberOfSquaresPerSide() {
    const numberOfSquaresPerSide = parseInt(
        prompt(
            "How many squares do you want per each side of the new grid?"
        ),
        10
    );
    
    if (numberOfSquaresPerSide > 100) {
        alert("The number of squares per side can't be greater than 100.");
    } else {
        return numberOfSquaresPerSide;
    }
}


function generateNewGrid(numberOfSquaresPerSide) {

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
initializeNewGridButton();
drawTrail();
updateCanvasSizeOnElementResize();

