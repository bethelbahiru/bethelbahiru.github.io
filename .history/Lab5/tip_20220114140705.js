function calcTip() {
    var subTotal = document.getElementById("subtotal");
    var percent = document.getElementById("tip");
    var tip = (Number.parseInt(percent) / 100) * Number.parseFloat(subTotal);
    console.log(Integertip);
    document.getElementById("total").innerHTML = tip;
}