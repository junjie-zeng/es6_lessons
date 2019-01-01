//处理css的脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liverelload from 'gulp-livereload';
import args from './util/args';

//创建任务
gulp.task('css',()=>{
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))

})
