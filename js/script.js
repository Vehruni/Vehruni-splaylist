/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ['Chunky','Shenyeng Anthem','Wow','Feel this moment'];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
 songs.forEach(function(Songlist){
      
});

var imagesurls=["https://i.ytimg.com/vi/oacaq_1TkMU/maxresdefault.jpg", "https://images.genius.com/deecdf35caf0f60a9c0d1bb48c3ee3e1.800x800x1.jpg", "https://i.ytimg.com/vi/3fhbxflfsNs/hqdefault.jpg"  ]

var artists=['Bruno Mars', 'Sheensea', 'Post Malone', 'Pitbull' ]
 artists.forEach(function(Artistlist){
      
});

var songlengths= ["3:06","2:19","2:29","3:49"  ]
 songlengths.forEach(function(Lengthslist){
      
});

var links= ["https://www.youtube.com/watch?v=oacaq_1TkMU",'https://www.youtube.com/watch?v=73SbmC99zFc' , "https://www.youtube.com/watch?v=D0i23wZ0IeE ", "https://www.youtube.com/watch?v=r90Wwl2MPq0"   ]
 links.forEach(function(Linkslist){
      
});


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
var Chunky={
    photo:"https://i.ytimg.com/vi/oacaq_1TkMU/maxresdefault.jpg",
    artist:  "Bruno Mars ",
    link:"https://www.youtube.com/watch?v=oacaq_1TkMU",
    name: "Chunky"
};
    
var songs=[Chunky,
];

var Shenyeng Anthem={
    photo:"https://i.ytimg.com/vi/oacaq_1TkMU/maxresdefault.jpg",
    artist:  "Bruno Mars ",
    link:"https://www.youtube.com/watch?v=oacaq_1TkMU",
    name: "Chunky"
};
    



songs.forEach(function(n) {
    $("#songs").append("<p>"+n.name+"</p>");
});
}


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
