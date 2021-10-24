var gulp = require('gulp');
var imagemin = require('gulp-imagemin');


gulp.task('resize', function (done) {
	gulp.src('rawImages/img/**/*')
		.pipe(cache(imageResize({
			width: 900,
			//	height : 100,
			crop: false,
			upscale: false
		})))
		.pipe(imagemin({ progressive: true, }))
		.pipe(gulp.dest('images'));
	//.pipe(gulp.dest('static/img'));
	done();
});

gulp.task('image', function (done) {
	gulp.src('rawImages/**/*')
		.pipe(imagemin({ progressive: true, }))
		.pipe(gulp.dest('images'));
	done();
});


gulp.task('default', gulp.series('image'));
//gulp.task('clearcache', function () { return cache.clearAll(); });

// gulp.task('', gulp.series('build'));