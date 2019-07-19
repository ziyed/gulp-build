var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var source = [
    'first.js',
    'second.js'
];

gulp.task('home', function() {
    return gulp.src([
        'first.js',
        'second.js'
    ])
    .pipe(concat('home.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/'))
});


gulp.task('listing', function() {
    return gulp.watch(source, function () {
        gulp.src(source)
        .pipe(concat('listing.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/'))
    });    
});


gulp.task('default', ['home', 'listing']);