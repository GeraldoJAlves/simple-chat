import React from 'react';

import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

import App from './App';
import {name as appName} from './app.json';

import storeConfig from './src/store/store.config';

const store = storeConfig();

const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
