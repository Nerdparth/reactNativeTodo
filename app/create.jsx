import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import {useAddTodo} from "../hooks"


const Create = () => {
  const router = useRouter()
  const [title1, setTitle1] = useState('')
  const [content1, setContent1] = useState('')
  const addTodo = useAddTodo()
  const formHandler = () => {
    if (title1 != '' && content1 != ''){
    addTodo(title1, content1)
    router.navigate("/")}
    else{
      console.log("empty values given")
    }
  }  

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems: "center" }}>
        <TextInput placeholder='Title' 
        onChangeText={(e) => {setTitle1(e)}}
        style={{ borderWidth: 1,
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 14,
        marginBottom: 20,
        width:"80%" }} />
        <TextInput multiline numberOfLines={10} placeholder='Content' 
        onChangeText={(e) => {setContent1(e)}}
        style={{ borderWidth: 1, 
        height: 300, 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderRadius: 14, 
        marginBottom: 20, 
        width:"80%" }} />
        <TouchableOpacity onPress={formHandler} activeOpacity={0.7} 
        style={{ backgroundColor: "orange", 
        paddingHorizontal: 40, 
        paddingVertical: 15, 
        justifyContent:"center", 
        alignItems:"center", 
        borderRadius: 13, 
        width:"80%" }}>
        <Text style={{ color:"white", fontWeight: 700, fontSize: 15 }} >Add Note</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Create