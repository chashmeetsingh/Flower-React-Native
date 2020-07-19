import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {Provider} from 'react-redux';
import AppContainer from './src/navigation/AppNavigation';
import configureStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';
import {setDeviceToken} from "./src/util/auth";

export default class App extends Component {
  constructor(props){
    super(props);
    // this.getDeviceId().then(deviceToken => {
    //   setDeviceToken(deviceToken);
    // })
  }
  componentDidMount() {
    SplashScreen.hide();
    // this.getDeviceId();
  }

  private async getDeviceId(){
    console.log('Get device ID');
    // firebase.app()
    return firebase.messaging().getToken().then(fcmToken => {
      return fcmToken
    }).catch(err => {
      console.log('Firebase error',err)
    });
  }



  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={configureStore().store}>
          <PersistGate loading={null} persistor={configureStore().persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    );
  }
}
