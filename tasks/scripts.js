//构建脚本

//gulp
import gulp from 'gulp';
import gulpif from 'gulp-if';//用于if判断
import concat from 'gulp-concat'//在gulp中处理文件拼接的gulp-concat
import webpack from 'webpack'; // webpack工具包

import gulpWebpack from 'webpack-stream';//结合webpack-stream 处理文件流
import named from 'vinyl-named'; //文件重命名做标志的
import livereload from 'gulp-livereload';//热加载

import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//对文件重名

//压缩js
import uglify from 'gulp-uglify';
//命令行工具输出的包
import {log,colors} from 'gulp-util';
//import args from '.util/args';

import args from './util/args';//对命令行参数解析的包
//用gulp创建任务
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({//js编译
      module:{
       loaders:[{ //会报错，原因是webpack不同的版本有不同的写法…
        // rules:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{//错误处理
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))//文件放在什么地方
    .pipe(rename({//编译
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))//压缩
    .pipe(gulp.dest('server/public/js'))//存储到某个地方
    .pipe(gulpif(args.watch,livereload()))//热加载
})