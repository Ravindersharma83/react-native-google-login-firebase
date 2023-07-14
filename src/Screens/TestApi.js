import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

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
  return (
    <View>
      <Text style={{textAlign:'center',padding:10,fontSize:30}}>Display Users</Text>
      {data.length ? 
      <FlatList
        data={data}
        renderItem={({item})=><View>
            <Text style={{textAlign:'center',padding:5,fontSize:16,backgroundColor:'orange'}}>{item.id}</Text>
            <Text style={{textAlign:'center',padding:10,fontSize:14}}>{item.name}</Text>
        </View>}
      />
      : <Text>No Data Found</Text>}
    </View>
  )
}

export default TestApi

const styles = StyleSheet.create({})