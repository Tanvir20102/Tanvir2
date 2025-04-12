document.querySelector(".burger").addEventListener("click", menu = () => {
    let close = document.querySelector(".close");
    let links = document.querySelector(".nav-links");
    let ul = document.getElementsByTagName("ul");
    let burger = document.querySelector(".burger");

    if (links.style.display == "flex") {
        links.style.display = "none";
        burger.style.display = "flex";
        close.style.display = "none";
    } else {
        links.style.display = "flex";

        burger.style.display = "none";
        close.style.display = "flex";

    }
});

document.querySelector(".close").addEventListener("click", change = () => {
    let close = document.querySelector(".close");
    let links = document.querySelector(".nav-links");
    let ul = document.getElementsByTagName("ul");
    let burger = document.querySelector(".burger");

    if (close.style.display == "flex") {
        links.style.display = "none";
        close.style.display = "none";
        burger.style.display = "flex";

    } else {
        links.style.display = "flex";
        close.style.display = "flex";
        burger.style.display = "none";
    }
});

// let links = document.querySelector('.nav-links');
// let burger = document.querySelector('.burger');
// let close = document.querySelector('.close');
// if (links.style.display == "flex") {
//     burger.style.display == "none";
//     close.style.display == "none";
// } else {
//     burger.style.display == "flex";
//     close.style.display == "flex";
// }


// box => 
let boxHeading_1 = document.querySelector(".box-heading-1");
let boxHeading_2 = document.querySelector(".box-heading-2");
let boxHeading_3 = document.querySelector(".box-heading-3");



function h_1() {
    boxHeading_1.style.color = "#f8f8db";
    boxHeading_2.style.color = "#696767";
    boxHeading_3.style.color = "#696767";
    boxHeading_1.style.paddingLeft = "0.5vw";
    boxHeading_2.style.paddingLeft = "2vw";
    boxHeading_3.style.paddingLeft = "2vw";
    document.getElementById("para").innerHTML = "Welcome to our Design Section, where innovation meets creativity. Our team of skilled designers combines cutting - edge technology with aesthetic precision to deliver unique, user - centric solutions that stand out in the digital world."
}

function h_2() {
    boxHeading_2.style.color = "#f8f8db";
    boxHeading_1.style.color = "#696767";
    boxHeading_3.style.color = "#696767";
    boxHeading_2.style.paddingLeft = "0.5vw";
    boxHeading_1.style.paddingLeft = "2vw";
    boxHeading_3.style.paddingLeft = "2vw";
    document.getElementById("para").innerHTML = "Explore our innovative electronics projects, where cutting-edge technology meets practical solutions. Our team of experts designs and develops a wide range of projects, from simple DIY electronics to complex systems."
}

function h_3() {
    boxHeading_3.style.color = "#f8f8db";
    boxHeading_1.style.color = "#696767";
    boxHeading_2.style.color = "#696767";
    boxHeading_3.style.paddingLeft = "0.5vw";
    boxHeading_1.style.paddingLeft = "2vw";
    boxHeading_2.style.paddingLeft = "2vw";
    document.getElementById("para").innerHTML = "Explore our wide array of electronics projects designed to inspire and challenge you. From basic components to advanced systems, each project is designed to help you understand key principles of electronics and apply them in real-world applications."
}


