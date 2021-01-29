import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import history from "./history";

export class InscriptionEnseignant extends Component {
    constructor(){
        super();
        this.state = {
            nom:'',
            prenom:'',
            emailUBO:'',
            motDePasse:'',
        }

    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onChecked = (e) => this.setState({alternance : e.target.checked}); 
        

    onSubmit = (e) =>{
        
        e.preventDefault();
        const enseignant = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            emailUBO: this.state.emailUBO,
            motDePasse: this.state.motDePasse
        };

        console.log("Un enseignant : "+JSON.stringify(enseignant));
        axios.post('/inscription/enseignant',{enseignant})
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
                    <label>Email </label>
                    <input
                        type="email" 
                        className="form-control" 
                        name="emailUBO" 
                        placeholder="Adresse mail de l'UBO ... "
                        onChange={this.onChange}
                    />
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



export default InscriptionEnseignant;
