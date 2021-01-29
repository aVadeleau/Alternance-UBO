import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';
import history from './history';



export class PageEtudiant extends Component {
    constructor(props){
        super(props);
        this.state = {
            user :  JSON.parse(localStorage.getItem("user"))
        }
    }


    showBirthDay = () => {
        
        var date = this.state.user.dateNaissance;
        var day = date[8] + date[9] ; 
        var month = date[5] + date[6] ; 
        var year = date[0] + date[1] + date[2] + date[3];
        var fullYear = day + "/" + month + "/" + year;
        
        return fullYear;

    }



    logout =() =>{
        axios.post('/connexion/logout')
        .then(res =>{

            if(res.data){
                localStorage.clear();
                console.log("Deconnexion réussie, retour à la page d'accueil");
                history.push("/");
                window.location.reload(false);

            }
            else{
                console.log("La déconnexion a échouée");

            }

        })
        .catch(err=>{
            if (err) throw err;

        })
    }



    render() {
        return (
            <div className="PageEtudiant">

                 <div style={hStyle2}> 
                    <h2>Page de {this.state.user.prenomEtudiant +" "+this.state.user.nomEtudiant} </h2>
                 </div>   
                
                <div className="row">
                    <div className="col-3">
                        <h2 style={hStyle}>Informations personnelles</h2>
                        <p>Numéro étudiant : e{this.state.user.idEtudiant}</p>
                        <p>Nom : {this.state.user.nomEtudiant} </p>
                        <p>Prénom : {this.state.user.prenomEtudiant}</p>
                        <p>Email : {this.state.user.adresseMail}</p>
                        <p type="password">{this.state.user.motDePasse}</p>
                        <p>Filière : {this.state.user.parcours}</p>
                        <p>Date de naissance : {this.showBirthDay()}</p>
                        <p>Nationalité : {this.state.user.nationaliteFrancaise}</p>
                        <p>Candidate à l'alternance :{this.state.user.alternance ? "Oui" : "Non"}</p>
                        <div className="row">   
                            <div className="col-8" style={btnStyle}>
                                <button type="submit" className="btn btn-primary">Modifier</button>               
                            </div>
                        </div>   
                    
                        <h2 style={hStyle}>{"\n"}Ajouter une entreprise</h2>
                        <p>
                           Si l'entreprise pour laquelle vous candidatez n'existe pas dans le système vous devez la rajouter.<br/>
                           L'ajout peut-être vérifier par un enseignant. <br/>
                           S'il n'approuve pas il a le droit de supprimer l'entreprise ajoutée.<br/>
                           Dans ce cas toutes vos candidature en lien avec cette entreprise seront supprimées.        

                        </p>

                        <div className="row">   
                            <div className="col-9" style={btnStyle}>
                                <button type="submit" className="btn btn-primary">Ajouter un entreprise</button>               
                            </div>
                        </div>  
                    </div>
                    <div className="col-8">
                        <h2 style={hStyle}>Mes Documents</h2><br/>
                        <label>CV</label>    
                        <table className="table table-dark">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Date de dépot</th>
                                    <th scope="col">CV</th>
                                    <th scope="col">Validation</th>
                                    <th scope="col">Date de consultation</th>
                                    <th scope="col">Enseignant</th>
                                    <th scope="col">Commentaire</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <th scope="row">02/03/21</th>
                                    <td>"Mettre icone pour visualiser le CV"</td>
                                    <td>Validé</td>
                                    <td>05/02/21</td>
                                    <td>Laurence DUVAL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                <th scope="row">01/01/21</th>
                                    <td>"Mettre icone pour visualiser le CV"</td>
                                    <td>A refaire</td>
                                    <td>03/01/21</td>
                                    <td>Laurence DUVAL</td>
                                    <td>La photo doit être plus professionelle</td>
                                </tr>
                            </tbody>
                        </table>

                        <br/>
                        <label>Lettre de Motivation</label>

                        <table className="table table-dark">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Date de dépot</th>
                                    <th scope="col">Entreprise</th>
                                    <th scope="col">LM</th>
                                    <th scope="col">Validation</th>
                                    <th scope="col">Date consulation</th>
                                    <th scope="col">Enseignant</th>
                                    <th scope="col">Commentaire</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <th scope="row">01/01/21</th>
                                    <td>DCT</td>
                                    <td>"Mettre icone pour visualiser la LM"</td>
                                    <td>Validé</td>
                                    <td>05/02/21</td>
                                    <td>Laurence DUVAL</td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 style={hStyle}> Mes recherches de stages</h2> <br/>

                        <label>Entretien</label>
                        <table className="table table-dark">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Personnel</th>
                                    <th scope="col">Entretien</th>
                                    <th scope="col">Intevenant</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <th scope="row"><input type="checkbox"/></th>
                                    <td>DCT</td>
                                    <td>"Mettre icone pour visualiser la LM"</td>
                                    <td>05/02/21</td>
                                </tr>
                            </tbody>
                        </table>

                        <label>Candidature</label>
                        <table className="table table-dark">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">N° de candidature</th>
                                    <th scope="col">Entreprise</th>
                                    <th scope="col">CV</th>
                                    <th scope="col">Lettre de Motivation</th>
                                    <th scope="col">Entretien</th>
                                    <th scope="col">Origine de l'offre</th>
                                    <th scope="col">Date de la candidature</th>
                                    <th scope="col">Stage validé</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>IBM</td>
                                    <td>CV</td>
                                    <td>LM</td>
                                    <td>Entretien n°1</td>
                                    <td>Site web</td>
                                    <td>05/01/21</td>
                                    <td><input type="checkbox" defaultChecked/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-right">
                        <button onClick={this.logout} className="btn btn-primary">Déconnexion</button>  
                    </div>
                </div>
                
            </div>
        )
    }
}


const hStyle = {
    fontSize: '24px'

}
const hStyle2 = {
    fontSize: '24px',
    textAlign: 'center'
    

}



const btnStyle={
    textAlign: 'center',
    color: '#ff000'

}


export default PageEtudiant
