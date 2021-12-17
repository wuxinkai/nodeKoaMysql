const db =require('./db')


// 执行1 ---------------------开始-----------------------
/* 
var  data = [
  {id: 0, imgUrl: '/images/banner1.png'},
  {id: 1, imgUrl: '/images/banner2.png'},
  {id: 2, imgUrl: '/images/banner3.png'}
]


data.map(val=>{
  // 这里记住，如果是字符串，必须在变量外层套一个引号，否则会出现sql语句报错
  let sql = `INSERT INTO banner VALUES (${val.id}, '${val.imgUrl}')`;
  db.query(sql, (err, data)=>{
    if(err) console.log(err);
    console.log(data)
  })
})
*/
// 执行1 ------------------结束--------------------------


// 执行2 

// 在数据库中执行 这行语句
// create table subject (
//   id INT NOT NULL PRIMARY KEY,
//   icon VARCHAR(100) NOT NULL,
//   title VARCHAR(100) NOT NULL
// );


const data = [
  {id: 0, icon: '/images/subjectIcons1.png', title: "Java EE"},
  {id: 1, icon: '/images/subjectIcons2.png', title: "全栈UI设计"},
  {id: 2, icon: '/images/subjectIcons3.png', title: "H5前端"},
  {id: 3, icon: '/images/subjectIcons4.png', title: "Python"},
  {id: 4, icon: '/images/subjectIcons5.png', title: "iOS"},
  {id: 5, icon: '/images/subjectIcons6.png', title: "大数据"},
  {id: 6, icon: '/images/subjectIcons7.png', title: "C++"}
]

data.map(val=>{
  let sql = `INSERT INTO subject VALUES (${val.id}, '${val.icon}', '${val.title}')`;
  db.query(sql, (err, data)=>{
      if(err) console.log(err);
      console.log(data)
  })
})



// 执行   node .\mysql\sqldata.js   就可以插入到数据库数据