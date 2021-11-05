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
    menuBody.style.display = "none"
    console.log(menuBody.style.display)
    menuHead.addEventListener('click', () => {

        console.log(menuBody.style.display);
        menuBody.style.display = (menuBody.style.display == "none") ?
            "flex" : "none"
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
    ${"major2" in entry ? `<span class="dropdown-lower">${entry["major2"]}</span>` : ``} 
                    </div>`;
                        menuBody.appendChild(htmlFromString(elem))
                    }
                }
            })
    }

})


