var videos = document.querySelectorAll('.video');
var progressBars = document.querySelectorAll('.progress-bar');

videos.forEach(function(video, index) {
    video.addEventListener('timeupdate', function() {
        updateProgressBar(index);
    });

    progressBars[index].addEventListener('click', function(e) {
        seek(index, e);
    });
});

function updateProgressBar(index) {
    var video = videos[index];
    var progressBar = progressBars[index];
    var value = (video.currentTime / video.duration) * 100;
    progressBar.value = value;
}

function seek(index, e) {
    var video = videos[index];
    var progressBar = progressBars[index];
    var percent = e.offsetX / progressBar.offsetWidth;
    video.currentTime = percent * video.duration;
}