function anime() {
    console.log(ANIMATIONS[document.getElementById('animation').value]);
    document.getElementById('text').value = ANIMATIONS[document.getElementById('animation').value];
}


function size() {
    document.getElementById('text').style.fontSize = document.getElementById('animation').value + "pt";
}