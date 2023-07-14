import {FlatList, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import DisplayData from './DisplayData';


const TestApi = () => {
    const[data,setData] = useState([]);
    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
        // const url = "https://jsonplaceholder.typicode.com/posts";
        const url = "http://192.168.1.151:3000/users";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    const searchUser = async(text) =>{
      const url = `http://192.168.1.151:3000/users?q=${text}`;
      let result = await fetch(url);
      result = await result.json();
      setData(result);
    }

  return (
    <>
    <TextInput style={styles.input} placeholder='Search...' onChangeText={(text)=>searchUser(text)}/>
    <ScrollView>
      {data.length ? 
      <FlatList
        data={data}
        renderItem={({item})=>
        <View>
            {/* <Text style={{textAlign:'center',padding:5,fontSize:16,backgroundColor:'orange'}}>{item.id}</Text>
            <Text style={{textAlign:'center',padding:10,fontSize:14}}>{item.name}</Text> */}
            <DisplayData user={item} getApiData={getData}/>
        </View>
        }
      />
      : <Text>No Data Found</Text>}
    </ScrollView>
    </>
  )
}

export default TestApi

const styles = StyleSheet.create({
  input:{
    borderColor:'blue',
    borderWidth:1,
    margin:20,
    padding:10,
},
})