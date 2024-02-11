const linkedin = document.getElementById("linkedin");
const darkButton = document.getElementById("dark-button");
const buttonImage = document.getElementById("button-image");
const githubs = document.getElementsByClassName("github");
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    // darkButton.textContent = darkButton.textContent === "🌙" ? "🌞" : "🌙";
    var element1 = document.querySelector(".title");
    element1.classList.toggle("dark-title");
    var element2 = document.querySelector(".about-me-text");
    element2.classList.toggle("dark-about-me-text");
    var element3 = document.querySelector(".tabs");
    element3.classList.toggle("dark-tabs");
    var element4 = document.querySelector(".credit");
    element4.classList.toggle("dark-credit");
    const tablinks = document.querySelectorAll('.tablink');
    tablinks[0].classList.toggle("dark-tablink");
    tablinks[1].classList.toggle("dark-tablink");
    tablinks[2].classList.toggle("dark-tablink");

    const sectionHeaders = document.querySelectorAll(".section-header");
    sectionHeaders[0].classList.toggle("dark-section-header");
    sectionHeaders[1].classList.toggle("dark-section-header");
    const positionListings = document.querySelectorAll('.position-listing');
    positionListings[0].classList.toggle("dark-position-listing");
    positionListings[1].classList.toggle("dark-position-listing");
    const positionTitles = document.querySelectorAll('.position-title');
    positionTitles[0].classList.toggle("dark-position-title");
    positionTitles[1].classList.toggle("dark-position-title");
    const projectCards = document.querySelectorAll('.project-card');
    projectCards[0].classList.toggle("dark-project-card");
    projectCards[1].classList.toggle("dark-project-card");
}

darkButton.addEventListener("click", function() {
    if (buttonImage.src.endsWith("images/moon.png")) {
        buttonImage.src = "images/sun.png";
        darkButton.style.paddingTop = "7px";
        darkButton.style.backgroundColor = "#36344b";
        darkButton.style.borderColor = "#d6d5e8";
        darkButton.style.borderWidth = "3px";
    } else {
        buttonImage.src = "images/moon.png";
        darkButton.style.paddingTop = "5px";
        darkButton.style.backgroundColor = "#dd7d00";
        darkButton.style.borderColor = "#6e4030";
        darkButton.style.borderWidth = "5px";
    }
    if (linkedin.src.endsWith("images/linkedin.png") || linkedin.src.endsWith("images/linkedin-hover.png")) {
        linkedin.src = "images/linkedin-dark.png";
        linkedin.onmouseover = function() {ldOver()};
        linkedin.onmouseout = function() {ldOut()};
    } else {
        linkedin.src = "images/linkedin.png";
        linkedin.onmouseover = function() {lOver()};
        linkedin.onmouseout = function() {lOut()};
    }
    for (var i = 0; i < githubs.length; i++) {
        if (githubs[i].src.endsWith("images/github.png") || 
        githubs[i].src.endsWith("images/github-hover.png")) {
            githubs[i].src = "images/github-dark.png";
            if (i == 0) {
                githubs[0].onmouseover = function() {gdOver0()};
                githubs[0].onmouseout = function() {gdOut0()};
            } else if (i == 1) {
                githubs[1].onmouseover = function() {gdOver1()};
                githubs[1].onmouseout = function() {gdOut1()};
            } else if (i == 2) {
                githubs[2].onmouseover = function() {gdOver2()};
                githubs[2].onmouseout = function() {gdOut2()};
            }
        } else {
            githubs[i].src = "images/github.png";
            if (i == 0) {
                githubs[0].onmouseover = function() {gOver0()};
                githubs[0].onmouseout = function() {gOut0()};
            } else if (i == 1) {
                githubs[1].onmouseover = function() {gOver1()};
                githubs[1].onmouseout = function() {gOut1()};
            } else if (i == 2) {
                githubs[2].onmouseover = function() {gOver2()};
                githubs[2].onmouseout = function() {gOut2()};
            }
        }
    }
});
function ldOver() {
    linkedin.src = "images/linkedin-hover-dark.png";
}
function ldOut() {
    linkedin.src = "images/linkedin-dark.png";
}
function lOver() {
    linkedin.src = "images/linkedin-hover.png";
}
function lOut() {
    linkedin.src = "images/linkedin.png";
}
function gdOver0() {
    githubs[0].src = "images/github-hover-dark.png";
}
function gdOut0() {
    githubs[0].src = "images/github-dark.png";
}
function gOver0() {
    githubs[0].src = "images/github-hover.png";
}
function gOut0() {
    githubs[0].src = "images/github.png";
}
function gdOver1() {
    githubs[1].src = "images/github-hover-dark.png";
}
function gdOut1() {
    githubs[1].src = "images/github-dark.png";
}
function gOver1() {
    githubs[1].src = "images/github-hover.png";
}
function gOut1() {
    githubs[1].src = "images/github.png";
}
function gdOver2() {
    githubs[2].src = "images/github-hover-dark.png";
}
function gdOut2() {
    githubs[2].src = "images/github-dark.png";
}
function gOver2() {
    githubs[2].src = "images/github-hover.png";
}
function gOut2() {
    githubs[2].src = "images/github.png";
}