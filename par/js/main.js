let bg = document.querySelector(".bg")
window.addEventListener("scroll", function () {
    let s = this.scrollY
    let scale = 1 + ((s / 5) * 0.0005)
    let op = 1 - ((s / 5) * 0.01)
    bg.style.transform = "scale(" + scale + "," + scale + ")"
    bg.style.opacity = op
    if (s > 500) {
        bg.style.transform = "scale(1)"
        bg.style.opacity = 1
    }

})


let sap = document.querySelector(".sap")
let body = document.querySelector("body")
let navbar = document.querySelector(".navbar")
let navblack = document.querySelector(".navblack")
let ham = document.querySelector(".ham")
let n1 = document.querySelector(".n1")
let n2 = document.querySelector(".n2")
let n3 = document.querySelector(".n3")
let mopen = false;
ham.addEventListener("click", function () {
    if (!mopen) {
        sap.style.display="none"
        ham.classList.add("hamb")
        body.style.overflow = "hidden"
        hamwr.style.color = "rgba(255,255,255,0.6)"
        mopen = true
        navblack.style.opacity = "1"
        navbar.style.background = "rgba(0,0,0,0)"
        setTimeout(() => {
            n1.style.opacity = "1";
            n1.style.display = "inherit"
        }, 600);

        setTimeout(() => {
            n2.style.opacity = "1";
            n2.style.display = "inherit"
        }, 650);

        setTimeout(() => {
            n3.style.opacity = "1";
            n3.style.display = "inherit"
        }, 700);

    } else {
        hamwr.style.color = "rgba(255,255,255,1)"
        ham.classList.remove("hamb")
        mopen = false
        body.style.overflow = "inherit"
        
        setTimeout(() => {
            navblack.style.opacity = "0"
        }, 700);

        setTimeout(() => {
            n1.style.opacity = "0";
            n1.style.display = "none"
        }, 100);

        setTimeout(() => {
            n2.style.opacity = "0";
            n2.style.display = "none"
        }, 50);

        setTimeout(() => {
            n3.style.opacity = "0";
            n3.style.display = "none"
        }, 0);

        setTimeout(() => {
            sap.style.display="inline-block"
        }, 700);
        
        if(t == false){
            navbar.style.background = "#171717"
        }
    }
})

let t = true
let hamwr = document.querySelector(".hamwr")
let logo = document.querySelector(".logo")
window.addEventListener("scroll", function(){
    if(scrollY>0){
        navbar.style.height = "82px"
        logo.classList.add("scr")
        navbar.style.background = "#171717"
        ham.classList.add("ham1")
        hamwr.classList.add("hamwr1")
        t = false
    }else{
        navbar.style.height = "132px"
        logo.classList.remove("scr")
        navbar.style.background = "rgba(0,0,0,0)"
        ham.classList.remove("ham1")
        hamwr.classList.remove("hamwr1")
        t = true       
}
})








































