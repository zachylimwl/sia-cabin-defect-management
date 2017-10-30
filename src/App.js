import React, { Component } from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

//Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import Cabincrew from './components/pages/cabincrew';
import Mechanics from './components/pages/mechanics';

//Others
import './assets/css/default.min.css'

const store = getStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Router history={history}>
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
