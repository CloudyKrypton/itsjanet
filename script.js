const linkedin = document.getElementById("linkedin");
const darkButton = document.getElementById("dark-button");
const buttonImage = document.getElementById("button-image");
const github = document.getElementById("github");
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
    const tablinks = document.querySelectorAll('.tablink');
    tablinks[0].classList.toggle("dark-tablink");
    tablinks[1].classList.toggle("dark-tablink");

    const sectionHeaders = document.querySelectorAll(".section-header");
    sectionHeaders[0].classList.toggle("dark-section-header");
    sectionHeaders[1].classList.toggle("dark-section-header");
    const positionListings = document.querySelectorAll('.position-listing');
    positionListings[0].classList.toggle("dark-position-listing");
    positionListings[1].classList.toggle("dark-position-listing");
    const positionTitles = document.querySelectorAll('.position-title');
    positionTitles[0].classList.toggle("dark-position-title");
    positionTitles[1].classList.toggle("dark-position-title");
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
    if (github.src.endsWith("images/github.png") || github.src.endsWith("images/github-hover.png")) {
        github.src = "images/github-dark.png";
        github.onmouseover = function() {gdOver()};
        github.onmouseout = function() {gdOut()};
    } else {
        github.src = "images/github.png";
        github.onmouseover = function() {gOver()};
        github.onmouseout = function() {gOut()};
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
function gdOver() {
    github.src = "images/github-hover-dark.png";
}
function gdOut() {
    github.src = "images/github-dark.png";
}
function gOver() {
    github.src = "images/github-hover.png";
}
function gOut() {
    github.src = "images/github.png";
}