function navbar() {
    var text = document.getElementById("text");
    var img = document.getElementById("img");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      img.style.filter = "blur(5px)";
      text.style.filter = "blur(5px)";
    } else {
      x.className = "topnav";
      img.style.filter = "blur(0px)";
      text.style.filter = "blur(0px)";
    }
  }

  function crudelia() {
    document.getElementById("crudelia").play();
}