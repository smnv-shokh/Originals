let hamb = document.querySelector(".hamb")
let hline = document.querySelector(".hline")
let hline2 = document.querySelector(".hline2")
let isOpen = false
hamb.addEventListener("click", function(){
    if(!isOpen){
        hline.classList.add("o")
        hline2.classList.add("o2")
        isOpen = true
    }else if(isOpen){
        hline.classList.remove("o")
        hline2.classList.remove("o2")
        isOpen = false
    }
})

let hphp = document.querySelector(".hphp")
window.addEventListener("scroll", function () {
    let s = this.scrollY
    let scale = 1 + ((s / 5) * 0.001)
    hphp.style.transform = "scale(" + scale + "," + scale + ")"
})


