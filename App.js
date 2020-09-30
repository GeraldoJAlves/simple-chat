import React, {useState} from 'react';

import {View, Text, StatusBar, Platform} from 'react-native';
import Auth from './src/screens/Auth';
import Profile from './src/screens/Profile';

import {isSignedIn} from './src/services/authGoogle';

const App = () => {
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : 0;
  const STATUSBAR_COLOR = '#000';

  const [isLogged, setIsLogged] = useState(false);

  // if (isSignedIn()) {
  //   getCurrentUserInfo().then((userInfo) => {
  //     console.log(userInfo.user);
  //   });
  // }

  isSignedIn()
    .then((result) => {
      setIsLogged(result);
    })
    .catch((e) => console.log(e));

  return (
    <>
      <View
        style={{height: STATUSBAR_HEIGHT, backgroundColor: STATUSBAR_COLOR}}>
        <StatusBar barStyle="light-content" backgroundColor={STATUSBAR_COLOR} />
      </View>
      {isLogged ? <Profile /> : <Auth />}
    </>
  );
};

export default App;
