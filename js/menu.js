menuBtn = document.querySelector(".hamburger-menu");
overlayMenu = document.querySelector(".overlay");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        setTimeout(function (){
            overlayMenu.style.display="flex";
        }, 400)
    }else{
        menuBtn.classList.remove("open")
        menuOpen = false;
        setTimeout(function (){
            overlayMenu.style.display="none";
        }, 400) 
    }
})