var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var proxy = require('http-proxy-middleware');
var del = require('del');

gulp.task('connect', function () {
    plugins.connect.server({
        root: 'dist/',
        port: 4000,
        middleware: function(connect, opt) {
            return [ proxy('/api', {
                target: 'http://localhost:9090/registry',
                changeOrigin:true
            })]
        }
    });
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(plugins.watch('src/**/*.html'))
        .pipe(gulp.dest('dist/'))
//        .on('finish', function() {plugins.util.log('HTML processed.')});
});

gulp.task('staticHtml', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'))
});

gulp.task('templates', function () {
    return gulp.src('src/app/**/*.html')
        .pipe(plugins.angularTemplatecache('application.tpl.js', {root: 'app', module:'schoolApp'}))
        .pipe(gulp.dest('dist/scripts'))
});

gulp.task('styles', function () {
    return gulp.src('src/styles/main.scss')
        .pipe(plugins.sass())
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('images', function () {
    return gulp.src([ 'src/images/*' ])
        .pipe(gulp.dest('dist/images'));
});

gulp.task('opensans-fonts', function () {
    return gulp.src(['bower_components/open-sans-fontface/fonts/Regular/OpenSans-Regular.woff',
            'bower_components/open-sans-fontface/fonts/Bold/OpenSans-Bold.woff',
            'bower_components/open-sans-fontface/fonts/Italic/OpenSans-Italic.woff',
            'bower_components/open-sans-fontface/fonts/BoldItalic/OpenSans-BoldItalic.woff'])
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('bootstrap-fonts', function () {
    return gulp.src('bower_components/bootstrap-sass/assets/fonts/bootstrap/*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('fontawesome-fonts', function () {
    return gulp.src('bower_components/components-font-awesome/fonts/*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('fonts', ['opensans-fonts', 'bootstrap-fonts']);

gulp.task('vendor', function () {
    return gulp.src(['bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-resource/angular-resource.min.js',
            'bower_components/angular-cookies/angular-cookies.min.js',
            'bower_components/angular-ui-mask/dist/mask.min.js',
            'bower_components/angular-uuid4/angular-uuid4.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'])
        .pipe(plugins.concat('vendor.js'))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('scripts', function () {
    return gulp.src([
            'src/app/values/index.js',
            'src/app/typeaheads/_module.js', 'src/app/typeaheads/**/*.js',
            'src/app/overview/_module.js', 'src/app/overview/**/*.js',
            'src/app/relationship/_module.js', 'src/app/relationship/**/*.js',
            'src/app/child/_module.js', 'src/app/child/**/*.js',
            'src/app/guardian/_module.js', 'src/app/guardian/**/*.js',
            'src/app/schoolApp/_module.js', 'src/app/schoolApp/**/*.js'
    ])
        .pipe(plugins.concat('application.js'))
        .pipe(gulp.dest('dist/scripts'));
});


gulp.task('default', ['clean', 'staticHtml', 'styles', 'images', 'fonts', 'vendor', 'scripts', 'templates']);

gulp.task('dev', ['default', 'connect']);
