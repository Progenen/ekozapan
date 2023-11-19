document.addEventListener('DOMContentLoaded', function () {
    // const burger = document.querySelector(".header__burger");
    // const menu = document.querySelector(".header__col--menu");
    // const header = document.querySelector("header");

    // burger.addEventListener("click", () => {
    //     burger.classList.toggle("active");
    //     menu.classList.toggle("active");
    //     document.body.classList.toggle("lock");
    // });

    const headerLang = document.querySelector(".header__lang")
    const langItems = document.querySelectorAll(".header__lang-btn");
    const langActive = document.querySelector(".header__lang-btn--active");
    const headerMail = document.querySelector(".header__mail");
    const headerUi = document.querySelector(".header__ui");
    const headerTopMenu = document.querySelector(".header__topmenu");
    const headerMenu = document.querySelector(".header__menu");
    const headerMobBtn = document.querySelector(".header__burger");
    const headerCat = document.querySelector(".header__cat");
    const headerCatMenu = document.querySelector(".header__catmenu");
    const catMenuSwitch = document.querySelectorAll(".header__catmenu-switch")
    const mobMenu = document.querySelector(".mobmenu");
    const header = document.querySelector("header");
    const mainCatalogItems = document.querySelectorAll(".main-catalog__item");
    const mainCatalogMore = document.querySelector(".main-catalog__more-btn");
    const sections = document.querySelectorAll("section");

    // Main menu func

    function showMenu () {
        headerMobBtn.classList.add("active");
        mobMenu.classList.add("active");
    }

    function hideMenu () {
        headerMobBtn.classList.remove("active");
        mobMenu.classList.remove("active");
    }

    // Catalog func
    
    function hideSubMenu () {
        headerCatMenu.classList.remove("active");
        catMenuSwitch.forEach(el => {
            el.classList.remove("active");
        })
    }

    window.addEventListener("click", (e) => {
        if (e.target !== headerLang && e.target !== langActive) {
            langItems.forEach((item) => {
                item.classList.remove("show");
                headerLang.classList.remove("active");
            });
        }

        if (e.target.closest('.mobmenu') === null && e.target !== headerMobBtn && e.target.closest(".header__catmenu") === null) {
            hideMenu();
            hideSubMenu();
        }
    });

    window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        sections.forEach(section => {
            if (section.getBoundingClientRect().top + section.clientHeight + 100 <= window.scrollY) {
                section.classList.add("scroll-active");
            }
            
        });
    })

    if (mainCatalogMore) {
        mainCatalogMore.addEventListener("click", () => {
            console.log("click");
            mainCatalogItems.forEach((item, i) => {
                if (item.classList.contains("hidden")) {
                    item.classList.remove("hidden");
                    setTimeout(() => {
                        
                    item.classList.add("anime-show");
                    }, 300)
                } else {
                }
            });    

            mainCatalogMore.classList.add("hidden");
        })

        mainCatalogItems.forEach((item, i) => {
            if (i > 8) {
                item.classList.add("hidden");
                item.classList.add("anime-hidden");
            } else {
                mainCatalogMore.classList.add("hidden");
            }
        });
        
    }

    if (window.innerWidth <= 1020) {
        headerUi.append(headerMail);
    }

    if (window.innerWidth <= 876) {
        langActive.addEventListener("click", () => {
            langItems.forEach((item) => {
                item.classList.toggle("show");
                headerLang.classList.toggle("active");
            });
        });
        
        mobMenu.append(headerMenu);
        mobMenu.append(headerTopMenu);
        mobMenu.style.paddingTop = (header.clientHeight - 20) + "px";

        headerMobBtn.addEventListener("click", () => {
            if (mobMenu.classList.contains("active")) {
                hideMenu();
            } else {
                showMenu();
            }
        });
    }

    if (window.innerWidth <= 768) {
        mobMenu.prepend(headerCat);
        document.body.append(headerCatMenu);
        mobMenu.querySelector(".mobmenu__ui").append(headerMail);
        catMenuSwitch.forEach(el => {
            el.addEventListener("click", () => {
                el.classList.toggle("active");
                headerCatMenu.classList.toggle("active");
            });
        })
    }

    if(window.innerWidth <= 576) {
        mainCatalogItems.forEach((item, i) => {
            if (i > 5) {
                item.classList.add("hidden");
                item.classList.add("anime-hidden");
                mainCatalogMore.classList.remove("hidden");
            } else {
                mainCatalogMore.classList.add("hidden");
            }
        });
    }

    if(window.innerWidth <= 450) {
        mobMenu.querySelector(".mobmenu__ui").append(document.querySelector(".header__phone"));
    }
});