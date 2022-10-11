/*Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks on an album.*/

function makeAlbum(name, title, tracks = 0){
    this.artistName = name;
    this.albumTitle = title;
    this.numberOfTracks = tracks;
    return this;
}
//Creating Album 1
myAlbum = new makeAlbum("Noman", "jsMelody");

console.log(typeof myAlbum);
console.log(`Artist Name is ${myAlbum.artistName} and album tilte is ${myAlbum.albumTitle} and number of tracks is ${myAlbum.numberOfTracks}`);

//creating Album 2
myAlbum2 = new makeAlbum("Noman2", "jsMelody2",2);
console.log(typeof myAlbum2);
console.log(`Artist Name is ${myAlbum2.artistName} and album tilte is ${myAlbum2.albumTitle} and number of tracks is ${myAlbum2.numberOfTracks}`);

//creating Album 3
myAlbum3 = new makeAlbum("Noman3", "jsMelody3",3);
console.log(typeof myAlbum3);
console.log(`Artist Name is ${myAlbum3.artistName} and album tilte is ${myAlbum3.albumTitle} and number of tracks is ${myAlbum3.numberOfTracks}`);