const htmlFromString = (s) => {
    var div = document.createElement('div');
    div.innerHTML = s.trim();
    return div.firstChild;
}

const menus = document.querySelectorAll(".clickable-scrolling-div");

menus.forEach(menu => {
    const menuHead = menu.querySelector(".clickable-head");
    const cat = menuHead.innerText.toLowerCase();
    const menuBody = menu.querySelector(".retracting-body");
    const arrow = menu.querySelector(".dropdown-icon");
    menuBody.style.display = "none"
    menuHead.addEventListener('click', () => {
        menuBody.style.display = (menuBody.style.display == "none") ?
            "flex" : "none";
        if (menuBody.style.display == "flex") {
            arrow.classList.add("dropdown-icon-rotated");
        }
        else {
            arrow.classList.remove("dropdown-icon-rotated");
        }
    }

    );
    if (document.querySelectorAll(".menu-container")[0].classList.contains("section__people")) {
        fetch('scripts/people.json')
            .then(response => response.json())
            .then(f => {
                if (cat in f) {
                    for (const entry of f[cat]) {
                        const elem = `<div class="dropdown-entry">
                        <span class="dropdown-name">${entry["name"]}</span>
    ${"role" in entry ? `<span class="dropdown-lower">${entry["role"]}</span>` : ``}
    ${"role2" in entry ? `<span class="dropdown-lower">${entry["role2"]}</span>` : ``} 
                        <span class="dropdown-lower">${entry["major"]}</span>
    ${"major2" in entry ? `<span class="dropdown-lower">${entry["major2"]} minor</span>` : ``} 
                    </div>`;
                        menuBody.appendChild(htmlFromString(elem))
                    }
                }
            })
    }
})


window.addEventListener('click', ({ target }) => {
    const popup = target.closest('.popup');
    const clickedOnClosedPopup = popup && !popup.classList.contains('show');

    popups.forEach(p => p.classList.remove('show'));

    if (clickedOnClosedPopup) popup.classList.add('show');
});
