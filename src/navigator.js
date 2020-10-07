import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Auth from './screens/Auth';
import Profile from './screens/Profile';
import Users from './screens/Users';
import ChatList from './screens/ChatList';
import ChatRoom from './screens/ChatRoom';
import Register from './screens/Register';
import SplashScreen from './screens/SplashScreen';
import SearchBar from './components/searchBar';

import colors from './styles/colors';

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
        <>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={TabMain} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
          </Stack.Navigator>
        </>
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

const TabMain = () => {
  const [hideTabBar, setHideTabBar] = useState(false);
  const styleTabBar = {
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  if (hideTabBar) {
    styleTabBar.height = 0;
  }
  return (
    <>
      <SearchBar
        hideTabBar={() => {
          setHideTabBar(true);
        }}
        showTabBar={() => {
          setHideTabBar(false);
        }}
      />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          showIcon: true,
          pressOpacity: 1,
          labelStyle: {
            fontWeight: 'bold',
          },
          indicatorStyle: {
            borderBottomColor: colors.white,
            borderBottomWidth: 3,
          },
          inactiveTintColor: '#CCC',
          style: styleTabBar,
        }}>
        <Tab.Screen name="ChatList" component={ChatList} />
        <Tab.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Users" component={Users} />
      </Tab.Navigator>
    </>
  );
};

export default Navigator;
