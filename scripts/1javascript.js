function showpics() {
  var myPhoto = ["images/twitchLogoBlack.png", "images/instagramLogoBlack.png", "images/smallLogo.png", "images/youtubeLogoBlack.png"]
  var container = document.getElementById("photos");

  // (var i=0, len = myPhoto.length; i < len; ++i)
  for (var i = 0, len = 1; i < len; ++i) {
    var randomImg = Math.floor(Math.random() * myPhoto.length);
    var img = new Image();
    img.src = myPhoto[randomImg];
    container.appendChild(img);
  }

}