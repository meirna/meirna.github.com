const navToggle = document.querySelector(".navbar-toggler"), navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
        document.body.classList.toggle("nav-open");
    }, {passive: true}), navLinks.forEach(
        (e) => {
            e.addEventListener("click", () => {
                document.body.classList.remove("nav-open");
            });
        }, {passive: true});

window.addEventListener("resize", () => {
	if (window.innerWidth > 992) document.body.classList.remove("nav-open");
});    

