const video = document.getElementById("videoBackground");
const sound = document.getElementById("sound");
const audioClick = document.getElementById("audioClick");
const links = document.querySelectorAll("ul a");
const hide = document.getElementById("infobox")


sound.addEventListener("click", () => {
    sound.classList.toggle("fa-volume-up");
    if (video.muted === false) {
        video.muted = true; 
    } else {
        video.muted = false;
    }
    clickSound();
});

sound.addEventListener("mouseenter", hoverSound);



for (let i=0; i < links.length; i++) {
    links[i].addEventListener("click", clickSound);
    links[i].addEventListener("mouseenter", hoverSound);
}

function clickSound() {
    audioClick.play();
}

function hoverSound() {
    audioHover.play();
}

document.getElementById("hideShow").onclick = function() {hideShow()};

function hideShow() {
    var x = document.getElementById("infobox");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  document.getElementById("hideShowA").onclick = function() {hideShowA()};

  function hideShowA() {
    var x = document.getElementById("infobox");
    x.style.display = "none";
  }

  document.getElementById("hideShow2").onclick = function() {hideShow2()};

  function hideShow2() {
    var x = document.getElementById("setup");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  document.getElementById("hideShowB").onclick = function() {hideShowB()};

  function hideShowB() {
    var x = document.getElementById("setup");
    x.style.display = "none";
  }

  document.getElementById("hideShow3").onclick = function() {hideShow3()};

  function hideShow3() {
    var x = document.getElementById("contact");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  document.getElementById("hideShowC").onclick = function() {hideShowC()};

  function hideShowC() {
    var x = document.getElementById("contact");
    x.style.display = "none";
  }
  