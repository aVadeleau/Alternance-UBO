import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Accueil extends Component {
    render() {
        return (
            <div>
                <p style={{textAlign:'center'}}>
                    Bienvenue sur Alternance UBO !
                    Si vous avez déja un compte connectez-vous sinon veuillez en créer un ci-dessous    
                </p>
                <div className="form" style={linkStyle}>
                    <Link to='/connexion'>Se connecter</Link> |
                    <Link to='/inscription/etudiant'>Inscription étudiant </Link>|
                    <Link to='/inscription/enseignant'>Inscription enseignant </Link>  
                </div>


                


                
            </div>
        )
    }
}

const linkStyle = {
    textAlign : 'center'
}


export default Accueil
