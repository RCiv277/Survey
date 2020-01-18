import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import NavBar from '../../components/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';







class App extends Component {
    state = {
      user: userService.getUser(),
      currentQuestion: 1,
    }
    handleLogout = () => {
      userService.logout();
      this.setState({ user: null });
    }
  
    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }
    render(){
      return(
        <div>
          <Switch>
            <Route exact path='/' render={() =>
              <div>
              <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout}/>
              <h1>Hello</h1>
              
              
              </div>
            }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          </Switch>
        </div>
      )
    }
}


export default App;
