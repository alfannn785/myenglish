function playAudio(type) {
  const audio = document.getElementById("audioPlayer");

  if (type === "eat") {
    audio.src = "eat.mp3";
  } else if (type === "drink") {
    audio.src = "drink.mp3";
  } else if (type === "hello.mp3") {
    audio.src = "helo.mp3";
  }

  audio.play();
}

  

