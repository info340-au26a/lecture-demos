'use strict';

/** Functional Programming Demo **/

function sayHello(name) { 
   console.log("Hello, "+name);
}

function sayGoodbye(name) {
   console.log("Goodbye, "+name);
}

// function callTwiceWithWorld(aFunction) {
//    aFunction("world");
//    aFunction("world");
// }

// callTwiceWithWorld(sayHello);
// callTwiceWithWorld(sayGoodbye);


function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the "same time"!');
}

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    console.log('rub your belly');
}

//const result = patHead()
//doTogether(patHead, rubBelly);


// array.forEach(function(item) {
//    console.log(item);
// });


//MAP TEMPLATE
// const newArray = oldArray.map(function(item) {
//   const transformed = "something";
//   return transformed;
// })


/** Data **/
const songObjArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU" },
  { artist: "HUNTR/X", title: "Golden", youtubeUrl: "https://www.youtube.com/watch?v=yebNIHKAC4A" },
  { title: "What is Love?", artist: "Haddaway", youtubeUrl: "https://www.youtube.com/watch?v=HEXWRTEbj1I" },
  { title: "No Idea", artist: "Don Toliver", youtubeUrl: "https://www.youtube.com/watch?v=_r-nPqWGG6c" },
];
console.log(songObjArray);

//[{},{},{}] => ["", "", ""]
const titleArtistArray = songObjArray.map(function(songObj){
  const transformed = "<li>" + songObj.artist + " - " + songObj.title + "</li>";
  return transformed;
});
console.log(titleArtistArray);


/** Render Functions **/

//accepts an object {} as an argument, returns an <li> element
function createSongListItem(aSongObj) {
  const newLinkElem = document.createElement('a');
  newLinkElem.textContent = aSongObj.artist + " -  " + aSongObj.title;
  newLinkElem.href = aSongObj.youtubeUrl;
  const newListItem = document.createElement('li');
  newListItem.appendChild(newLinkElem);
  return newListItem;
}

const addSongItem = function(songObj) {

  const songListElem = document.querySelector('#songSection ol');
  const newElem = createSongListItem(songObj);
    songListElem.appendChild(newElem);
}

//accepts an array of objects [{},{}] as an arg, renders to screen
function renderSongList(aSongObjArray) {
  const songListElem = document.querySelector('#songSection ol');
  songListElem.innerHTML = ''; //clear previous list

  // aSongObjArray.forEach(addSongItem)

  const listItemArray = aSongObjArray.map(createSongListItem);
  console.log(listItemArray);

  for(const songObj of aSongObjArray) {
    const newElem = createSongListItem(songObj);
    songListElem.appendChild(newElem);
  }
}

//call function to render the data!
renderSongList(songObjArray); 

const puppyImgElem = document.querySelector('#puppySection img');

const puppyButton = document.querySelector('#puppySection button');

puppyButton.addEventListener("click", function(event) {
  console.log("You clicked me!");
  puppyImgElem.src = "img/husky.jpg";
  puppyImgElem.alt = "a grown husky";

})