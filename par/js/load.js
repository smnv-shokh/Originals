
let load = document.querySelector(".load")
let lbar = document.querySelector(".lbar")
let barline = document.querySelector(".barline")

function loadsite(){
    setTimeout(() => {       
        body.style.overflow = "inherit"
        load.style.opacity = "0"
        setTimeout(() => {
            load.style.display = "none"
        }, 1500);
    }, 1500);
    setTimeout(() => {
        lbar.style.opacity = "0"
    }, 1000);
}

loadsite()

