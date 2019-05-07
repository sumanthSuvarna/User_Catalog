import React,{Component} from 'react';

import './App.css';


import Header from './components/header/header.js';
import Product from './components/products/ProductPage.js';
import Detail from './components/products/details/details.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component {
    

  render(){

      const styles = {
          theme : {
              backgroundColor : "#EEEEEE"
          }
      }

      return(
          <Router>
              <div style={styles.theme}>
                  <Header/>
                  <div>
                      <Switch>
                          <Route path="/" component={Product} exact/>
                          <Route path="/Products" component={Product} exact/>
                          <Route path="/Products/:id" component={Detail} />
                          
                      </Switch>                            
                  </div>
              </div>            
          </Router>
      );
  }

}
export default App
