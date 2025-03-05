document.addEventListener("DOMContentLoaded", (e) => {
  let song = document.querySelector("audio");

  let progress = document.querySelector(".progress");
  let playbtn = document.querySelector(".playPause");
  song.onloadedmetadata = function () {
    progress.max = song.duration;

    setInterval(() => {
      progress.value = song.currentTime;
      console.log(progress.value, "  ", progress.max);
      if (progress.value == 228) {
        progress.value = 0;
        playbtn.classList.add("fa-play");
        playbtn.classList.remove("fa-pause");

      }
    }, 500);
  };

  function playPause() {
    if (playbtn.classList.contains("fa-pause")) {
      playbtn.classList.add("fa-play");
      playbtn.classList.remove("fa-pause");
      song.pause();
    } else {
      song.play();
      playbtn.classList.remove("fa-play");
      playbtn.classList.add("fa-pause");
    }   
  }
  playbtn.addEventListener("click", playPause);
  progress.addEventListener("change", () => {
    console.log("change");
    song.currentTime = progress.value;
  });
  progress.addEventListener("input", () => {
    if (parseInt(this.value) === parseInt(this.max)) {
      console.log("Slider disabled at max!");
    }
  });
});
