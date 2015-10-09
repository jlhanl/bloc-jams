// Example Album 

var albumPicasso = {
  name: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    {name:'Blue', length: '4:26'},
    {name:'Green', length: '3:14'},
    {name:'Red', length: '5:01'},
    {name:'Pink', length: '3:21'},
    {name:'Magenta', length: '2:15'}
  ]
};


// Another Example Album

var albumMarconi = {
  name: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    {name:'Hello, Operator', length: '1:01'},
    {name:'Ring, ring, ring', length: '5:01'},
    {name:'Fits in your pocket', length: '3:21'},
    {name:'Can you hear me now?', length: '3:14'},
    {name:'Wrong phone number', length: '2:15'},
  ]
};


// Yet Another Example Album

var albumAndy = {
  name: '5,000 Candles',
  artist: 'Mouserat',
  label: 'Parks and Rec',
  year: '2010',
  albumArtUrl: 'assets/images/album_covers/05.png',
  songs: [
    {name:'5,000 Candles in the Wind', length: '2:15'},
    {name:'Anne', length: '2:15'},
    {name:'The Pit', length: '2:15'},
    {name:'Pick Your Nose', length: '2:15'}
  ]
}

var createSongRow = function(songNumber, songName, songLength) {

  var template = 
      '<tr class = "album-view-song-item">'
     +' <td class = "song-item-number">' + songNumber + '</td>'
     +' <td class = "song-item-title">' + songName + '</td>' 
     +' <td class = "song-item-duration">' + songLength + '</td>'
     +' </tr>'
     ;

  return template;

};


var albumTitle = document.getItemByClassName('album-view-title')[0];
var albumArtist = document.getItemByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getItemByClassName('album-view-release-info')[0];
var albumImage = document.getItemByClassName('album-cover-art')[0];
var albumSongList = document.getItemByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
  albumTitle.firstChild.nodeValue = album.name;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  albumSongList.innerHTML = '';

  for (i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
  }

};

window.onload = function() {

  setCurrentAlbum(albumPicasso);

  var albums = [albumPicasso, albumMarconi, albumAndy];
  var index = 1;
  albumImage.addEventListener("click", function(event){
    setCurrentAlbum(albums[index]);
    index++;
    if (index == albums.length) {
      index = 0;
    }
  });
};

// My questions...
// where did the event argument come from?
// why wouldn't we use a for loop?
// why does index need to be set to 1? To advance to second album?
// wouldn't it advance to the next album just with i++ in a for loop?


// My solution...

//var albumToggle = function() {
//  albumImage.addEventListenter("click", function() {
//  for (i = 0; i < albums.length) {
//    setCurrentAlbum(albums[i]);
//  });
//};


//My Plan- Album Toggle Assignment...

// add event listener to album cover
// find album cover variable
// give album cover addEventListener property function('click', callback)
// use event listener to setCurrentAlbum (where should this go?)


