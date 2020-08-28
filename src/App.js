import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
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
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;