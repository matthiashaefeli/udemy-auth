import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD5-usXzcWTVWMX2pSE-Yvxb71XKwDEDlw',
      authDomain: 'udemy-auth-d8900.firebaseapp.com',
      databaseURL: 'https://udemy-auth-d8900.firebaseio.com',
      projectId: 'udemy-auth-d8900',
      storageBucket: 'udemy-auth-d8900.appspot.com',
      messagingSenderId: '606800062732',
      appId: '1:606800062732:web:6b149d9f814f41c97c8129'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={{paddingTop: 50}}>
            <Spinner size="large" />
          </View>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;