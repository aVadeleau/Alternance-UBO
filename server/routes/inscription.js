const express = require('express');
const router = express.Router();
const etudiant_dao = require('../model/EtudiantDAO');
const enseignant_dao = require('../model/EnseignantDAO');


router.get('/',(req,res)=>{
    
});

router.post('/etudiant',(req,res)=>{
    
    const id=req.body.etudiant.numeroEtudiant; 
    const nom =req.body.etudiant.nom;
    const prenom = req.body.etudiant.prenom;
    const parcours = req.body.etudiant.parcours;
    const telephone = req.body.etudiant.telephone;
    const dateDeNaissance = req.body.etudiant.dateDeNaissance;
    const nationalite= req.body.etudiant.nationalite;
    const alter = req.body.etudiant.alternance;
    const emailUBO = req.body.etudiant.emailUBO;
    const motDePasse = req.body.etudiant.motDePasse;


    //CRYPT THE PASSWORD 



   etudiant_dao.insert({idEtudiant:id, nomEtudiant: nom, prenomEtudiant:prenom, parcours: parcours, telephone:telephone, nationaliteFrancaise:nationalite, dateNaissance: dateDeNaissance, typeContrat:null, dateObtentionStage:null, alternance : alter, adresseMail:emailUBO, motDePasse:motDePasse },function(err){
        if(err) throw err;

    
    });
});

router.post('/enseignant',(req,res)=>{
    const id = 0;
    const nom = req.body.enseignant.nom;
    const prenom = req.body.enseignant.prenom;
    const emailUBO = req.body.enseignant.emailUBO;
    const motDePasse = req.body.enseignant.motDePasse;

    enseignant_dao.insert({idEnseignant:id, nomEnseignant:nom, prenomEnseignant:prenom, adresseMail:emailUBO, motDePasse:motDePasse},function(err){
        if(err)throw err;

    });
})

module.exports = router;