var gulp = require('gulp');
var ffmpeg = require('gulp-fluent-ffmpeg');

gulp.task('webm', function() {
    // transcodes wav to Opus/WebM
    return gulp.src('src/*.wav')
        .pipe(ffmpeg('webm', function(cmd) {
            return cmd
                .audioBitrate(96)
                .audioChannels(2)
                .audioCodec('opus')
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('mp3', function() {
    // transcodes wav to MP3
    return gulp.src('src/*.wav')
        .pipe(ffmpeg('mp3', function(cmd) {
            return cmd
                .audioBitrate(112)
                .audioChannels(2)
                .audioCodec('libmp3lame')
        }))
        .pipe(gulp.dest('dist'))
});
