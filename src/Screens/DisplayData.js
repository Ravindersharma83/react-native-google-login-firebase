import { Alert, StyleSheet, Text, TouchableOpacity, View, Modal, Button } from 'react-native'
import React, { useState } from 'react'

const DisplayData = ({user}) => {
    const [showModal,setShowModal] = useState(false);
    const[selectedUser,setSelectedUser] = useState([]);
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

      const updateUser = async (user)=>{
        setShowModal(true);
        setSelectedUser(user);
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
                <TouchableOpacity style={[styles.btn,{backgroundColor:'yellow',}]} onPress={()=>updateUser(user)}>
                    <Text style={[styles.btnText,{color:'black'}]}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>

        <Modal visible={showModal} transparent={true}>
            <UserModal setShowModal={setShowModal} user={selectedUser}/>
        </Modal>
    </View>
  )
}

const UserModal = (props)=>{
    return(
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>{props.user.name}</Text>
                <Button onPress={()=>props.setShowModal(false)} title='Close'/>
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
    },

    // Modal
    centeredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    modalView:{
        backgroundColor:'white',
        padding:40,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.70,
        elevation:5
    }

})