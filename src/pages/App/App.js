import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'


class App extends Component {
    state = {
      loggedUser: '',
      currentQuestion: 0,
    }
    render(){
      return(
        <div>
          <h1>Hello</h1>
        </div>
      )
    }
}


export default App;
