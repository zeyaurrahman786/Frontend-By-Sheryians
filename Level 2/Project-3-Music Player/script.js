/*Notes :-

var array = [10,20,30,40,50]
array.forEach(function(element,index){
    console.log(element,index);
})


// HTML me 4 Cards tha jisme 3 delete karna hai aur ek ko cut karke JavaScript me paste karna hai

*/







var array = [
    {songName:"Jale2",url:"./songs/Jale 2.mp3",image:"./posters/jale.jpg"},
    {songName:"Arjan Vailly",url:"./songs/Arjan Vailly Ne.mp3",image:"./posters/animal.jpg"},
    {songName:"Nathuniya Par 9 Go",url:"./songs/Nathuniya Par 9 Go.mp3",image:"./posters/PawanSingh.jpg"},
    {songName:"Nimbu Kharbuja Bahil Madam",url:"./songs/Nimbu Kharbuja Bhail Madam.mp3",image:"./posters/KhesariLal.jpg"}
];

var allSongs = document.querySelector("#all-songs")

var audio = new Audio();

var clutter = "";

array.forEach(function(element,index){
    clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${element.image} alt="">
    <h2>${element.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`;
})

allSongs.innerHTML = clutter;

allSongs.addEventListener("click",function(details){
    console.log(array[details.target.id]);
})