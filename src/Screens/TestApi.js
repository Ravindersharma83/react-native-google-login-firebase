import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const TestApi = () => {
    const[data,setData] = useState([]);
    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result);

    }
  return (
    <View>
      <Text style={{textAlign:'center',padding:10,fontSize:16}}>Display Posts Data With Api</Text>
      {data.length ? 
      <FlatList
        data={data}
        renderItem={({item})=><View>
            <Text style={{textAlign:'center',padding:5,fontSize:16,backgroundColor:'orange'}}>{item.id}</Text>
            <Text style={{textAlign:'center',padding:10,fontSize:14}}>{item.title}</Text>
        </View>}
      />
      : <Text>No Data Found</Text>}
    </View>
  )
}

export default TestApi

const styles = StyleSheet.create({})