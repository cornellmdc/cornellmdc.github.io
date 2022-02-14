$(document).ready(function() {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1
    });
})

$('.book').click(function() {
    let firstload = $(".book-selected").length == 0;
    if (firstload) {
        $(".library-preview").css("display", "flex");
        $('.carousel').slick('setPosition'); 
    } else {
        $(".book-selected").removeClass("book-selected");
    }
    $(this).addClass("book-selected");
})