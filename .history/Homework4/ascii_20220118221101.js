
var animationSpeed = 250;

function anime() {
    console.log(ANIMATIONS[document.getElementById('animation').value]);
    document.getElementById('text').value = ANIMATIONS[document.getElementById('animation').value];
}


function sizes() {
    document.getElementById('text').style.fontSize = document.getElementById('size').value + "pt";
}

function turbo() {
    if(turbo)
}


function startButton() {
    console.log("starting");
    document.getElementById('stopButton').disabled = false;
    document.getElementById('startButton').disabled = true;
    document.getElementById('animation').disabled = true;

    let texts = ANIMATIONS[document.getElementById('animation').value].split("=====\n");
    let idx = 0;

    var displayFunction = function() {
        document.getElementById('text').value = texts[idx];
        idx = (idx + 1) % texts.length;
        setTimeOutID = setTimeout(displayFunction, animationSpeed);
    };
    setTimeOutID = setTimeout(displayFunction, animationSpeed);
};