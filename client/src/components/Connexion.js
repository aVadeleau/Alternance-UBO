import Axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import history from './history';


export class Connexion extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            user : props.isLogin
        }
    }
    
    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        const userInfo = {
            email : this.state.email,
            password : this.state.password
        };

        const mail = this.state.email.split('@');
        console.log("mail : "+mail[0]+" "+mail[1]);
        if(mail[1]==="univ-brest.fr"  ){
            Axios.post('/connexion/enseignant',{userInfo})
            .then(res =>{
                console.log(this.state.user);
                if(res.data.nomEnseignant !== undefined){
                    this.state.user(res.data);
                    console.log(res.data.prenomEtudiant);
                    localStorage.setItem('user',JSON.stringify(res.data));
                    console.log(localStorage.getItem('user'));
                    history.push("/enseignant");
                    window.location.reload(false);
                    
                }
            })
            .catch(err=>{
                if (err) throw err;

            })       
        }
        else{
            Axios.post('/connexion/etudiant',{userInfo})
            .then(res =>{
                console.log(this.state.user);
                if(res.data.nomEtudiant !== undefined){
                    this.state.user(res.data);
                    console.log(res.data.prenomEtudiant);
                    localStorage.setItem('user',JSON.stringify(res.data));
                    console.log(localStorage.getItem('user'));
                    history.push("/etudiant");
                    window.location.reload(false);
                    
                }
            })
            .catch(err=>{
                if (err) throw err;

            })





        }
    }

    render() {
        return (
                 
            <form onSubmit={this.onSubmit}>
                <p>Pour accéder à l'application veuillez vous connecter : </p>
                <input
                    type="email" 
                    name ="email"
                    value = {this.state.title}
                    placeholder="Adresse email ..."
                    className="form-control" 
                    onChange={this.onChange}
               />
          
                <input
                    type="password"
                    name ="password"
                    value = {this.state.password}
                    placeholder="Mot de passe ..."
                    className="form-control"
                    onChange={this.onChange}
               />

                <input 
                    type="submit" 
                    className="btn" 
                    value="Se connecter" 
                    style={btnStyle}                    
                />

                <Link to="/"> Mot de passe oublié ?</Link> 
                <p> Vous n'êtes pas encore inscrit ?</p>
                <Link to="/inscription/etudiant">Inscription étudiant</Link> <br />
                <Link to="/inscription/enseignant">Inscription enseignant</Link>


          </form> 

          




            
        )
    }
}


const btnStyle = {
    background: "#fff",
    color: '#ff000'
}


export default Connexion;
