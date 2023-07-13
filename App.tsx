import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { _signInWithGoogle } from './src/config/firebase/GoogleSignIn'
import { _signOut } from './src/config/firebase/GoogleSignOut';

const App = () => {
  const[userInfo,setUserInfo]:any = useState(null);
  const googleSignin = async()=>{
    _signInWithGoogle().then(data => {
      if(!data) {
        console.log('=>Error','No Data');
        return;
      }
      console.log('=>Success',data);
      setUserInfo(data);
      
    })
  }

  const signOut = async () => {
    _signOut().then(data => {
      if(data) {
        setUserInfo(null);
        Alert.alert("Signing out ...")
      }
    })
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       {userInfo != null && (<Image source={{uri:userInfo.user.photo}} style={{width:100,height:100,borderRadius:50}}/>)}
       {userInfo != null && <Text>{userInfo.user.name}</Text>}
       {userInfo != null && <Text>{userInfo.user.email}</Text>}
       {userInfo ==null ? (<Button onPress={()=>googleSignin()} title='Google Login'/>) : (<Button onPress={()=>signOut()} title='Sign Out'/>)}
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})