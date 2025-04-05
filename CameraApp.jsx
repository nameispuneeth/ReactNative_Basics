import { Camera,CameraView,useCameraPermissions } from 'expo-camera'
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React,{useRef, useState} from 'react'

const CameraApp = () => {
  const [Permission,setPermission]=useCameraPermissions();
  const [face,setface]=useState('back');
  const [image,setimage]=useState(null);
  const cameraRef=useRef(null);

  const TakeImage=async ()=>{
    if(cameraRef.current){
      let data=await cameraRef.current.takePictureAsync();
      setimage(data.uri);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.cam}>
        <CameraView facing={face} style={styles.camView} ratio='3:4' ref={cameraRef}>
        </CameraView>
      </View>
      <View style={{flex:0,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{
          setface((face=="back")?("front"):"back")
        }}>         
            <Image source={require('@/assets/images/flip.png')} style={styles.img1}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={TakeImage}>        
            <Image source={require('@/assets/images/camera.png')} style={styles.img2}/>
        </TouchableOpacity>
      </View>
      {image && (
        <View style={styles.footer}>
          <Image source={{ uri: image }} style={styles.capturedImage} />
        </View>
      )}
    </View>
  )
}

export default CameraApp

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    margin:10,
    marginTop:40
  },
  cam:{
    width:'97%',
    height:300,
    borderColor:'black',
    borderWidth:1,
    alignItems:'center'
  },
  camView:{
    height:'100%',
    width:'100%',
  },
  img1:{
    height:35,
    width:35,
    resizeMode:'contain',
    margin:10,
  },
  img2:{
    height:50,
    width:50,
    resizeMode:'contain'
  },
  footer:{
    width:'97%',
    height:300,
    borderColor:'black',
    borderWidth:1,
    alignItems:'center'
  },capturedImage:{
    height:'100%',
    width:'100%'
  }
})