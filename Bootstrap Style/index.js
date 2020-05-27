function init(){
    timer();
    backgroundImage();
    navbar();
};

function backgroundImage(){
    var x = document.getElementById("backgroundImage");
    var navbar = document.getElementById("navbar");
    var backgroundCover = document.getElementById("backgroundCover");
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    var realheight = screenHeight - 63;
    var coverwidth = screenWidth + 1000;
    backgroundCover.style.position = "absolute";
    //backgroundCover.style.filter = "blur(7px)";
    if (screenWidth > screenHeight){
        x.src = "3.jpg";
        backgroundCover.src = "3blurred.jpg";
        x.style.height = realheight + "px";
        x.style.width = "auto";
        backgroundCover.style.width = screenWidth + "px";
        backgroundCover.style.height = screenHeight + "px";
    } else {
        x.src = "Tunnel 2.jpg";
        backgroundCover.src = "Tunnel 2blurred.jpg";
        x.style.maxHeight = realheight + "px";
        x.style.width = screenWidth;
        backgroundCover.style.width = screenWidth + "px";
        backgroundCover.style.height = screenHeight + "px";
    }
    console.log(screenWidth);

};

function navbar(){
    var gallery = document.getElementById("navbarGallery");
    var projects = document.getElementById("navbarProjects");
    var wallpaper = document.getElementById("navbarWallpaper");
    var about = document.getElementById("navbarAbout");
    var navbar = document.getElementById("navbar");
    var firmaCalligrafica = document.getElementById("firmaCalligrafica");
    navbar.style.opacity = "0.6";
    navbar.style.backgroundColor = "black";
    about.style.color = "white";
    gallery.style.color = "white";
    wallpaper.style.color = "white";
    projects.style.color = "white";
    about.style.textDecoration = "none";
    gallery.style.textDecoration = "none";
    wallpaper.style.textDecoration = "none";
    projects.style.textDecoration = "none";
};

function randomizerImg(){
    var x = document.getElementById("backgroundImage");
    var screenWidth = document.documentElement.clientWidth;
    var backgroundCover = document.getElementById("backgroundCover");
    var screenHeight = document.documentElement.clientHeight;
    var backgroungImagesDesktop = ["_HLX2852.jpg", "_HLX4827.jpg", "3.jpg", "10.jpg", "16.jpg"];
    var backgroundImagesMobile = ["_HLX5342.jpg", "4.jpg", "Tramonto 3.jpg", "Tunnel 2.jpg"];
    var backgroungImagesDesktopBlurred = ["_HLX2852blurred.jpg", "_HLX4827blurred.jpg", "3blurred.jpg", "10blurred.jpg", "16blurred.jpg"];
    var backgroundImagesMobileBlurred = ["_HLX5342blurred.jpg", "4blurred.jpg", "Tramonto 3blurred.jpg", "Tunnel 2blurred.jpg"];
    var i;
    //bodyBackgroundColor.style.backgroundColor = backgroundColors[i];
    if (screenWidth > screenHeight){
        i = Math.floor( Math.random()*4);
        x.src = backgroungImagesDesktop[i];
        backgroundCover.src = backgroungImagesDesktopBlurred[i];
    } else {
        i = Math.floor( Math.random()*3);
        x.src = backgroundImagesMobile[i];
        backgroundCover.src = backgroundImagesMobileBlurred[i];
    }
};
function timer(){
    window.setInterval("randomizerImg()", 5000);
};

