let burgerButton = document.getElementById("burger-btn");
let navBar = document.getElementById("nav-bar");





burgerButton.addEventListener("click",function () {
    navBar.classList.toggle("active")
});
