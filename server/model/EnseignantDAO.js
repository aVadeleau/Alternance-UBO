const db = require('./connexionBDD.js');


const EnseignantDAO = function(){

    this.insert = function(values, callback){
        var request = "INSERT INTO ENSEIGNANT VALUES(?, ?, ?, ? ,?)";
        const stmt = [values.idEnseignant, values.nomEnseignant, values.prenomEnseignant, values.adresseMail, values.motDePasse ];

        request = db.format(request,stmt);
        db.query(request, (err)=>{
            if(err) throw err;
        });
    }


    this.findByKey = function(key,callback){

        db.query("SELECT * FROM ENSEIGNANT WHERE adresseMail = ?",[key], callback);


    }
}


const dao = new EnseignantDAO();

module.exports = dao;