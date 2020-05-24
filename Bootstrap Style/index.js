function init(){
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
    var firmaCalligrafica = document.getElementById("firmaCalligrafica");
    gallery.style.color = "white";
    projects.style.color = "white";
    gallery.style.textDecoration = "none";
    projects.style.textDecoration = "none";
};
