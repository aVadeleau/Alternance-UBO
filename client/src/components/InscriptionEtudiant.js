import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import history from "./history";

export class InscriptionEtudiant extends Component {
    constructor(){
        super();
        this.state = {
            numeroEtudiant : '',
            nom:'',
            prenom:'',
            parcours:'',
            telephone:null,
            nationalite:'',
            dateDeNaissance:'',
            typeContrat:null,
            dateStage:null,
            alternance:false,
            emailUBO:'',
            motDePasse:'',
        }

    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onChecked = (e) => this.setState({alternance : e.target.checked}); 
        

    onSubmit = (e) =>{
        
        e.preventDefault();
        const etudiant = {
            numeroEtudiant : this.state.numeroEtudiant,
            nom: this.state.nom,
            prenom: this.state.prenom,
            parcours: this.state.parcours,
            telephone: this.state.telephone,
            nationalite: this.state.nationalite,
            dateDeNaissance: this.state.dateDeNaissance,
            typeContrat : this.state.typeContrat,
            dateStage : this.state.dateStage,
            alternance : this.state.alternance,
            emailUBO: this.state.emailUBO,
            motDePasse: this.state.motDePasse
        };

        console.log("Un étudiant : "+JSON.stringify(etudiant));
        axios.post('/inscription/etudiant',{etudiant})
        .then(res =>{

        })
        .catch(err =>{
            if (err) throw err;
        })
            
        history.push("/connexion");
    };

    render() {
        return (           
            <form onSubmit={this.onSubmit}>
                <p style={{textAlign:'center'}}>Pour accéder à l'application, veuillez vous inscrire : </p>
                <div className="form-row">
                    <div className="form-group col-md-6">

                        <label>Nom (*)</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="nom" 
                            name="nom"
                            placeholder = " Nom ..."
                            value={this.state.nom}
                            onChange={this.onChange}                                
                        />
                    </div>
                    <div className="form-group col-md-6">

                    <label>Prénom (*)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="prenom"
                        placeholder="Prénom ..."
                        onChange={this.onChange}
                        required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label>Numéro étudiant (*)</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="numeroEtudiant"
                            placeholder="Numero etudiant ..."
                            onChange={this.onChange}
                            required
                            />
                    </div>
                    <div className="form-group col-md-6">
                    <label>Email </label>
                        <input
                            type="email" 
                            className="form-control" 
                            name="emailUBO" 
                            placeholder="Adresse mail de l'UBO ... "
                            onChange={this.onChange}
                        />
                    </div>
                </div>    
                <div className="form-row">    
                    <div className="form-group col-md-6">
                    <label>Date de Naissance (*)</label>
                        <input
                            type="date" 
                            className="form-control" 
                            name="dateDeNaissance" 
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Nationalité (*)</label>
                        <select name="nationalite" className="form-control" onChange={this.onChange} required >
                            <option disabled selected >Nationalité ...  </option>
                            <option  >Française</option>
                            <option>Autre</option>
                        </select>
                    </div>    
                </div>                   
                        
                <div className="form-row">
                    <div className="form-group col-md-6">

                        <label>Parcours (*)</label>
                        <input 
                            type="text"
                            className="form-control" 
                            name="parcours"
                            placeholder = " Parcours ..."
                            onChange={this.onChange}
                            required
                                
                        />
                    </div>
                    <div className="form-group col-md-6">

                    <label>Téléphone (*)</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="telephone"
                        placeholder="Téléphone ..."
                        onChange={this.onChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">

                        <label>Mot de Passe (*)</label>
                        <input 
                            type="password"
                            className="form-control" 
                            name="motDePasse"
                            placeholder = " Mot de passe ..."
                            onChange={this.onChange}
                            required
                                
                        />
                    </div>
                    <div className="form-group col-md-6">

                    <label>Confirmer le mot de passe (*)</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="confirmerMotDePasse"
                        placeholder="Confirmer le mot de passe ..."
                        onChange={this.onChange}
                        required
                        />
                    </div>
                </div>
                    
                <div className="form-group">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="alternance" 
                            checked={this.state.alternance}
                            onChange={this.onChecked}
                            id="gridCheck"
                        />

                        <label className="form-check-label" htmlFor="gridCheck">
                            Je postule pour l'alternance
                        </label>


                        
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            J'autorise l'application à m'informer par mail
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            Je certifie sur l'honneur l'exactitude des renseignements fournis
                        </label>
                    </div>
                </div> 

                <div className="form-group" style={btnDivStyle}>   
                    <button type="submit" className="btn btn-primary">S'inscrire</button>               
                </div>

                <div className="form-group" style={btnDivStyle}>  
                    <Link to='/connexion'>Se connecter</Link> 
                                   
                </div>


            </form>
            
        )
    }
}


const btnDivStyle = {
    textAlign : 'center',
}



export default InscriptionEtudiant;
