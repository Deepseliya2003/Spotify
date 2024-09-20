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
import LogoutScreen from './src/screens/LogoutScreen';
import Navigation from './src/screens/Navigation';
import LocalNotification from './LocalNotification';
import googlemapscreen from './Component/googlemapscreen';
import Home from './Component/Home';
import googlesignin from './Component/googlesignin';
import { ChatScreen } from './src/screens/ChatScreen';



AppRegistry.registerComponent(appName, () =>Navigation);
