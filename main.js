function generateGrid () {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        const container = document.getElementById("container");
        container.appendChild(div);
    }
}