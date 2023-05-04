function funCheck() {
    var x = document.getElementsByClassName("cls1");
    // x[0].style.fontStyle = "italic";

    for (let i = 0; i < x.length; i++) {
        x[i].style.fontWeight = "Bolder";
    }
}