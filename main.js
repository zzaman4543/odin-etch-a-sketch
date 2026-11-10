function generateGrid () {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        const container = document.getElementById("container");
        container.appendChild(div);
    }
}

function toggleBoxHighlight (event) {
    event.target.classList.toggle("highlight");
}

function setupGridEvents () {
    const container = document.getElementById("container");
    container.addEventListener("mouseover", toggleBoxHighlight);
    container.addEventListener("mouseout", toggleBoxHighlight);
}

generateGrid();
setupGridEvents();