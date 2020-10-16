import _ from "lodash";

const MAX_VALUE = 255;
const MAX_COLORS = 5;

const colors = document.querySelector(".colors");

function deleteColors() {
    const color = document.querySelectorAll(".color");
    color.forEach( (e) => { e.remove(); } );
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateRandomColor() {
    const r = _.random(0, MAX_VALUE + 1);
    const g = _.random(0, MAX_VALUE + 1);
    const b = _.random(0, MAX_VALUE + 1);

    return rgbToHex(r, g, b);
}

function printColors() {
    deleteColors();

    for (let i = 0; i < MAX_COLORS; i++) {
        const color = generateRandomColor();
        const divColor = document.createElement("div");

        divColor.className = "color";
        divColor.style.backgroundColor = color;
        
        const divAnnotation = document.createElement("div");
        divAnnotation.className = "annotation";
        divAnnotation.innerText = color;

        colors.appendChild(divColor).appendChild(divAnnotation);
    }
}

document.onkeydown = function (e) {
    if (e.code === "Space") {
        printColors();
    }
}

window.onload = printColors();