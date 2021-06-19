menuBtn = document.querySelector(".hamburger-menu");
overlayMenu = document.querySelector(".overlay");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        overlayMenu.style.display="flex";
    }else{
        menuBtn.classList.remove("open")
        menuOpen = false;
        overlayMenu.style.display="none";
    }
})