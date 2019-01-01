import gulp from 'gulp';
//处理包的顺序问题
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));


