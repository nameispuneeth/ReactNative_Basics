import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';


const index = () => {
  let [Task, setTask] = useState('');
  let [TaskList, setTaskList] = useState([]);

  const deleteAll=()=>{
    setTaskList([]);
  }
  const PushItem=()=>{
    if(Task.trim()){
      setTaskList([...TaskList,Task]);
      setTask('');
    }
  }
  const DeleteItem=(item)=>{
    let temp=[...TaskList];
    temp.splice(item,1);
    setTaskList(temp);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>TO-DO-LIST</Text>
      </View>

      <View style={styles.main}>
        <TouchableOpacity style={styles.deleteAll} onPress={()=>deleteAll()}>
          <Text style={styles.deleteAllText}>Delete All</Text>
        </TouchableOpacity>
        
            <FlatList
              data={TaskList}
              renderItem={({item,index})=>(
                <View style={Card.items}>
                  <TouchableOpacity onPress={()=>DeleteItem(index)}>
                    <Image source={require('@/assets/images/delete.png')} style={Card.deleteimg}/>
                  </TouchableOpacity>
                  <Text style={Card.itemsText}>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index}
              />
      </View>

      <View style={styles.footer}>
        <TextInput 
          placeholder='Enter The Task'
          placeholderTextColor='gray'
          value={Task} 
          onChangeText={setTask} 
          style={styles.input} 
        />
        <TouchableOpacity onPress={()=>PushItem()}>
          <Image 
            source={require('@/assets/images/plus.png')} 
            style={styles.deleteImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center'
  },
  header: {
    height: 90,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A8A8'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  main: {
    flex: 1,
    width: '100%',
    padding: 10,
    backgroundColor: 'black'
  },
  text: {
    fontSize: 16,
    color:'white',
    marginVertical: 10
  },
  footer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#00A8A8'
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: 'gray',
    color:'white',
    fontWeight:'700',
    borderWidth: 1
  },
  deleteImg: {
    height: 30,
    width: 30,
    marginLeft: 10,
    resizeMode: 'contain'
  },
  deleteAll:{
    backgroundColor:'#262626',
    width:80,
    alignItems:'center',
    borderRadius:6,
    padding:4,
    alignSelf:'flex-end',
    margin:5,
  },
  deleteAllText:{
    color:'white',
    fontWeight:'bold',
  }
})
const Card=StyleSheet.create({
  items:{
    flex:0,
    flexDirection:'row',
    width:'98%',
    backgroundColor:'#262626',
    height:40,
    borderRadius:5,
    padding:5,
    alignItems:'center',
    margin:5
  },
  itemsText:{
    color:'white',
    fontSize:15,
    margin:5
  },
  deleteimg:{
    height:30,
    width:30,
    resizeMode:'contain'
  }

})