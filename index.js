/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Register from './SocialMediaApp/Register';
import WelcomeStack from './SocialMediaApp/WelcomeScreen';
// import AppHome from './SocialMediaApp/SocialMediaApp';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WelcomeStack);
