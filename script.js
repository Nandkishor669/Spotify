// Constructor function for Song
function Song(title, artist, src) {
    this.title = title;
    this.artist = artist;
    this.src = src;
}

// Array of song objects using the Song constructor
const songs = [
    new Song("Finding Her", "Kushagra, Bharath, Saaheal", "Finding Her - (Raag.Fm).mp3"),
    new Song("Raanjhan(From 'Do Patti')", "Sachet-Parampara, Parampara Tandon, Kaushal Munir", "Raanjhan - (Raag.Fm).mp3"),
    new Song("Jhol-Acoustic", "Maanu, Annural Khalid, Abdullah Siddiqui", "Jhol (Acoustic).mp3"),
    new Song("Tu Tu Hai Wahi[From('The Royals')]", "RUUH, JOH, Jubin Nautiyal, Jonita Gandhi", "tu tu hai vahi.mp3"),
    new Song("Kaise Hua(From 'Kabir Singh')", "Vishal Mishra", "Kaise Hua - Kabir Singh.mp3"),
    new Song("Waareya", "Eshaan Soni", "Waareya-Slowed-Reverb.mp3"),
    new Song("Tum Se", "Sachin-Jigar, RaghavChaitanya, Varun Jain", "Tum Se - Teri Baaton Mein Aisa Uljha.mp3"),
    new Song("Tainu Khabar Nahi(From 'Munjya')", "Sachin-Jigar, Arijit Singh", "Tainu Khabar Nahi - Munjya.mp3"),
    new Song("ISHQ MEIN", "Sachin-Jigar, Sachet-Tandon, Asees Kaur", "Ishq Mein Nadaaniyan.mp3"),
    new Song("Haareya", "Ayshmann Khurrana Rock Version", "Haareya.mp3"),
    new Song("Soni Soni(From 'Ishq Vishk Rebound')", "Darshan Raval", "Soni Soni.mp33"),
    new Song("Mujhe Peene Do", "Darshan Raval", "Mujhe Peene Do.mp3")
];

// Create an audio element
const audio = new Audio();
let currentlyPlayingIndex = null; // Tracking the currently playing song index

// Function to play or stop a song
function playSong(songIndex) {
    const playButton = document.querySelectorAll('.play-btn')[songIndex].querySelector('span i');

    if (currentlyPlayingIndex === songIndex) {
        // If the same song is clicked again, pause it
        audio.pause();
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
        currentlyPlayingIndex = null; // Reset the currently playing index
    } else {
        // If a different song is clicked, play it
        audio.src = songs[songIndex].src;
        audio.currentTime = currentlyPlayingIndex === null ? 0 : audio.currentTime; // Resume from where it stopped
        audio.play();
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');
        currentlyPlayingIndex = songIndex; // Updating the currently playing index
    }
}

// Adding event listeners to play buttons
document.querySelectorAll('.play-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        playSong(index);
    });
});

// Function to handle navigation
function navigateTo(page) {
    if (page === 'home') {
        console.log("Navigating to Home");
     
    } else if (page === 'search') {
        console.log("Navigating to Search");
    }
}

// Event listen for home and search
document.querySelector('.home-btn').addEventListener('click', () => {
    navigateTo('home');
});

document.querySelector('.search-btn').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(searchInput) || 
        song.artist.toLowerCase().includes(searchInput)
    );


    console.log("Filtered Songs:", filteredSongs);
    
});
