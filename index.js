
let song_name = document.getElementById("name")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")

// create song object list
let songs_list = [
    {
        song : "music/i wanna fly.mp3",
        name : "I Wanna Fly"
    },
    {
        song : "music/pillagaali allari.mp3",
        name : "Pilla Gaali Allari"
    },
    {
        song : "music/pilichina raanantaava.mp3",
        name : "Pilichina Raanantaava"
    }
]

let i = 2;
let isPlaying=false;

var audio = new Audio(songs_list[i].song);
song_name.innerHTML = songs_list[i].name;

//function to play or pause
song_play.addEventListener("click", function(){
if(isPlaying===false){
    audio.play();
    isPlaying=true;
}
else {
    audio.pause();
    isPlaying=false;
}
}
)

//function to play next song

song_next.addEventListener("click",function(){
    audio.pause();
    isPlaying=false;
    i=i+1;
    if (i >= songs_list.length){
       i=0;
       
    }
    audio = new Audio(songs_list[i].song);
song_name.innerHTML = songs_list[i].name;
if(isPlaying===false){
audio.play();
isPlaying=true;
}
   
    }
)

//function to play previous song
song_prev.addEventListener("click",function(){
    audio.pause();
    isPlaying=false;
    i=i-1;
    if(i<=0){
       i=songs_list.length-1;
    }
    audio = new Audio(songs_list[i].song);
song_name.innerHTML = songs_list[i].name;
if(isPlaying===false){
audio.play();
isPlaying=true;
}
})