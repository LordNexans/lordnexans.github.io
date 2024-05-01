let listAudio = [{
  name: "Vodka Rhum Contrex - Paul & Mathias",
  file: "./song/copie-conforme/MathiasPaul-VodkaRhumContrex.mp3",
  duration: "03:31"
},
{
  name: "Dansez le chalançon - Antoine",
  file: "./song/copie-conforme/Antoine-Dansezlechalancon.mp3",
  duration: "03:14"
},
{
  name: "Skibidi - Claire & Antoine",
  file: "./song/copie-conforme/ClaireAntoine-Skibidi.mp3",
  duration: "02:44"
},
{
  name: "Dimanche - Mathias",
  file: "./song/copie-conforme/Mathias-Dimanche.mp3",
  duration: "02:18"
},
{
  name: "I Fucked Yr Mom - Claire",
  file: "./song/copie-conforme/Claire-IFuckedYrMom.mp3",
  duration: "02:33"
},
{
  name: "Last Christmas - Antoine",
  file: "./song/copie-conforme/Antoine-LastChristmas.mp3",
  duration: "04:29"
},
{
  name: "On ne porte pas de sous vetement - Mathias & Claire",
  file: "./song/copie-conforme/MathiasClaire-Onneportepasdesousvetement.mp3",
  duration: "04:22"
},
{
  name: "Bloody Mary - Alice",
  file: "./song/copie-conforme/Alice-BloodyMary.mp3",
  duration: "04:11"
},
{
  name: "PETETE - Alice",
  file: "./song/copie-conforme/Alice-PETETE.mp3",
  duration: "02:09"
},
{
  name: "Aline - Mathias",
  file: "./song/souvenir-dete/Aline.mp3",
  duration: "03:06"
},
{
  name: "Je veux chanter - Paul",
  file: "./song/souvenir-dete/chanter.mp3",
  duration: "04:37"
},
{
  name: "Le coup de soleil - Alice",
  file: "./song/souvenir-dete/soleil.mp3",
  duration: "03:39"
},
{
  name: "Despacito - Antoine & Mathias",
  file: "./song/souvenir-dete/despacito.mp3",
  duration: "04:41"
},
{
  name: "Le monde de Disney - Antoine & Mathias",
  file: "./song/souvenir-dete/disney.mp3",
  duration: "02:02"
},
{
  name: "Route National 7 - Antoine",
  file: "./song/souvenir-dete/national.mp3",
  duration: "02:49"
},
{
  name: "Hit Sale - Antoine, Mathias & Paul",
  file: "./song/souvenir-dete/sale.mp3",
  duration: "03:19"
},
{
  name: "Le temps de l'amour - Antoine",
  file: "./song/souvenir-dete/amour.mp3",
  duration: "02:51"
},
{
  name: "Le Temps Est Bon - Mathias",
  file: "./song/souvenir-dete/bon.mp3",
  duration: "03:39"
},
{
  name: "Traverser - Alice",
  file: "./song/souvenir-dete/traverser.mp3",
  duration: "02:58"
},
{
  name: "Voyage voyage - Antoine",
  file: "./song/anti-raciste/voyage.mp3",
  duration: "04:11"
},
{
  name: "Dado ft. Mathias - Antoine",
  file: "./song/anti-raciste/dado.mp3",
  duration: "03:21"
},
{
  name: "Moskau - Antoine",
  file: "./song/anti-raciste/moskau.mp3",
  duration: "04:32"
},
{
  name: "Сумасшедшая - Antoine",
  file: "./song/anti-raciste/alexei.mp3",
  duration: "04:19"
},
{
  name: "Je serai le président de tous les français - Antoine",
  file: "./song/anti-raciste/chirac.mp3",
  duration: "01:56"
},
{
  name: "Scream - Antoine",
  file: "./song/anti-raciste/scream.mp3",
  duration: "03:29"
},
{
  name: "Africain à Paris - Antoine",
  file: "./song/anti-raciste/africain.mp3",
  duration: "03:55"
},
{
  name: "Barbie Girl - Alice & Mathias",
  file: "./song/Alice_-_Barbie_girl_(feat_Mathias).mp3",
  duration: "03:21"
},
{
  name: "Meuf - Alice",
  file: "./song/Alice_-_Meuf.ogg",
  duration: "03:14"
},
{
  name: "Winx - Alice",
  file: "./song/winx.mp3",
  duration: "01:31"
},
{
  name: "Assassin des templiers - Antoine",
  file: "./song/Antoine_-_Assassin_des_Templiers.ogg",
  duration: "04:39"
},
{
  name: "Tiktok Girl - Antoine",
  file: "./song/Antoine_tiktok_girl.ogg",
  duration: "03:41"
},
{
  name: "Skake it of - Antoine",
  file: "./song/shakeitof.ogg",
  duration: "04:01"
},
{
  name: "Gas Gas Gas - Antoine & Mathias",
  file: "./song/gasgasgas.ogg",
  duration: "03:16"
},
{
  name: "Corona Song - Mathias",
  file: "./song/coronasong.ogg",
  duration: "04:23"
},
{
  name: "Canard - Mathias",
  file: "./song/Mathias_-_Canard.ogg",
  duration: "02:41"
},
{
  name: "Rap God - Mathias",
  file: "./song/Mathias_-_rap_god.ogg",
  duration: "06:09"
},
{
  name: "Super Sonic Racing - Mathias",
  file: "./song/Mathias_-_Super_Sonic_Racing.ogg",
  duration: "04:02"
},
{
  name: "Joyeux Anniversaire - Mathias, Antoine, Paul et Alice",
  file: "./song/Joyeux-anniverdsaire-cover.ogg",
  duration: "03:13"
}
]

