import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shoppage.component"
import Header from './components/header/header.component'
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(
      user => {
        this.setState({ currentUser: user });
        console.log(user);
      }
    )
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInPage}></Route>
        </Switch>
      </div>
    );
  }
}


export default App;
