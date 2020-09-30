import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

import {ID_CLIENT} from '../../env';

GoogleSignin.configure({
  webClientId: ID_CLIENT,
  offlineAccess: true,
});

export const signIn = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //console.log(userInfo);
      resolve(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancelado');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('em progresso');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play service not available');
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
      reject(error);
    }
  });
};

export const isSignedIn = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const signedIn = await GoogleSignin.isSignedIn();
      resolve(signedIn);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

export const getCurrentUserInfo = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      resolve(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
      reject(error);
    }
  });
};

export const signOut = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
