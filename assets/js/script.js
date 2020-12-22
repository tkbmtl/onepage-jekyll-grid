const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    //remove easy-in on window resize
    window.addEventListener('resize', () => {
        nav.classList.remove('easy-in');
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
         });
    });

    //toggle nav
    burger.addEventListener('click', () => {

        nav.classList.add('easy-in');
        nav.classList.toggle('nav-active');

        //Animate linkls
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
         });
         //Burger animation
         burger.classList.toggle('toggle')
    });
    //check for link click on close everything
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle')
            navLinks.forEach((link) => {
                link.style.animation = '';
            });
        });
    });      
}

const hideOnScroll = () => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementsByTagName("header")[0].style.top = "0";
        } else {
            document.getElementsByTagName("header")[0].style.top = "-75px";
        }
        prevScrollpos = currentScrollPos;
    };
};


const app = () => {
    hideOnScroll();
    navSlide();
}

app();