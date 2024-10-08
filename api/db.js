// import mysql from "mysql"

// export const db = mysql.createConnection({
//   host:"127.0.0.1:3307",
//   user:"root",
//   password: "",
//   database:"blog"
// })

import mysql from "mysql"
export const db = mysql.createConnection({
  host:"127.0.0.1",
  port: 3307,
  user:"root",
  password: "",
  database:"blog"
})
