'use strict';

console.log("Hello world");
console.log("It is cold, dark, and rainy");
console.log("Why are we awake?");


// console.log("40" + 2);
// console.log("forty" - 4);

// const str10 = "10";
// const num10 = 10;
// console.log("are the same?", '' === 0);



const headerElem = document.querySelector('header');
headerElem.classList.add('bg-warning');

const h1Elem = document.querySelector('h1');
h1Elem.textContent = "I have changed!";

const puppyImg = document.querySelector('#puppySection img');
puppyImg.src = "img/husky.jpg";
puppyImg.alt = "a grown husky";


function createSongListItem(artist, title, url) {
  const aElem = document.createElement('a');
  aElem.textContent = artist + " - " + title;
  aElem.href = url;
  const newLiElem = document.createElement('li');
  newLiElem.appendChild(aElem);
  return newLiElem;
}

const songListItemElem = createSongListItem("Haddaway", "What is Love?", "https://www.youtube.com/watch?v=HEXWRTEbj1I")
const songListItemElem2 = createSongListItem("Don Toliver", "No Idea", "https://www.youtube.com/watch?v=_r-nPqWGG6c")

const songListElem = document.querySelector('#songSection ol');
// songListElem.appendChild(songListItemElem);
// songListElem.appendChild(songListItemElem2);

/* Arrays */
// const lettersArray = ['a', 'b', 'c'];
// lettersArray[1] = "B";
// lettersArray[5] = "f";
// console.log(lettersArray);

// console.log(lettersArray[5]);

const songTitleArray = [
  "What is Love?",
  "No Idea",
  "Beautiful Mistake"
];

const songObj = {
  title: "What is Love?",
  artist: "Haddaway",
  url: "https://www.youtube.com/watch?v=HEXWRTEbj1I"
}
console.log(songObj);

const songObjArray = [
  {
    title: "What is Love?",
    artist: "Haddaway",
    url: "https://www.youtube.com/watch?v=HEXWRTEbj1I"
  },
  {
    title: "No Idea",
    artist: "Don Toliver",
    url: "https://www.youtube.com/watch?v=_r-nPqWGG6c"
  },
  {
    title: "Beautiful Mistake",
    artist: "No idea",
    url: "tbd",
  }
];

for(const songObj of songObjArray){
  console.log(songObj);
  const songListItemElem = createSongListItem(songObj.artist, songObj.title, songObj.url);
  songListElem.appendChild(songListItemElem);

}
