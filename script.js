// console.log("Welcome to MyMusic");

let index = 1;
let audioElement = new Audio('SongList/1.mp3');
let MasterPlay = document.getElementById('masterPlay')
let MyProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let SongItem = Array.from(document.getElementsByClassName('SongItem'));
let songs = [
    { songName: "Tumse Hi", filePath: "SongList/1.mp3", CoverPath: "https://c-cl.cdn.smule.com/rs-s79/arr/02/ea/187b9edc-5884-44f5-9388-b4771a4779c8.jpg" },
    { songName: "Iktara", filePath: "SongList/2.mp3", CoverPath: "https://c-cl.cdn.smule.com/rs-s79/arr/02/ea/187b9edc-5884-44f5-9388-b4771a4779c8.jpg" },
    { songName: "Breakup Song", filePath: "SongList/3.mp3", CoverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNHRlZOUAODQcutC3Dtok0doD8WbzNi9g1yWLlOHxa2eGmMKTJUlRfoixUvEgive2Xn4&usqp=CAU" },
    { songName: "Shukran Allah", filePath: "SongList/4.mp3", CoverPath: "https://i.scdn.co/image/ab67616d0000b273d976f08a9feba38efcafb5ff" },
    { songName: "Raanjhanaa", filePath: "SongList/5.mp3", CoverPath: "https://i.ndtvimg.com/mt/movies/2013-05/sonam-dhanush-raanjhana.jpg?im=Resize=(1230,900)" },
    { songName: "Pehli Nazar Mein", filePath: "SongList/6.mp3", CoverPath: "https://i1.sndcdn.com/artworks-fkWzmAMIOXU9UmmQ-MiNQTA-t500x500.jpg" },
    { songName: "Jashn-E-Bahara", filePath: "SongList/7.mp3", CoverPath: "https://c-cl.cdn.smule.com/rs-s79/arr/27/1b/45d8b8ae-0d9f-47ca-bab9-151194bf5cf0.jpg" },
    { songName: "Kasto Mazza", filePath: "SongList/8.mp3", CoverPath: "https://i.scdn.co/image/ab67616d0000b273241ee666ff4f1d2ef9467460" },
    { songName: "Piyu Bole", filePath: "SongList/9.mp3", CoverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaF2teXJuHLrSFnXt2nbVJ_xjT3Ke6LPO7egDDaq4uGw5_yleau7ynIg84eerIl7dgsr0&usqp=CAU" },
    { songName: "Tera Hone Laga Hoon", filePath: "SongList/10.mp3", CoverPath: "https://i.scdn.co/image/ab67616d0000b273f77a84e6e8fe67deecc242dd" },
]

SongItem.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].filePath;


});


// let audioElement=new Audio('SonglIST\04. Iktara.mp3');

//handle play pause click
MasterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        MasterPlay.classList.remove('fa-pause-circle');
        MasterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    //updating seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    MyProgressBar.value = progress;

})

MyProgressBar.addEventListener('change', () => {
    audioElement.currentTime = MyProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');


    })
//this is comment
    // Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    // element.classList.remove('fa-pause-circle');
    // element.classList.add('fa-palay-circle');

    // })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `SongList/${index}.mp3`;

        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');

        element.addEventListener('click', (e) => {
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');


        })

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (index >= 10) {
        index = 1;

    }
    else {
        index = index + 1;


    }
    audioElement.src = `SongList/${index}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
})



document.getElementById('previous').addEventListener('click', () => {
    if (index <= 1) {
        index = 1;
      


    }
    else {
        index = index - 1;
      

    }
    audioElement.src = `SongList/${index}.mp3`;
   
    audioElement.currentTime = 0;
    audioElement.play();
   
    gif.style.opacity = 1;
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
})
