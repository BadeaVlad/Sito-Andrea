function backgroundImage(){
    var x = document.getElementById("backgroundImage");
    var gallery = document.getElementById("navbarGallery");
    var projects = document.getElementById("navbarProjects");
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    console.log("ciao");
    if (screenWidth > screenHeight){
        x.className = "img-fluid vh-100";
    } else {
        x.className = "img-fluid vw-100";
    }
    if (screenWidth >= 768){
        gallery.style.marginLeft = "-250%";
        projects.style.marginLeft = "250%"; 
    } else {
        gallery.style.marginLeft = "0%";
        projects.style.marginLeft = "0%";
    }
    console.log(screenWidth);
};