const db = require('./connexionBDD.js');



const EtudiantDAO = function(){

    this.insert = function(values, callback){
        var request = "INSERT INTO ETUDIANT VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const stmt =[values.idEtudiant, values.nomEtudiant, values.prenomEtudiant, values.parcours, values.telephone, values.nationaliteFrancaise, values.dateNaissance, values.typeContrat, values.dateObtentionStage, values.alternance ,values.adresseMail, values.motDePasse];

        request=db.format(request,stmt);
        db.query(request, (err)=>{
            if(err) throw err;
            
        });
    };

    this.findByKey = function(key, callback){

        db.query("SELECT * FROM ETUDIANT WHERE adresseMail = ?", [key], callback);

    }
};


const dao = new EtudiantDAO();

module.exports = dao;
