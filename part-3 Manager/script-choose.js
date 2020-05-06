/*
 * @Author: your name
 * @Date: 2020-05-02 15:06:57
 * @LastEditTime: 2020-05-06 22:01:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \flask nlp\Part-3 Manager\script-choose.js
 */
function chooseStore(t){
    console.log(t.id);
    document.getElementsByClassName("btn-company selected")[0].classList.remove("selected");
    t.classList.add("selected");
    let intro = document.getElementById("intro-company");
    if (t.id === "food"){
        intro.innerHTML = "We have the freshest fruits, meat, and vegetables in our market. <br><br> Want some snacks? All kinds of snacks are on the shelf, waiting for you! <br><br> Donuts are good!"//"FOOD MARKET sell different kinds of food. <br><br> Donuts are good!"
    } else if (t.id === "book") {
        intro.innerHTML = "Want to be someone who's smart and knowledgable? <br><br> Come and get some books! <br><br> E-books are also available."//"BOOK SHOP sell different kinds of books. <br><br> Including e-books."
    } else if (t.id === "game") {
        intro.innerHTML = "Are you staying at home, almost driven crazy by boredom? <br><br> Why not play games online with your friends? <br><br> We have VR games, too!"//"GAME STORE sell different kinds of games. <br><br> Happy plus 1!"
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