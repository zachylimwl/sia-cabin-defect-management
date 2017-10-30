import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

//Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import Cabincrew from './components/pages/cabincrew';
import Mechanics from './components/pages/mechanics';

//Others
import './assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/cabincrew' component={Cabincrew} />
            <Route exact path='/mechanics' component={Mechanics} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
