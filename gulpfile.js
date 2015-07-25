'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass')

gulp.task('watch',function() {
	gulp.watch('./sass/*.scss', ['sass']);
	//gulp.watch('./css/*.css', ['cssMin']);
	gulp.watch('./jade/*.jade', ['jade']);	
})
gulp.task('sass', function() {
	gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/css/'));
})
gulp.task('cssConcat', function() {
	gulp.src('./css/*.css')
		.pipe(concat('all.css'))
		.pipe(gulp.dest('./dist'));
})
gulp.task('cssMin', function() {
	gulp.src('./css/*.css')
		.pipe(cssmin())
		.pipe(concat('all.css'))
		.pipe(gulp.dest('./app/css/'));
})
gulp.task('jade', function() {
	gulp.src('./jade/*.jade')
		.pipe(jade({
			pretty:true
		}))
		.pipe(gulp.dest('./app/'));
})
