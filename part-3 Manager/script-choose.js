function chooseStore(t){
    console.log(t.id);
    document.getElementsByClassName("btn-company selected")[0].classList.remove("selected");
    t.classList.add("selected");
    let intro = document.getElementById("intro-company");
    if (t.id === "food"){
        intro.innerHTML = "FOOD MARKET sell different kinds of food. <br><br> Donuts are good!"
    } else if (t.id === "book") {
        intro.innerHTML = "BOOK SHOP sell different kinds of books. <br><br> Including e-books."
    } else if (t.id === "game") {
        intro.innerHTML = "GAME STORE sell different kinds of games. <br><br> Happy plus 1!"
    }
    
}

var slider = document.getElementById("openSlider");

slider.oninput = function() {
    console.log(this.value);
    if (this.value == 100) {
        setTimeout(() => {
            // alert("full!");
            window.location.replace("boss.html")
        } ,100)
    }
}