const nav = document.querySelector(".header-mob-btn");

nav.addEventListener("click", function (e) {
    document.querySelector(".header-mob-nav").classList.toggle("open")
    e.preventDefault();
})