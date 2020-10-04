import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Auth from './screens/Auth';
import Profile from './screens/Profile';
import Users from './screens/Users';
import ChatList from './screens/ChatList';
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
          <SearchBar />
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: 'white',
              pressOpacity: 1,
              labelStyle:{
                fontWeight: 'bold'
              },
              indicatorStyle: {
                borderBottomColor: colors.white,
                borderBottomWidth: 3,
              },
              inactiveTintColor: '#CCC',
              style: {
                backgroundColor: colors.primary,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              },
            }}>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Chats" component={ChatList} />
            <Stack.Screen name="Users" component={Users} />
          </Tab.Navigator>
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

export default Navigator;
