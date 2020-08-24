import React, { Fragment, Component } from 'react'
import { Container } from 'react-bootstrap'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/User/UserActions";
import { selectCurrentUser } from "./redux/User/UserSelectors";

import NavigationContainer from './components/Navigation/NavigationContainer'
import LandingContainer from './components/Landing/LandingContainer'
import AdmissionsContainer from './components/Admissions/AdmissionsContainer'
import TuitionContainer from './components/Tuition/TuitionContainer'
import Help from './components/Help/Help'
import TeachersContainer from './components/Teachers/TeachersContainer'
import NewStudent from './components/Admissions/NewStudent/NewStudent'
import UpdateStudent from './components/Admissions/UpdateStudent/UpdateStudent'
import AuthPages from './components/AuthPages/AuthPages'
import UserContainer from './components/User/UserContainer'

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    //localStorage.clear();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <Fragment>
        <NavigationContainer />
        <Container fluid>
          <Switch>
              <Route exact path='/' component={LandingContainer} />
              <Route exact path='/admissions' component={AdmissionsContainer} />
              <Route path='/tuition' component={TuitionContainer} />
              <Route exact path='/help' component={Help} />
              <Route exact path='/teachers' component={TeachersContainer} />
              <Route exact path='/admissions/new_student' component={NewStudent} />
              <Route exact path='/admissions/update_student' component={UpdateStudent} />
              <Route exact path='/account' render={() => currentUser ? (<UserContainer />) : (<AuthPages />)} />
              <Route exact path='/login' render={() => currentUser ? (<Redirect to='/' />) : (<AuthPages />)} />
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
