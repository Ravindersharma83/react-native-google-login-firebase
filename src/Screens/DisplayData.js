import { Alert, StyleSheet, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

const DisplayData = ({user,getApiData}) => {
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
            getApiData();
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
            <UserModal setShowModal={setShowModal} user={selectedUser} getApiData={getApiData}/>
        </Modal>
    </View>
  )
}

const UserModal = (props)=>{
    const[name,setName] = useState(undefined);
    const[age,setAge] = useState(undefined);
    const[email,setEmail] = useState(undefined);

    useEffect(()=>{
        if(props.user){
            setName(props.user.name);
            setEmail(props.user.email);
            setAge(props.user.age.toString());
        }
    },[props.user])

    const updateData = async()=>{
        const url = "http://192.168.1.151:3000/users";
        const id = props.user.id;
        let result = await fetch(`${url}/${id}`,{
            method:"Put",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email,age})
        });
        result = await result.json();
        if(result){
            Alert.alert("User Updated!");
            props.getApiData();
            props.setShowModal(false)
        }
    }
    return(
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)} />
            <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)} />
            <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)} />
            <View style={{margin:10}}>
                <View style={{marginBottom:20}}>
                    <Button color='red' onPress={updateData} title='Save'/>
                </View>
                <Button onPress={()=>props.setShowModal(false)} title='Close'/>
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
    },

    // Modal
    centeredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    modalView:{
        backgroundColor:'lightgrey',
        padding:20,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.70,
        elevation:10
    },
    input:{
        width:250,
        borderColor:'white',
        borderWidth:1,
        margin:15,
        padding:8,
        backgroundColor:'white',
        borderRadius:10
    },

})