function rgbParameter(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")"
}

function rgbString(color) {
    return rgbParameter(color.r, color.g, color.b)
}

function randomColor() {
    return {
        r: Math.round(Math.random() * 255),
        g: Math.round(Math.random() * 255),
        b: Math.round(Math.random() * 255)
    }
}

function correctColor(color) {
    for (let key in color) {
        if (color[key] < 0 || color[key] > 255) return false
    }
    return true
}