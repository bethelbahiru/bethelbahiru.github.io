function anime() {
    console.log(ANIMATIONS[document.getElementById('animation').value]);
    document.getElementById('text').value = ANIMATIONS[document.getElementById('animation').value];
}


function sizes() {
    document.getElementById('text').style.fontSize = document.getElementById('size').value + "pt";
}