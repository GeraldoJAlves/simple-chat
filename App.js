import React from 'react';
import {View, StatusBar, Platform, Alert} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import Navigator from './src/navigator';
import {setMessage} from './src/store/actions/message';

const App = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  if (message.title && message.text) {
    Alert.alert(message.title, message.text);
    dispatch(setMessage({title: '', text: ''}));
  }

  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : 0;
  const STATUSBAR_COLOR = '#000';

  return (
    <>
      <View
        style={{height: STATUSBAR_HEIGHT, backgroundColor: STATUSBAR_COLOR}}>
        <StatusBar barStyle="light-content" backgroundColor={STATUSBAR_COLOR} />
      </View>
      <Navigator />
    </>
  );
};

export default App;
