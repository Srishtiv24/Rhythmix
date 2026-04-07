console.log("Welcome to Rhythmix");

let currSongIndex=0;
//audio class prebuilt of java
let currAudioElem=new Audio('songs/ncs1.mp3');

let masterPlay=document.getElementById("masterPlay");
let progressBar=document.getElementById("progressBar");
let currSong=document.getElementById("currSong");
let gif=document.getElementById("gif");

let songs=[
    {songName:"Warriyo - Mortals" , filePath:"songs/ncs1.mp3"},
    {songName:"Lost Sky - Fearless" , filePath:"songs/2.mp3"},
    {songName:"Janji - Heroes Tonight" , filePath:"songs/3.mp3"},
    {songName:"DEAF KEV - Invincible" , filePath:"songs/4.mp3"},
    {songName:"Unknown - Superhero" , filePath:"songs/5.mp3"},
    {songName:"Alan Walker – Spectre" , filePath:"songs/6.mp3"}
];

//naming songs
songs.forEach((song,i)=>
{  let span=document.querySelectorAll(".songName")[i];
       span.innerText=song.songName;
 
   let audio=new Audio(song.filePath);
   audio.preload = "metadata"; 
   audio.addEventListener("loadedmetadata",()=>{
    let duration=audio.duration;
    let min=Math.floor(duration/60);
    let sec=Math.floor(duration%60).toString().padStart(2,"0");

    let time_stamp=document.querySelectorAll(".time-stamp")[i];
    time_stamp.innerText=`${min}:${sec}`;
}
   );
});


//events
masterPlay.addEventListener("click",()=>{
    if(currAudioElem.paused || currAudioElem.currentTime<=0)//audio class defined this methods
    {
        currAudioElem.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        currSong.innerText=songs[currSongIndex].songName;
        gif.style.opacity=1;
    }
    else
    {
        currAudioElem.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
});

//progress bar ko update karte rhna 
currAudioElem.addEventListener("timeupdate",()=>
    {
        let progress=parseInt((currAudioElem.currentTime/currAudioElem.duration)*100);//in percentage
        progressBar.value=progress;
        console.log(progress);
    });

//song ko aage piche  karna as per chamge in progresss bar
progressBar.addEventListener("change",()=>
{
    currAudioElem.currentTime=(progressBar.value*currAudioElem.duration)/100; 
});


let indvPlay=document.querySelectorAll(".indv-play");
{

}


//feature to be added - 
//1-sync of play of indv and master play 
//2-next and prev btn work
//3-indv play btn work
//4-correct display of song name near master play 