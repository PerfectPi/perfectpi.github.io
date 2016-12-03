var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        tunnel: true,
		tunnel: "perfectpi"
    });
    gulp.watch("*.*").on("change", browserSync.reload);
});

gulp.task('default', ['browser-sync']);