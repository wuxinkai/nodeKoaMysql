 let mysql =require('mysql')

 var pool = mysql.createPool({
   host:"49.232.19.124", // 服务器连接地址
   port:"3307", //端口
   database:"mydb1",//数据库
   user:"root", //用户名
   password:"123456", //密码
 })

 function query(sql,callback){
  pool.getConnection(function(err,connection){
      connection.query(sql, function (err,rows) {
          callback(err,rows)
          connection.release() //连接完成后 立马终断连接
      })
  })
}

exports.query = query;