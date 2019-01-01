//处理模板
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';


gulp.task('pages',()=>{
  return gulp.src('app/**/*.ejs')//打开这个目录下的文件
  //拷贝到一个地方
    .pipe(gulp.dest('server'))//将模板文件拷贝到server文件下
    .pipe(gulpif(args.watch,livereload()))
})