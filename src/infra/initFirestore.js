import app from '@react-native-firebase/app';

import {CONFIG_WEB} from '../../env';
if (!app.apps.length) {
  app.initializeApp(CONFIG_WEB);
}
