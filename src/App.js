import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import BodyLink from './components/links/BodyLinks';
import CreateLink from './components/links/CreateLinks';
import EditLink from './components/links/EditLinks';


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path ="/" render = {()=> (<Redirect to ="/login"/>)}/>
              <Route path ="/login" component={Login}/>
              <Route path = "/dashboard" component ={Dashboard}/>
              <Route exact  path ="/links" component={BodyLink}/>
              <Route path ="/CreateLinks" component={CreateLink}/>   
              <Route path="/links/:id/edit" component={EditLink} />    
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
