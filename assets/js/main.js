
(function(){

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

var doc = document.documentElement;
var w   = window;
var b = document.body;

var curScroll;
var prevScroll = w.scrollY || doc.scrollTop || b.scrollTop;
var curDirection = 0;
var prevDirection = 0;

console.log(w.scrollY + " " + doc.scrollTop + " " + b.scrollTop)

var header = document.getElementsByTagName('header');
var toggled;
var threshold = 50;

var checkScroll = function() {
    curScroll = w.scrollY || doc.scrollTop || b.scrollTop;
    console.log(w.scrollY + " " + doc.scrollTop + " " + b.scrollTop)
    if(curScroll > prevScroll) {
        // scrolled down
        curDirection = 2;
    }
    else {
        //scrolled up
        curDirection = 1;
    }

    if(curDirection !== prevDirection) {
        toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if(toggled) {
        prevDirection = curDirection;
    }
};

var toggleHeader = function() { 
    toggled = true;
    if(curDirection === 2 && curScroll > threshold) {
        //header.classList.add('hide');
        document.getElementsByTagName("header")[0].style.top = "-120px";
    }
    else if (curDirection === 1) {
        //header.classList.remove('hide');
        document.getElementsByTagName("header")[0].style.top = "0px";
    }
    else {
        toggled = false;
    }
    return toggled;
};



const app = () => {
    window.addEventListener('scroll', checkScroll);
    //hideOnScroll();
    navSlide();
}

app();

})();