import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'

class App extends Component {
  componentWillMount() {
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
        <Text>My App</Text>
      </View>
    );
  }
}

export default App;