/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import bgMessaging from "./src/screens/main_screen/bgMessaging";

console.disableYellowBox = true;
console.ignoredYellowBox = ['Remote debugger'];
YellowBox.ignoreWarnings(['Warning: ...']);
YellowBox.ignoreWarnings(['Remote debugger']);
if (__DEV__) {
    console.ignoredYellowBox = [
      'Remote debugger',
      'Warning: isMounted… is deprecated',
      'Module RCTImageLoader'
    ];
  }
  
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
