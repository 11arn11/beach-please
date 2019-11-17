// Import React
import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import firebase from './Firebase';

import CompetitionModel from './model/CompetionModel'

import Welcome from './Welcome';
import Navigation from './Navigation';

import Home from './route/Home';
import Login from './route/Login';
import Register from './route/Register';

import Search from './route/Search';
import AdminCompetitions from './route/AdminCompetitions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }

  componentDidMount() {

    CompetitionModel.list().on('value', snapshot => {

      let competitions = snapshot.val();
      let competitionsList = [];

      for (let item in competitions) {
        competitionsList.push({
          competitionID: item,
          competitionName: competitions[item].competitionName,
          competitionType: competitions[item].competitionType,
          competitionDate: competitions[item].competitionDate
        });
      }

      this.setState({
        competitions: competitionsList,
        howManyCompetitions: competitionsList.length
      });

    });

    firebase.auth().onAuthStateChanged(FBUser => {

      if (FBUser) {

        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });

      } else {
        this.setState({ user: null });
      }

    });

  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate('/admin/competitions');
      });
    });
  };

  logOutUser = e => {
    e.preventDefault();
    this.setState({
      displayName: null,
      userID: null,
      user: null
    });

    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate('/login');
      });
  };

  render() {
    return (
      <div>
        <Navigation
          user={this.state.user}
          logOutUser={this.logOutUser}
        />
        {this.state.user && (
          <Welcome
            userName={this.state.displayName}
            logOutUser={this.logOutUser}
          />
        )}

        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Register
            path="/register"
            registerUser={this.registerUser}
          />
          <Search
            path="/search"
            competitions={this.state.competitions}
          />
          <AdminCompetitions
            path="/admin/competitions"
            competitions={this.state.competitions}
            removeCompetition={CompetitionModel.remove}
            addCompetition={CompetitionModel.add}
            userID={this.state.userID}
          />
        </Router>
      </div>
    );
  }
}

export default App;
