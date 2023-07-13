import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async ()=>{
    try {
        GoogleSignin.configure({
            offlineAccess:false,
            webClientId:'188827330217-orul0tpibegkb413lmvr47dcaqccsqv1.apps.googleusercontent.com',
            scopes:['profile','email']
        });
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        const {idToken} = await GoogleSignin.signIn();
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        auth().signInWithCredential(googleCredentials);
        return userInfo;
    } catch (error) {
        console.log('=> Google Sign In',error);
        return null;
    }
}