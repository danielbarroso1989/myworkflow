//sudo npm install --save gulp
var gulp= require('gulp');
//sudo npm install --save gulp-sass
var sass=require('gulp-sass');
//sudo npm install --save browser-sync. 
var browserSyn=require('browser-sync');
var reload=browserSyn.reload;
//sudo npm install --save gulp-autoprefixer
var autoprefixer=require('gulp-autoprefixer');

gulp.task('sass',function(){
	gulp.src('scss/app.scss')
	.pipe(autoprefixer())
	.pipe(sass({
		includedPaths:['scss']
	}))
	.pipe(gulp.dest('sitio/css'))
});

gulp.task('serve',['sass'],function(){
browserSyn.init(["sitio/css/*.css","sitio/js/*.js","sitio/*.html"],{
	server:{
		baseDir:'sitio'
	}
})
});

gulp.task('watch',['sass','serve'],function(){
gulp.watch(['scss/*.scss'],['sass'])
});


gulp.task('default',['watch']);