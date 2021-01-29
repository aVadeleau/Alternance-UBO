import React, { Component} from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Accueil from './components/Accueil';
import Connexion from './components/Connexion';
import InscriptionEtudiant from './components/InscriptionEtudiant';
import InscriptionEnseignant from './components/InscriptionEnseignant';
import PageEtudiant from './components/PageEtudiant';
import history from "./components/history";


import './App.css';
import PageEnseignant from './components/PageEnseignant';

class App extends Component {
  state ={
  }

  isLogin = (val) =>  {
    this.setState({
      user : val
    })
  };

  render(){
    return (
      <Router history = {history}>
        <div className="App">
          <Header/>
          {
          <Switch>
            { localStorage.getItem("user")=== null &&(
              <Route exact path="/" component={Accueil}/>
              )}  
                           
            { localStorage.getItem("user") === null &&(
              <Route path="/connexion" render={(props)=>(
                <Connexion {...this.props} isLogin={this.isLogin} />
              )} />
            )}

            { localStorage.getItem("user") === null &&(
              <Route path="/inscription/etudiant" component={InscriptionEtudiant}/>
            )}
            
            { localStorage.getItem("user") === null &&(
              <Route path="/inscription/enseignant" component={InscriptionEnseignant}/>
            )}
              
            { localStorage.getItem("user") !== null && JSON.parse(localStorage.getItem("user")).idEtudiant != undefined &&(
              <Route path="/etudiant" component={PageEtudiant} />
            )}    
            { localStorage.getItem("user") !== null && JSON.parse(localStorage.getItem("user")).idEnseignant != undefined &&(
              <Route path="/enseignant" component={PageEnseignant} />
            )} 
          </Switch>
          }
        </div>
      </Router>  

      
    );

  }
}

export default App;
