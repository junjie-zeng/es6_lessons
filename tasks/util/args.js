
//区分开发与线上环境
import yargs from 'yargs';

const args = yargs

  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })

  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })
//命令行输出的日志
  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })
//映射
  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })
//服务器端口
  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })
//输入命令行以字符串进行解析
  .argv

export default args;
