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
    {songName:"Nathuniya Par 9 Go",url:"./songs/Nathuniya Par 9 Go.mp3",image:"./posters/Pawan Singh.jpeg"},
    {songName:"Nimbu Kharbuja Bahil Madam",url:"./songs/Nimbu Kharbuja Bhail Madam.mp3",image:"./posters/Khesari Lal.jpeg"},
]

var clutter = "";
array.forEach(function(){
    clutter += `{<div class="song-card">
    <div class="part1">
        <img src="https://wallpaperbuzz.net/wp-content/uploads/2023/11/Animal-HD-WAllpaper-9-1536x1351.jpg" alt="">
    <h2>Pahle Bhi Main</h2>
    </div>
    <h6>3:56</h6>
</div>}`;
})

document.querySelector("#all-songs").innerHTML = clutter;
