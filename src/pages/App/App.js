import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from '../../components/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import QuestionForm from '../../components/QuestionForm';
import Catalog from '../../components/Catalog'
import UserIndex from '../../components/UserIndex'
import Questions from '../../components/Questions'

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
            <Route exact path='/' render={({ history }) =>
                    <div>
                    <AppBar color="primary" position="static">
                      <Toolbar>
                        <TypoGraphy variant="title"
                          color="inherit"
                        >
                          Surveyor
                          <NavBar
                          history={history}
                          dir={'About'}
                          user={this.state.user}
                          handleLogout={this.handleLogout}/>
                          </TypoGraphy>
                      </Toolbar>
                    </AppBar>
            
                  </div>            
            }/>
            <Route exact path='/survey/create' render={({ history }) =>
              <div>
                    <AppBar color="primary" position="static">
                      <Toolbar>
                        <TypoGraphy variant="title"
                        color="inherit"
                        >
                        Surveyor
                        <NavBar
                        history={history}
                        dir={'Create Form'}
                        user={this.state.user}
                        handleLogout={this.handleLogout}/>
                        </TypoGraphy>
                      </Toolbar>
                    </AppBar>
              <QuestionForm/>
              </div>
              }/>
            <Route exact path='/survey/index' render={({ history }) =>
              <div>
                    <AppBar color="primary" position="static">
                    <Toolbar>
                      <TypoGraphy variant="title"
                      color="inherit"
                      >
                      Surveyor
                      <NavBar
                      history={history}
                      dir={'All Surveys'}
                      user={this.state.user}
                      handleLogout={this.handleLogout}/>
                      </TypoGraphy>
                    </Toolbar>
                  </AppBar>
              <Catalog/>

              </div>
              }/>
            <Route exact path='/survey/index/user' render={({ history }) =>
              <div>
                    <AppBar color="primary" position="static">
                      <Toolbar>
                        <TypoGraphy variant="title"
                        color="inherit"
                        >
                        Surveyor
                        <NavBar
                        history={history}
                        dir={'My Surveys'}
                        user={this.state.user}
                        handleLogout={this.handleLogout}/>
                        </TypoGraphy>
                      </Toolbar>
                    </AppBar>
              <UserIndex
              user={this.state.user}
              
              />
              </div>
              }/>
            <Route path='/survey/:id' render={({ history }) =>
              <div>
                    <AppBar color="primary" position="static">
                      <Toolbar>
                        <TypoGraphy variant="title"
                        color="inherit"
                        >
                        Surveyor
                        <NavBar
                        history={history}
                        dir={'Entry'}
                        user={this.state.user}
                        handleLogout={this.handleLogout}/>
                        </TypoGraphy>
                      </Toolbar>
                    </AppBar>
              <Questions
              history={history}
              user={this.state.user}
              
              />
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

            // <div>
            // <NavBar 
            // user={this.state.user}
            // handleLogout={this.handleLogout}/>
            // <h1>Hello</h1>
            
            
            // </div>