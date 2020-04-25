function backgroundImage(){
    var x = document.getElementById("backgroundImage");
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    if (screenWidth > screenHeight){
        x.className = "img-fluid vh-100";
    } else {
        x.className = "img-fluid vw-100";
    }

};