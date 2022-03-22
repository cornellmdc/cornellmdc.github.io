



$('.book').click(function () {
    let firstload = $(".book-selected").length == 0;
    if (firstload) {
        $(".library-preview").css("display", "flex");
        $(".library-wrapper").css("justify-content", "space-between");
        $('.carousel').slick({
            infinite: true,
            slidesToShow: 1,
            prevArrow: `<img type="button" class="slick-prev" src='/img/prev.svg'>`,
            nextArrow: `<img type="button" class="slick-next" src='/img/next.svg'>`,
            // variableWidth: true,
            // variableWidth: true,
            // adaptiveHeight: true,
            // centerMode: true
        });
    } else {
        $(".book-selected").removeClass("book-selected");
    }
    for (const disp of document.querySelectorAll(".prevs")) {
        disp.style.display = "none";
        if (disp.id == `prev${this.id.replace(/^\D+/g, '')}`) {
            console.log(disp);
            disp.style.display = "block";
        }
    }
    $(this).addClass("book-selected");
})