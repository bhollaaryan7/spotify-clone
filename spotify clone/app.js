// console.log("welcome");

// initialise variables

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Let me kill you",
    filePath: "./songs/1.mp3",
    coverPath: "covers/1.jpg",
    timeStamp: "02:54",
  },
  {
    songName: "up and about",
    filePath: "./songs/2.mp3",
    coverPath: "covers/2.jpg",
    timeStamp: "03:37",
  },
  {
    songName: "Gains",
    filePath: "./songs/3.mp3",
    coverPath: "covers/3.jpg",
    timeStamp: "01:59",
  },
  {
    songName: "Catastrophe",
    filePath: "./songs/4.mp3",
    coverPath: "covers/4.jpg",
    timeStamp: "01:14",
  },
  {
    songName: "Breaks",
    filePath: "./songs/5.mp3",
    coverPath: "covers/5.jpg",
    timeStamp: "03:10",
  },
  {
    songName: "To be judged",
    filePath: "./songs/6.mp3",
    coverPath: "covers/6.jpg",
    timeStamp: "04:13",
  },
  {
    songName: "The bomb",
    filePath: "./songs/7.mp3",
    coverPath: "covers/7.jpg",
    timeStamp: "02:22",
  },
  {
    songName: "Accident",
    filePath: "./songs/8.mp3",
    coverPath: "covers/8.jpg",
    timeStamp: "01:32",
  },
  {
    songName: "Coming at you",
    filePath: "./songs/9.mp3",
    coverPath: "covers/9.jpg",
    timeStamp: "00:56",
  },
  {
    songName: "Intellectual",
    filePath: "./songs/10.mp3",
    coverPath: "covers/10.jpg",
    timeStamp: "03:44",
  },
];

// songItems.forEach((element, i) => {
//   console.log(element, i);
//   // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
// });
songcontainer = document.getElementById("songContainerid");

songs.forEach((elem) => {
  // console.log(elem);
  songcontainer.innerHTML += `
  <div class="songItem">
  <img src="${elem.coverPath}" alt="1" />
  <span class="songName">${elem.songName}</span>
  <span class="songlistplay"
    ><span class="timestamp"
      >${elem.timeStamp}
      <i id="${elem.filePath}" class="far songItemPlay fa-play-circle"></i> </span
  ></span>
</div>
  `;
});

let audioElement = new Audio(`./songs/1.mp3`);

// handle play pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    // ` console.log("dddddddddddddd");`;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
    // `    console.log("dddddddddddddd");`;
  }
});

// audioElement.addEventListener("ended",()=>{
// let currSong=audioElement.src;
// let songN=null;
// for(let i=0;i<=currSong.length;i++){
//   if(currSong[i]==)
// }

// })

// listen events

audioElement.addEventListener("timeupdate", () => {
  // update seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = e.target.id;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    nextArrayElem = null;
    song_playing = document.getElementsByClassName("fa-pause-circle")[0].id;
    songs.forEach((elem, i) => {
      if (elem.filePath == song_playing) {
        nextArrayElem = i + 1;
        return;
      }
    });

    console.log(nextArrayElem % 9);
    document.getElementById(songs[nextArrayElem % 10].filePath).click();
  }
});

document.getElementById("previous").addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    nextArrayElem = null;
    song_playing = document.getElementsByClassName("fa-pause-circle")[0].id;
    songs.forEach((elem, i) => {
      if (elem.filePath == song_playing) {
        nextArrayElem = i - 1;
        return;
      }
    });

    console.log(songs[nextArrayElem]);
    document.getElementById(songs[(10 - -nextArrayElem) % 10].filePath).click();
  }
});
