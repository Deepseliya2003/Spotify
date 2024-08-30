/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Setting from './Component/Setting';
import messaging from '@react-native-firebase/messaging';
import Navigator from './Component/Navigator';
import Auth from './src/screens/Auth';
import Login from './src/screens/Login';
import Navigation from './src/screens/Navigation';
import LogoutScreen from './src/screens/LogoutScreen';


export async function backgroundMessageHandler(remoteMessage) {
    console.log('Message handled in the background!', remoteMessage);
  }
  
messaging().setBackgroundMessageHandler(backgroundMessageHandler);

AppRegistry.registerComponent(appName, () =>Navigation);
