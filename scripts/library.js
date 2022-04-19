let l = [undefined, undefined, undefined];

const constructBook = (id) => {
    const pageFlip = new St.PageFlip(
        document.getElementById(`book-container${id}`),
        {
            width: 287.454545, // base page width
            height: 372, // base page height

            size: "fixed",
            // set threshold values:
            minWidth: 287,
            maxWidth: 1000,
            minHeight: 372,
            maxHeight: 372,

            maxShadowOpacity: 0.5, // Half shadow intensity
            showCover: true,
            mobileScrollSupport: false, // disable content scrolling on mobile devices,
            startPage: 1
        }
    );

    pageFlip.loadFromHTML(document.querySelectorAll(`.page${id}`));
    l[id - 1] = pageFlip;
}
//2016, 2020, 2021

$('.book').click(function () {
    let firstload = $(".book-selected").length == 0;
    if (firstload) {
        $(".library-preview").css("display", "flex");


    } else {
        $(".book-selected").removeClass("book-selected");
    }
    for (const disp of document.querySelectorAll(".prevs")) {
        disp.style.display = "none";

        const num = parseInt(this.id.replace(/^\D+/g, ''));
        if (disp.id == `prev${num}`) {
            disp.style.display = "block";
            if (l[num - 1] == undefined) {
                constructBook(num);
            }
            // constructBook(num);
            // console.log(l);
            // l.updateFromHtml(document.querySelectorAll(`.page${num}`));


        }
    }
    $(this).addClass("book-selected");
})