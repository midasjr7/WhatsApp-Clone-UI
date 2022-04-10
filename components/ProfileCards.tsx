import React from "react";
import { View ,Text,StyleSheet, Dimensions,Image} from "react-native";
import { Grey_Color, Primary, Primary_Light, Secondary_Blue, White_Color } from "../Constants/Colors";
import {Ionicons as Icon,MaterialIcons} from '@expo/vector-icons' ;
import { UserListProps } from "../Services/interface";

const {width:wWidth,height:wHeaight}=Dimensions.get('window');

const styles=StyleSheet.create(
    {
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



interface profileCardsProps{
   item:UserListProps,
   call?:Boolean
}
const ProfileCards=({item,call}:profileCardsProps)=>{
    return(
        <View style={{flexDirection:"row", alignItems:"center",
        justifyContent:"space-between",
    width:wWidth-20,
marginHorizontal:10,
marginVertical:4,
paddingBottom:10,
borderBottomColor:"#afafaf",
borderBottomWidth:StyleSheet.hairlineWidth,

}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <View
                style={{width:60,height:60,borderRadius:30,
                backgroundColor:"grey"}}//TODO Update the Color
                >
                    <Image source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartkey.com%2Fmpngs%2Fm%2F152-1520367_user-profile-default-image-png-clipart-png-download.png&f=1&nofb=1'}} 
                    style={{flex:1,borderRadius:25}}></Image>
                </View>
                 <View style={{paddingHorizontal:10}}>
            <Text>{item.name}</Text>
            <View  style={{flexDirection:"row",alignItems:"center"}}>
                {call?
                <MaterialIcons name="call-made" size={16} color={Primary_Light}/>
                :null}
                
            <Text>{item.lastMessage}</Text>
            </View>
           
        </View>
            </View>
       
        <View>
            {call?
            <Icon name="md-call" size={26} color={Primary}/>
        :<Text>{item.lastSeen}</Text>}
            
        </View>
        </View>
    )
};

export default ProfileCards;