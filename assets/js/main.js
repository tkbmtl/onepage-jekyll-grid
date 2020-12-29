(function () {
    const navSlide = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");

        //remove easy-in on window resize
        window.addEventListener("resize", () => {
            nav.classList.remove("easy-in");
            nav.classList.remove("nav-active");
            burger.classList.remove("toggle");
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                }
            });
        });

        //toggle nav
        burger.addEventListener("click", () => {
            nav.classList.add("easy-in");
            nav.classList.toggle("nav-active");

            //Animate linkls
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            //Burger animation
            burger.classList.toggle("toggle");
        });
        //check for link click on close everything
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                burger.classList.toggle("toggle");
                navLinks.forEach((link) => {
                    link.style.animation = "";
                });
            });
        });
    };

    /* Show hide menu on scroll */

    const doc = document.documentElement;
    const w = window;

    let curScroll;
    let prevScroll = w.scrollY || doc.scrollTop;
    let curDirection = 0;
    let prevDirection = 0;

    const header = document.querySelector("header");
    let toggled;
    const threshold = 30;

    const checkScroll = () => {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        } else {
            //scrolled up
            curDirection = 1;
        }

        if (curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if (toggled) {
            prevDirection = curDirection;
        }
    };

    const toggleHeader = () => {
        toggled = true;
        if (curDirection === 2 && curScroll > threshold) {
            //header.classList.add('hide');
            //document.getElementsByTagName("header")[0].style.top = "-120px";
            document.querySelector("header").style.top = "-120px";
        } else if (curDirection === 1) {
            //header.classList.remove('hide');
            //document.getElementsByTagName("header")[0].style.top = "0px";
            document.querySelector("header").style.top = "0px";
        } else {
            toggled = false;
        }
        return toggled;
    };

    const app = () => {
        window.addEventListener("scroll", checkScroll);
        navSlide();
    };

    app();
})();
