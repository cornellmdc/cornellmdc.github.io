


$('.book').click(function () {
    let firstload = $(".book-selected").length == 0;
    if (firstload) {
        $(".library-preview").css("display", "block");
        $('.carousel').slick({
            infinite: true,
            slidesToShow: 1,
            prevArrow: `<img type="button" class="slick-next" src='/img/prev.svg'>`,
            nextArrow: `<img type="button" class="slick-prev" src='/img/next.svg'>`
        });
    } else {
        $(".book-selected").removeClass("book-selected");
    }
    $(this).addClass("book-selected");
})