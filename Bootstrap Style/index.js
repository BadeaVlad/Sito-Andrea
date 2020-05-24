function init(){
    backgroundImage();
};

function backgroundImage(){
    var x = document.getElementById("backgroundImage");
    var gallery = document.getElementById("navbarGallery");
    var projects = document.getElementById("navbarProjects");
    var firmaCalligrafica = document.getElementById("firmaCalligrafica");
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
