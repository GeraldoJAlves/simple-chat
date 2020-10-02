import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Auth from './screens/Auth';
import Profile from './screens/Profile';
import ChatList from './screens/ChatList';
import Register from './screens/Register';
import SplashScreen from './screens/SplashScreen';

import {restoreToken} from './store/actions/user';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Navigator = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('effect');
    if (user.isLoading) {
      dispatch(restoreToken());
    }
  }, [user, dispatch]);

  if (user.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {!user.token ? (
        <AuthStack />
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Chats" component={ChatList} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Auth} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Navigator;
