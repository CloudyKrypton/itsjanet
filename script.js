const linkedin = document.getElementById("linkedin");
const link = document.getElementById("link");
const darkButton = document.getElementById("dark-button");
const buttonImage = document.getElementById("button-image");
const pic = document.getElementById("pic")
const bgTop = document.getElementById("bg-top");
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
    for (var i = 0; i < 2; i++) {
        sectionHeaders[i].classList.toggle("dark-section-header");
    }
    const positionListings = document.querySelectorAll('.position-listing');
    for (var i = 0; i < 4; i++) {
        positionListings[i].classList.toggle("dark-position-listing");
    }
    const positionTitles = document.querySelectorAll('.position-title');
    for (var i = 0; i < 4; i++) {
        positionTitles[i].classList.toggle("dark-position-title");
    }
    const projectCards = document.querySelectorAll('.project-card-inner');
    for (var i = 0; i < 3; i++) {
        projectCards[i].classList.toggle("dark-project-card-inner");
    }
}

darkButton.addEventListener("click", function() {
    if (bgTop.src.endsWith("images/bg_top.png")) {
        bgTop.src = "images/bg_night_top.png";
    } else {
        bgTop.src = "images/bg_top.png";
    }
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
    if (pic.src.endsWith("images/medark.webp")) {
        pic.src = "images/meirl.webp";
    } else {
        pic.src = "images/medark.webp";
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
    if (link.src.endsWith("images/link.png") || link.src.endsWith("images/link-hover.png")) {
        link.src = "images/link-dark.png";
        link.onmouseover = function() {lkOver()};
        link.onmouseout = function() {lkOut()};
    } else {
        link.src = "images/link.png";
        link.onmouseover = function() {lkOver1()};
        link.onmouseout = function() {lkOut1()};
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
            } else if (i == 3) {
                githubs[3].onmouseover = function() {gdOver3()};
                githubs[3].onmouseout = function() {gdOut3()};
            } else if (i == 4) {
                githubs[4].onmouseover = function() {gdOver4()};
                githubs[4].onmouseout = function() {gdOut4()};
            } else if (i == 5) {
                githubs[5].onmouseover = function() {gdOver5()};
                githubs[5].onmouseout = function() {gdOut5()};
            } else if (i == 6) {
                githubs[6].onmouseover = function() {gdOver6()};
                githubs[6].onmouseout = function() {gdOut6()};
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
            } else if (i == 3) {
                githubs[3].onmouseover = function() {gOver3()};
                githubs[3].onmouseout = function() {gOut3()};
            } else if (i == 4) {
                githubs[4].onmouseover = function() {gOver4()};
                githubs[4].onmouseout = function() {gOut4()};
            } else if (i == 5) {
                githubs[5].onmouseover = function() {gOver5()};
                githubs[5].onmouseout = function() {gOut5()};
            } else if (i == 6) {
                githubs[6].onmouseover = function() {gOver6()};
                githubs[6].onmouseout = function() {gOut6()};
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
function lkOver() {
    link.src = "images/link-hover-dark.png";
}
function lkOut() {
    link.src = "images/link-dark.png";
}
function lkOver1() {
    link.src = "images/link-hover.png";
}
function lkOut1() {
    link.src = "images/link.png";
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
function gdOver3() {
    githubs[3].src = "images/github-hover-dark.png";
}
function gdOut3() {
    githubs[3].src = "images/github-dark.png";
}
function gOver3() {
    githubs[3].src = "images/github-hover.png";
}
function gOut3() {
    githubs[3].src = "images/github.png";
}
function gdOver4() {
    githubs[4].src = "images/github-hover-dark.png";
}
function gdOut4() {
    githubs[4].src = "images/github-dark.png";
}
function gOver4() {
    githubs[4].src = "images/github-hover.png";
}
function gOut4() {
    githubs[4].src = "images/github.png";
}
function gdOver5() {
    githubs[5].src = "images/github-hover-dark.png";
}
function gdOut5() {
    githubs[5].src = "images/github-dark.png";
}
function gOver5() {
    githubs[5].src = "images/github-hover.png";
}
function gOut5() {
    githubs[5].src = "images/github.png";
}
function gdOver6() {
    githubs[6].src = "images/github-hover-dark.png";
}
function gdOut6() {
    githubs[6].src = "images/github-dark.png";
}
function gOver6() {
    githubs[6].src = "images/github-hover.png";
}
function gOut6() {
    githubs[6].src = "images/github.png";
}