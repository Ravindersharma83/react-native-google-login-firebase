import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DisplayData = ({user}) => {
    const deleteUser = async (id)=>{
        const url = "http://192.168.1.151:3000/users";
        let result = await fetch(`${url}/${id}`,{
            method:"delete",
        });
        result = await result.json();
        if(result){
            Alert.alert("User Deleted!");
        }
      }
  return (
    <View style={styles.container}>
        <View style={styles.userDetails}>
            <View style={styles.userInfo}>
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.btn} onPress={()=>deleteUser(user.id)}>
                    <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn,{backgroundColor:'yellow',}]}>
                    <Text style={[styles.btnText,{color:'black'}]}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default DisplayData

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
    },
    userDetails:{
        borderWidth:1,
        borderColor:'grey',
        padding:5,
        flexDirection:'row',
        flex:1
    },
    userInfo:{
        flex:2
    },
    actions:{
        flex:2,
        flexDirection:'row',
    },
    btn:{
        backgroundColor:'red',
        width:60,
        height:30,
        margin:10

    },
    btnText:{
        color:'white',
        padding:5
    }

})