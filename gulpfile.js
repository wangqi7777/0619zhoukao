var gulp = require('gulp');
var server = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var url = require('url');
var sass = require('gulp-sass');
var mincss = require('gulp-clean-css')
var minjs = require('gulp-uglify');
var data = require('./mock/data.json');
console.log(data);
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 6060,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return
                }
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (/\/api\//.test(pathname)) {
                    res.end(JSON.stringify(data));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})

gulp.task('sass', function() {
    gulp.src('src/scss/index.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('src/css'))
})

gulp.task('change', function() {
    gulp.watch('src/scss/index.scss', ['sass'])
})