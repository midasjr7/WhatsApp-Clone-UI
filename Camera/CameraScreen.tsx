import React, { useState ,useEffect} from "react";
import { View ,Text,StyleSheet,TouchableOpacity} from "react-native";
import { Grey_Color, Primary, Primary_Light, Secondary_Blue, White_Color } from "../Constants/Colors";
import {Feather as Icon,Entypo} from '@expo/vector-icons' ;
import { Camera } from 'expo-camera';

const styles=StyleSheet.create(
    { container: {
        flex: 1,
      },
      camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
      },
      button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
        profileContainer:{
            marginVertical:10,
            marginHorizontal:10,
            flexDirection:"row",
            alignItems:"center",
        },
        avatar:{
                height:50,
                width:50,
                borderRadius:30,
                backgroundColor:"grey"
        },
        plusContainer:{
            backgroundColor:Primary_Light,
            width:20,
            height:20,
            borderRadius:10,
            position:'absolute',
            justifyContent:"center",
            alignContent:"center",
            bottom:0,
            right:0,
        },
        textContainer:{
            paddingHorizontal:15,
        },
        label:{
            fontSize:16,
        },
        silent:{
            color:"grey"
        },
        section:{
           justifyContent:"center",
           backgroundColor:"gainsboro",
           height:30,
        },
        
    }
);



interface cameraProps{
}
const CameraScreen=()=>{

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return(
        <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
        
    )
};

export default CameraScreen;