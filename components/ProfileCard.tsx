import React from "react";
import { View ,Text,StyleSheet,Image} from "react-native";
import { Grey_Color, Primary, Primary_Light, Secondary_Blue, White_Color } from "../Constants/Colors";
import {Feather as Icon,Entypo} from '@expo/vector-icons' ;

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



interface profileCardProps{
    title:string,
    subTitle:string,
    create:boolean,
}
const ProfileCard=({title,subTitle,create}:profileCardProps)=>{
    return(
<View style={styles.profileContainer}>
<View style={styles.avatar}>
<Image source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartkey.com%2Fmpngs%2Fm%2F152-1520367_user-profile-default-image-png-clipart-png-download.png&f=1&nofb=1'}} 
                    style={{flex:1,borderRadius:25}}></Image>
    {create?
                <View style={styles.plusContainer}>
                    <Icon name="plus" size={20} color={White_Color}/>
                </View>
    :null}
     </View>
           
            <View style={styles.textContainer}>
                <Text style={styles.label}>{title}</Text>
                <Text style={styles.silent}>{subTitle}</Text>
            </View>
        </View>
    )
};

export default ProfileCard;