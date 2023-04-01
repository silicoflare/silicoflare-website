var current = "dark";

function changeMode() {
    if (current == 'dark') {
        current = 'light';
        document.getElementById("mode").setAttribute("src", "data/light.png");
        document.getElementById("mode").setAttribute("alt", "light_mode");
        document.querySelector(".tooltip").innerHTML = "Light Mode";
        document.querySelector(".styles").setAttribute("href", "silicoflare_light.css");
    }
    else if (current == 'light') {
        current = 'dark';
        document.getElementById("mode").setAttribute("src", "data/dark.png");
        document.getElementById("mode").setAttribute("alt", "dark_mode");
        document.querySelector(".tooltip").innerHTML = "Dark Mode";
        document.querySelector(".styles").setAttribute("href", "silicoflare_dark.css");
    }
}


function hoverIn() {
    document.getElementById("modeSel").style.backgroundColor = "rgba(53, 53, 53, 1)";
    document.getElementById("mode").style.opacity = 1;
    document.querySelector(".tooltip").style.display = "block";
}

function hoverOut() {
    document.getElementById("modeSel").style.backgroundColor = "rgba(53, 53, 53, 0.5)";
    document.getElementById("mode").style.opacity = 0.5;
    document.querySelector(".tooltip").style.display = "none";
}