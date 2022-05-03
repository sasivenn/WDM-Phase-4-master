import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './services';
import Contact from './contact';
import Login from './login';
import Signup from './Signup';
import AdminHome from './AdminHome';
import ManagerHome from './ManagerHome';
import UserHome from './UserHome';
import VisitorHome from './VisitorHome';
import UserOrderSuccess from './UserOrderSuccess';

import '../App.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/adminhome" exact component={AdminHome} />
            <Route path="/managerhome" exact component={ManagerHome} />
            <Route path="/userhome" exact component={UserHome} />
            <Route path="/visitorhome" exact component={VisitorHome} />
            <Route path="/userordersuccess" exact component={UserOrderSuccess} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;