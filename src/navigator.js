import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Auth from './screens/Auth';
import Profile from './screens/Profile';
import ChatList from './screens/ChatList';
import Register from './screens/Register';
import {useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Navigator = () => {
  const user = useSelector((state) => state.user);

  console.log(user);

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
