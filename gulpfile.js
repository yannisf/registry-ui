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

gulp.task('styles', function () {
    return gulp.src('src/styles/main.scss')
        .pipe(plugins.watch('src/styles/main.scss'))
        .pipe(plugins.sass())
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest('dist/styles'))
//        .on('data', function() {plugins.util.log('Styles processed.')});
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
    return gulp.src(['src/app/values.js',
            'src/app/components/typeaheads.js',
            'src/app/overview/overview.js',
            'src/app/relationship/relationship.js',
            'src/app/child/child.js',
            'src/app/relationship/guardian.js',
            'src/app/application.js',
            'src/app/overview/schools.js',
            'src/app/overview/departments.js',
            'src/app/overview/groups.js',
            'src/app/overview/school-control.js',
            'src/app/overview/department-control.js',
            'src/app/overview/group-control.js',
            'src/app/overview/focusAndSelect.js',
            'src/app/components/navbar.js',
            'src/app/components/logout.js',
            'src/app/components/breadcrumb.js',
            'src/app/components/statistics.js',
            'src/app/child/listGroupController.js',
            'src/app/child/createChildController.js',
            'src/app/child/updateChildController.js',
            'src/app/child/displayChild.js',
            'src/app/child/previousNext.js',
            'src/app/address/address.js',
            'src/app/address/input-address.js',
            'src/app/relationship/displayGuardian.js',
            'src/app/relationship/telephones.js',
            'src/app/relationship/createGuardianController.js',
            'src/app/relationship/updateGuardianController.js'])
//        .pipe(plugins.watch('src/**/*.js'))
        .pipe(plugins.jshint()).pipe(plugins.jshint.reporter('default'))
//        .pipe(plugins.continuousConcat('application.js'))
        .pipe(plugins.concat('application.js'))
//        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/scripts'))
//        .on('data', function() {plugins.util.log('Scripts processed.')});
});


gulp.task('default', ['clean', 'html', 'styles', 'images', 'fonts', 'vendor', 'scripts', 'connect']);