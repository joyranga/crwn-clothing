import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shoppage/shoppage.component"
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


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
          <Route exact path="/shop" component={ShopPage}></Route>
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

const mapStateToProps = ({ user }) => {
  return { currentUser: user.currentUser }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