function createTrackItem4(index, name, duration) {
  var trackItem = document.createElement('div');
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  document.querySelector(".playlist-ctn4").appendChild(trackItem);

  var playBtnItem = document.createElement('div');
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  var btnImg = document.createElement('i');
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-" + index);
  document.querySelector("#pbp-" + index).appendChild(btnImg);

  var trackInfoItem = document.createElement('div');
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name
  document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

  var trackDurationItem = document.createElement('div');
  trackDurationItem.setAttribute("class", "playlist-duration");
  trackDurationItem.innerHTML = duration
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
}

function createTrackItem3(index, name, duration) {
  var trackItem = document.createElement('div');
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  document.querySelector(".playlist-ctn3").appendChild(trackItem);

  var playBtnItem = document.createElement('div');
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  var btnImg = document.createElement('i');
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-" + index);
  document.querySelector("#pbp-" + index).appendChild(btnImg);

  var trackInfoItem = document.createElement('div');
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name
  document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

  var trackDurationItem = document.createElement('div');
  trackDurationItem.setAttribute("class", "playlist-duration");
  trackDurationItem.innerHTML = duration
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
}

function createTrackItem2(index, name, duration) {
  var trackItem = document.createElement('div');
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  document.querySelector(".playlist-ctn2").appendChild(trackItem);

  var playBtnItem = document.createElement('div');
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  var btnImg = document.createElement('i');
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-" + index);
  document.querySelector("#pbp-" + index).appendChild(btnImg);

  var trackInfoItem = document.createElement('div');
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name
  document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

  var trackDurationItem = document.createElement('div');
  trackDurationItem.setAttribute("class", "playlist-duration");
  trackDurationItem.innerHTML = duration
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
}

function createTrackItem1(index, name, duration) {
  var trackItem = document.createElement('div');
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  document.querySelector(".playlist-ctn1").appendChild(trackItem);

  var playBtnItem = document.createElement('div');
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  var btnImg = document.createElement('i');
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-" + index);
  document.querySelector("#pbp-" + index).appendChild(btnImg);

  var trackInfoItem = document.createElement('div');
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name
  document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

  var trackDurationItem = document.createElement('div');
  trackDurationItem.setAttribute("class", "playlist-duration");
  trackDurationItem.innerHTML = duration
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
}

for (var i = 0; i < listAudio.length; i++) {
  if (listAudio[i].file.includes("anti-raciste")) {
    createTrackItem3(i, listAudio[i].name, listAudio[i].duration);
  } else if (listAudio[i].file.includes("copie-conforme")) {
    createTrackItem1(i, listAudio[i].name, listAudio[i].duration);
  } else if (listAudio[i].file.includes("souvenir-dete")) {
    createTrackItem2(i, listAudio[i].name, listAudio[i].duration);
  } else {
    createTrackItem4(i, listAudio[i].name, listAudio[i].duration);
  }

}
var indexAudio = 0;

function imageExists(imageUrl, callback) {
  var img = new Image();
  img.onload = function () { callback(true); };
  img.onerror = function () { callback(false); };
  img.src = imageUrl;
}


