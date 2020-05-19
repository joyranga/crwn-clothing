import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from "./pages/shoppage/shoppage.component"
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component'

import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { dispatchCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          dispatchCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      dispatchCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route exact path="/signin"
            render={() => (
                this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            )}>
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchCurrentUser: user => dispatch(setCurrentUser(user))
})


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
