//处理服务器的脚本

import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动服务器的包（启动一个脚本作为服务器的功能）
import args from './util/args';
gulp.task('serve',(cb)=>{
  if(!args.watch) return cb();//如果不是监听返回回调函数
//如果是则创建服务器
  var server = liveserver.new(['--harmony','server/bin/www']);//--harmony当前命令行下执行该脚本
  server.start();//启动服务器
 //监听server目录js,ejs相关，热更新
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);//将改动告诉服务器
  })
//监听需要重启的文件：比如接口换掉了就需要重启
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})