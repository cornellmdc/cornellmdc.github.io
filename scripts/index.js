const mobileMenuDrop = () => {
    const mobileNav = document.querySelector(".overlay-nav");
    mobileNav.style.display = "block";
}

const mobileMenuClose = () => {
    const mobileNav = document.querySelector(".overlay-nav");
    mobileNav.style.display = "none";
}

const enableHeader = (cat) => {
    $(".nav-holder").load("/templates/header.html", () => {
        $(cat).removeClass("inactive-link");
        $(cat).addClass("active-link");
    });
    // $("#footer").load("/templates/footer.html");
}