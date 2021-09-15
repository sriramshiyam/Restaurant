const header = document.querySelector("header");
const menuBar = document.getElementById("menu-bar");
const navBar = document.querySelector("header .navbar");
const navBarLinks = document.querySelectorAll("header .navbar a");

const content = document.querySelector(".home .content");
const image = document.querySelector(".home .image");

const topleft = document.querySelectorAll(".gallery .topleft");
const bottomright = document.querySelectorAll(".gallery .bottomright");

let docWidth = document.body.offsetWidth;

let nav = true;

navBarLinks.forEach(x => {
    x.onclick = () => {
        navBar.style.height = "0";
        nav = true;
    }
})

menuBar.onclick = () => {
    if (nav) {
        navBar.style.height = "auto";
        nav = false;
    } else {
        navBar.style.height = "0";
        nav = true;
    }
}

window.addEventListener('scroll', () => {
    let width = docWidth > 480 ? 42 : 20;
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    content.style.transform = `translateX(-${scrollPercentRounded * 20}px)`;
    image.style.transform = `translateX(${scrollPercentRounded * 20}px)`;
    
    if (scrollPercentRounded >= width) {
        topleft.forEach(x => {
            x.style.visibility = "visible";
            x.style.height = "100%";
            x.style.width = "100%";
        });
        bottomright.forEach(x => {
            x.style.visibility = "visible";
            x.style.height = "100%";
            x.style.width = "100%";
        });
        header.style.transition = "top 3s linear";
        header.style.top = "-100%";
    } else {
        topleft.forEach(x => {
            x.style.visibility = "hidden";
            x.style.height = "0";
            x.style.width = "0";
        });
        bottomright.forEach(x => {
            x.style.visibility = "hidden";
            x.style.height = "0";
            x.style.width = "0";
        });
        header.style.transition = "top 1s linear";
        header.style.top = "0";
    }
}
)
