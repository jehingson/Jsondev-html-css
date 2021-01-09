const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navBar = document.querySelector(".navBar")
const navLeft = menu.getBoundingClientRect().left;

hamburger.addEventListener("click", ()=>{
    if(navLeft < 0){
        menu.classList.add("show")
        document.body.classList.add("show")
        navBar.classList.add("show")
    }
})
navClose.addEventListener("click", ()=>{
    if(navLeft <0){
        menu.classList.remove("show")
        document.body.classList.remove("show")
        navBar.classList.remove("show")
    }
})