import React from "react";
import { View ,Text,StyleSheet, Dimensions} from "react-native";
import { Grey_Color, Primary, Primary_Light, Secondary_Blue, White_Color } from "../Constants/Colors";
import {Feather as Icon,Entypo} from '@expo/vector-icons' ;
import ProfileCard from "../components/ProfileCard";
const {width:wWidth,height:wHeaight}=Dimensions.get('window');

interface statusProp{}

const styles=StyleSheet.create(
    {
        rootStatus:{
            backgroundColor:White_Color,
            flex:1,
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
        floatingAction:{
             position:"absolute",
             bottom:10,
             right:15,
             alignItems:"center",
        },
        edit:{
backgroundColor:Grey_Color,
width:50,
height:50,
borderRadius:25,
alignItems:"center",
justifyContent:"center",
elevation:5,
        },
        camera:{
            marginVertical:10,
            backgroundColor:Primary_Light,
            width:50,
            height:50,
            borderRadius:25,
            alignItems:"center",
            justifyContent:"center",
            elevation:5,
        },
    }
);


const Status=({}:statusProp)=>
{
return(
<View style={styles.rootStatus}>
        <ProfileCard create={true} title={"My Status"}  subTitle={"Tap to add status update"}/>
        <View style={styles.section}>
           <View style={{marginHorizontal:15}}>
              <Text>Recent Updates</Text>
           </View>
        </View>
        <ProfileCard create={false} title={"Dhoni"} subTitle={"Today, 5:00 PM"}/>
        <ProfileCard create={false} title={"Client"} subTitle={"Today, 3:00 PM"}/>
        <ProfileCard create={false} title={"Manager"} subTitle={"Today, 1:00 PM"}/>
        <View style={styles.floatingAction}>
            <View style={styles.edit}>
<Entypo name="edit" size={20} color={Primary}/>
            </View>
            <View style={styles.camera}>
            <Entypo name="camera" size={20} color={White_Color}/>
                </View>
        </View>
</View>
)
};

export default Status;