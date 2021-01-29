const express = require('express');
const router = express.Router();
const etudiant_dao = require('../model/EtudiantDAO');
const enseignant_dao = require('../model/EnseignantDAO');


router.get('/etudiant',(req,res)=>{
});

router.post('/etudiant',(req,res,next)=>{
    const email = req.body.userInfo.email;
    const password = req.body.userInfo.password;

    etudiant_dao.findByKey(email,(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            if(rows.length >0 ){

                if(rows[0].motDePasse == password){
                    console.log("L'utilisateur :"+rows[0].adresseMail+" est connecté !");
                    console.log("Bonjour "+rows[0].prenomEtudiant);
                    
                    req.session.loggedin = true;
                    req.session.studentInfo = rows[0];

                    res.send(req.session.studentInfo);
                }
                else{
                    console.log("Mot de passe incorrect");
                    res.send('Le mot de passe est incorrect');
                }
            }
            else{
                console.log("Identifiant incorrect");
                res.send("L'identifiant est incorrect");


            }
        }
    });
});
router.post('/enseignant',(req,res)=>{

    const email = req.body.userInfo.email;
    const password = req.body.userInfo.password;

    console.log("Mail : "+email);

    enseignant_dao.findByKey(email,(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            if(rows.length >0 ){

                if(rows[0].motDePasse == password){
                    console.log("L'utilisateur :"+rows[0].adresseMail+" est connecté !");
                    console.log("Bonjour "+rows[0].prenomEnseignant);
                    
                    req.session.loggedin = true;
                    req.session.studentInfo = rows[0];

                    res.send(req.session.studentInfo);
                }
                else{
                    console.log("Mot de passe incorrect");
                    res.send('Le mot de passe est incorrect');
                }
            }
            else{
                console.log("Identifiant incorrect");
                res.send("L'identifiant est incorrect");


            }
        }
    });
});



router.post('/logout',(req,res)=>{
    console.log("Test : "+req.session.studentInfo);
    req.session.destroy(function(err){
        if(err) throw err;
        res.clearCookie('connection');
        res.send(true);
    })
});
module.exports = router;
