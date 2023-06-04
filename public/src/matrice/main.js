let m, n;

function random(bound) {
    return Math.floor(Math.random() * bound);
}

function generateDim() {
    m = random(10) + 1;
    n = random(10) + 1;

    document.getElementById("dim").innerHTML = `${m.toString()} ${n.toString()}`;
}

generateDim();

