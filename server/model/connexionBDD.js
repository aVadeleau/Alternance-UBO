const mysql = require('mysql');


const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'EfDWAnB98rnxyLO5',
    database : 'zil3-zvadeleal',
  });
  
  db.connect((err)=>{
    if(err)throw err;
  
    console.log("Connexion réussie !")
  
   
  });
  
module.exports = db;