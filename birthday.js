let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    document.querySelector(".cake1").style.display = "block";
    btn.style.display = "none";
    document.querySelector(".container").style.background = "#fff";

});

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",() => {
    document.querySelector(".memories").style.display = "none";
    document.querySelector(".message").style.display = "block";
    let audio = document.querySelector("audio");
    document.querySelector(".container").style.background = "linear-gradient(135deg,white,silver)";
    console.log("true");

    audio.pause();
    let video = document.querySelector("video");
    video.play();
})

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    document.querySelector(".cake1").style.display = "none";
    document.querySelector(".memories").style.display = "block";
    btn2.style.display = "none";

    document.querySelector(".container").style.background = "linear-gradient(135deg,#90ee90,#ee90ee)";
    

    confetti({
        particleCount : 550,
        spread : 250,
        orgin : {y:0.4}
    });

    let audio = document.querySelector("audio");

    audio.play();
})

let g1 = document.querySelector("#g1");
let g2 = document.querySelector("#g2");
let g3 = document.querySelector("#g3");
let g4 = document.querySelector("#g4");

let msg = document.querySelector("#msg");

g1.addEventListener("click", () => {
    document.querySelector("#g1").style.backgroundImage = "url('watch1.jpg')";
    msg.innerText = "Congrats! You have got Smart watch as your birthday gift"
    g1.disabled = true;
    g2.disabled = true;
})

g2.addEventListener("click", () => {
    document.querySelector("#g2").style.backgroundImage = "url('shoes1.jpg')";
    msg.innerText = "Congrats! You have got shoes as your birthday gift";
    g1.disabled = true;
    g2.disabled = true;
})




