const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav=document.querySelector(".mobile-nav")


hamburgerButton.addEventListener("click", ( ) => {
    console.log("hello")
    mobileNav.classList.toggle("display-none")
})