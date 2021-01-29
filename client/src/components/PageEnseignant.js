import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';
import history from './history';



export class PageEnseignant extends Component {
    constructor(props){
        super(props);
        this.state = {
            user :  JSON.parse(localStorage.getItem("user"))
        }
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
            <div className="PageEnseignant">

                <div style={hStyle2}> 
                    <h2>Page de {this.state.user.prenomEnseignant +" "+this.state.user.nomEnseignant}</h2>
                </div>   
                
                <div className="row">
                    <div className="col-3">
                        <h2 style={hStyle}>Informations personnelles</h2>
                        <p>Nom : {this.state.user.nomEnseignant} </p>
                        <p>Prénom : {this.state.user.prenomEnseignant}</p>
                        <p>Email : {this.state.user.adresseMail}</p>
                        <p type="password">{this.state.user.motDePasse}</p>

                        <div className="row">   
                            <div className="col-8" style={btnStyle}>
                                <button type="submit" className="btn btn-primary">Modifier</button>               
                            </div>
                        </div>   
                        <br />

                        <h2 style={hStyle}>{"\n"}  Gestion des entreprises</h2>
                        <p align="justify">
                            Vous pouvez ajouter une entreprise dans le système 
                            qui pourras ensuite être utilisée par les étudiants 
                            lorsqu'ils ajouteront une candidature, un entretien ou 
                            sur leurs page.
                        </p>

                        <div className="row">   
                            <div className="col-9" style={btnStyle}>
                                <button type="submit" className="btn btn-primary">Ajouter un entreprise</button>               
                            </div>
                        </div> 
                        
                        <br />

                        <p align="justify">
                            Les étudiants peuvent rajouter des entreprises quand
                            elles ne sont pas déja présentes dans le système. Vous
                            pouvez consulter la listes des entreprises et éventuellement retirer les entreprises qui ne correpondent
                            pas à vos critères. Dans ce cas les candidatures, entretiens et stages des élèves en liens avec cette entreprise seront supprimés.

                        </p>

                        <div className="row">   
                            <div className="col-9" style={btnStyle}>
                                <button type="submit" className="btn btn-primary">Consulter la liste des entreprises</button>               
                            </div>
                        </div>
                          
                        <br />

                        <h2 style={hStyle}>{"\n"}  Gestion des utilisateurs</h2>
                        <p align="justify">
                            Vous pouvez ajouter des comptes étudiants.
                        </p>

                        <div className="row">   
                            <div className="col-9" style={btnStyle}>
                                <button type="submit" className="btn btn-primary">Ajouter un étudiant</button>               
                            </div>
                        </div>   



                    </div>
                    <div className="col-8">
                        <h2 style={hStyle}>Documents à traiter</h2><br/>
                        <label>CV étudiants</label>    
                        <table className="table table-dark">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prénom</th>
                                    <th scope="col">Filière</th>
                                    <th scope="col">CV</th>
                                    <th scope="col">Traiter</th>
                                    <th scope="col">Commentaire</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <th scope="row">Brennon</th>
                                    <td>Paul</td>
                                    <td>TIL</td>
                                    <td>CV de Paul Brennon</td>
                                    <td>Validé</td>
                                    <td> Attention à la photo</td>
                                </tr>
                            </tbody>
                        </table>

                        <br/>
                        <label>Lettre de Motivation étudiantes</label>

                        <table className="table table-dark">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prénom</th>
                                    <th scope="col">Filière</th>
                                    <th scope="col">Entreprise</th>
                                    <th scope="col">LM</th>
                                    <th scope="col">Traiter</th>
                                    <th scope="col">Commentaire</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <th scope="row">Brennon</th>
                                    <td>Paul</td>
                                    <td>TIL</td>
                                    <td>THALES</td>
                                    <td>Lettre de motivation de Paul Brennon</td>
                                    <td>Validé</td>
                                    <td>La partie sur toi est bien mais fait gaffe à celle sur l'entreprise</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 style={hStyle}> Statistiques</h2> <br/>

                        

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


export default PageEnseignant;
