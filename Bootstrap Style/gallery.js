function init(){
    //timer();
    //backgroundImage();
    navbar();
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