// Check if the image exists based on the variable value
function loadNewTrack(index) {
  let imageName = listAudio[index].file
  if (imageName.includes("anti-raciste")) {
    var imageUrl = "./img/anti-raciste.png"; // Set the URL of the first picture
  } else if (imageName.includes("copie-conforme")) {
    var imageUrl = "./img/copie-conforme.png"; // Set the URL of the second picture
  } else if (imageName.includes("souvenir-dete")) {
    var imageUrl = "./img/souvenirs-dete.jpg";
  } else {
    var imageUrl = "./img/Autre.png";
  }

  if (imageUrl) {
    imageExists(imageUrl, function (exists) {
      if (exists) {
        // Set the src attribute of the <img> element
        document.getElementById('dynamicImage').src = imageUrl;
      } else {
        console.log("Image does not exist: " + imageUrl);
      }
    });
  }
  var player = document.querySelector('#source-audio')
  player.src = listAudio[index].file
  let textaudio = listAudio[index].name
  let textaudio2
  if (textaudio.includes('-')) {
    textaudio2 = textaudio.replace(/-/g, '<br><p class="subtitle-overlay-player">');
  }
  document.querySelector('.title').innerHTML = textaudio2
  document.querySelector('.titlebis').innerHTML = textaudio
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load()
  this.toggleAudio()
  this.updateStylePlaylist(this.indexAudio, index)
  this.indexAudio = index;
}

var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++) {
  playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
  for (let i = 0; i < playListItems.length; i++) {
    if (playListItems[i] == event.target) {
      var clickedIndex = event.target.getAttribute("data-index")
      if (clickedIndex == this.indexAudio) { // alert('Same audio');
        this.toggleAudio()
      } else {
        loadNewTrack(clickedIndex);
      }
    }
  }
}

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function () {
  document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

  if (this.currentAudio.paused) {
    document.querySelector('#icon-play').style.display = 'none';
    document.querySelector('#icon-pause').style.display = 'block';
    document.querySelector('#ptc-' + this.indexAudio).classList.add("active-track");
    this.playToPause(this.indexAudio)
    this.currentAudio.play();
  } else {
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    this.currentAudio.pause();
  }
}

function pauseAudio() {
  this.currentAudio.pause();
  clearInterval(interval1);
}

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
  var t = this.currentAudio.currentTime
  timer.innerHTML = this.getMinutes(t);
  this.setBarProgress();
  if (this.currentAudio.ended) {
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    if (this.indexAudio < listAudio.length - 1) {
      var index = parseInt(this.indexAudio) + 1
      this.loadNewTrack(index)
    }
  }
}


function setBarProgress() {
  var progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
  document.getElementById("myBar").style.width = progress + "%";
}


function getMinutes(t) {
  var min = parseInt(parseInt(t) / 60);
  var sec = parseInt(t % 60);
  if (sec < 10) {
    sec = "0" + sec
  }
  if (min < 10) {
    min = "0" + min
  }
  return min + ":" + sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
  var percent = event.offsetX / progressbar.offsetWidth;
  this.currentAudio.currentTime = percent * this.currentAudio.duration;
  barProgress.style.width = percent * 100 + "%";
}

function forward() {
  this.currentAudio.currentTime = this.currentAudio.currentTime + 5
  this.setBarProgress();
}

function rewind() {
  this.currentAudio.currentTime = this.currentAudio.currentTime - 5
  this.setBarProgress();
}


function next() {
  if (this.indexAudio < listAudio.length - 1) {
    var oldIndex = this.indexAudio
    this.indexAudio++;
    updateStylePlaylist(oldIndex, this.indexAudio)
    this.loadNewTrack(this.indexAudio);
  }
}

function previous() {
  if (this.indexAudio > 0) {
    var oldIndex = this.indexAudio
    this.indexAudio--;
    updateStylePlaylist(oldIndex, this.indexAudio)
    this.loadNewTrack(this.indexAudio);
  }
}

function updateStylePlaylist(oldIndex, newIndex) {
  document.querySelector('#ptc-' + oldIndex).classList.remove("active-track");
  this.pauseToPlay(oldIndex);
  document.querySelector('#ptc-' + newIndex).classList.add("active-track");
  this.playToPause(newIndex)
}

function playToPause(index) {
  var ele = document.querySelector('#p-img-' + index)
  ele.classList.remove("fa-play");
  ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
  var ele = document.querySelector('#p-img-' + index)
  ele.classList.remove("fa-pause");
  ele.classList.add("fa-play");
}


function toggleMute() {
  var btnMute = document.querySelector('#toggleMute');
  var volUp = document.querySelector('#icon-vol-up');
  var volMute = document.querySelector('#icon-vol-mute');
  if (this.currentAudio.muted == false) {
    this.currentAudio.muted = true
    volUp.style.display = "none"
    volMute.style.display = "block"
  } else {
    this.currentAudio.muted = false
    volMute.style.display = "none"
    volUp.style.display = "block"
  }
}

