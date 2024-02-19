
const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
let myVideoStream;//to access anywhere


//yemiseraln userun yanten video na audio ltekem blo yemiteyk
//and return yemiyadergl promise new so yemetawn .then blen mekebel enchlalen.
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: false,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
  });


  function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();//the minute videon stagegnew video tage lay play  adrgew
    });
    videoGrid.append(video);
  }
