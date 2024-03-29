// Variable to store current video
let video = document.getElementById("video");

// User control variables
let randomStartTime = false;
let playbackFull = true;

// Time Variables
let startTime = 0;
let endTime;
let playbackLength = 0;
let videoCurrentTime = startTime;
let videoDuration;

// Video Path (change later)
let counter = 0;
let randomVideoNum = 0;
let videoArr = [];
let currentPath;



// Starting commands
function initialize() {

    randomVideoNum = Math.round(Math.random() * (3 - 1) + 1);
    videoArr.push(randomVideoNum);
    currentPath = "./songs/" + videoArr[counter] + ".mp4";
    video.setAttribute('src', currentPath);

    // Loads video
    video.load();

    // Checks for user settings
    checkControls();

    // Checks for various video timings
    retrieveVideoTime();

    // Constantly checks for current time of video
    video.addEventListener('timeupdate', function() {
        videoCurrentTime = this.currentTime;

        // Pauses and resets video if current time matches end time
        if(Math.round(videoCurrentTime) === Math.round(endTime)) {
            playPause();
            replay();
        }
    });

}

// Starts Program
initialize();