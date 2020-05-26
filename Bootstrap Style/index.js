function init(){
    timer();
    backgroundImage();
    navbar();
};

function backgroundImage(){
    var x = document.getElementById("backgroundImage");
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    var realheight = screenHeight - 63;
    if (screenWidth > screenHeight){
        x.style.height = realheight + "px";
        x.style.width = "auto";
    } else {
        x.style.maxHeight = realheight + "px";
        x.style.width = screenWidth;
    }
    console.log(screenWidth);

};

function navbar(){
    var gallery = document.getElementById("navbarGallery");
    var projects = document.getElementById("navbarProjects");
    var wallpaper = document.getElementById("navbarWallpaper");
    var navbar = document.getElementById("navbar");
    var firmaCalligrafica = document.getElementById("firmaCalligrafica");
    navbar.style.opacity = "0.7";
    gallery.style.color = "black";
    wallpaper.style.color = "black";
    projects.style.color = "black";
    gallery.style.textDecoration = "none";
    wallpaper.style.textDecoration = "none";
    projects.style.textDecoration = "none";
};

function randomizerImg(){
    var x = document.getElementById("backgroundImage");
    var backgroungImages = ["_HLX2852.jpg", "_HLX4827.jpg", "_HLX5342.jpg", "3.jpg", "4.jpg", "10.jpg", "16.jpg", "Tramonto 3.jpg", "Tunnel 2.jpg"];
    var backgroundColors = ["#A6754B", "#A68F86", "#595959", "#735A55", "#261813", "#8C6456", "#45788C", "#D9946C", "#59372A"];
    var bodyBackgroundColor = document.getElementById("body");
    var i = Math.floor( Math.random()*8);
    x.src = backgroungImages[i];
    bodyBackgroundColor.style.backgroundColor = backgroundColors[i];
};
function timer(){
    window.setInterval("randomizerImg()", 5000);
};

