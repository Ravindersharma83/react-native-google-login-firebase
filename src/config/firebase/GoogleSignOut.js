import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';

export const _signOut = async () => {
    try {
      await GoogleSignin.signOut();
      return true;
    } catch (error) {
      console.error(error);
    }
  };