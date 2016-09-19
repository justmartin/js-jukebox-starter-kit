// Your JavaScript Jukebox should:
// Display at least one song on the page when the page loads

// Give the user the ability to play that song, without using the "built-in" play button. This could be through a 
// different button, through clicking or mousing over an image on the page, or any other device of your choosing.

// Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be 
// through a different button, through clicking or mousing over an image on the page, or any other device of your 
// choosing.

// Give the user the ability to load at least one different song into the Jukebox besides the one that is loaded when 
// the page initially renders

// The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs.

$(document).ready(function() {

	//loads first song into array on page load
	song1 = new Song("assets/audio/i-got-you.mp3")
	Jukebox.add_song(song1);

});

//creates a Song object that takes a source. will be used to populate songs array.
function Song(source) {
	this.source = source;
};

//creates Jukebox object to store songs in blank array. contains functions to add/play/sift through songs array
var Jukebox = {
	songs: [],

	add_song: function(song) {
		this.songs.push(song);
	},

	play_song: function() {
		$("#audio-player").attr("src", "assets/audio/i-got-you.mp3" /*Need to insert array locations here instead*/);
		document.getElementById("audio-player").play();
	},

	stop_song: function() {
		document.getElementById("audio-player").pause();
	},

	turn_volume_down: function() {
		document.getElementById("audio-player").volume-=0.1;
	},

	turn_volume_up: function() {
		document.getElementById('audio-player').volume+=0.1;
	},
};

//call Jukebox functions based on corresponding button click
document.getElementById("play-button").onclick = Jukebox.play_song;
document.getElementById("stop-button").onclick = Jukebox.stop_song;
document.getElementById("volume-down").onclick = Jukebox.turn_volume_down;
document.getElementById("volume-up").onclick = Jukebox.turn_volume_up;

