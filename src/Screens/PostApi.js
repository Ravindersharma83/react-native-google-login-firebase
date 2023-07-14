import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const PostApi = () => {
    const[name,setName] = useState(null);
    const[age,setAge] = useState(null);
    const[email,setEmail] = useState(null);

    const[nameErr,setNameErr] = useState(false);
    const[ageErr,setAgeErr] = useState(false);
    const[emailErr,setEmailErr] = useState(false);


    const saveData = async()=>{
        if(!name){
            setNameErr(true)
        }else{
            setNameErr(false)
        }
        if(!email){
            setEmailErr(true)
        }else{
            setEmailErr(false)
        }
        if(!age){
            setAgeErr(true)
        }else{
            setAgeErr(false)
        }

        if(!name || !age || !email){return false}

        const url = "http://192.168.1.151:3000/users";
        let result = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email,age})
        });
        result = await result.json();
        if(result){
            Alert.alert("Data Saved!");
            setName(null);
            setAge(null);
            setEmail(null);
        }
    }
  return (
    <View>
      <Text style={{fontSize:30,textAlign:'center',marginTop:10}}>Save User Data</Text>
      <TextInput style={styles.input} value={name} placeholder='Enter Name' onChangeText={(text)=>setName(text)}/>
      {nameErr ? <Text style={styles.errMsg}>please enter name</Text> : null}
      <TextInput style={styles.input} value={email} placeholder='Enter Email' onChangeText={(text)=>setEmail(text)}/>
      {emailErr ? <Text style={styles.errMsg}>please enter email</Text> : null}
      <TextInput style={styles.input} value={age} placeholder='Enter Age' onChangeText={(text)=>setAge(text)}/>
      {ageErr ? <Text style={styles.errMsg}>please enter age</Text> : null}
      <Button title='Save Data' onPress={()=>saveData()}/>
    </View>
  )
}

export default PostApi

const styles = StyleSheet.create({
    input:{
        borderColor:'blue',
        borderWidth:1,
        margin:20,
        padding:10,
    },
    errMsg:{
        color:'red',
        marginLeft:30,
        marginTop:-10,
        marginBottom:10,
        textTransform:'capitalize'
    },
})