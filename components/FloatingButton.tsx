import React from "react";
import { View ,TouchableOpacity} from "react-native";
import {  Primary_Light, } from "../Constants/Colors";
import {Feather as Icon} from '@expo/vector-icons' ;

interface FloatingButtonProps{
    iconName:string;
}
const FloatingButton=({ iconName }:FloatingButtonProps)=>{
    return( <View>
        <TouchableOpacity>
            <View style={{
                backgroundColor:Primary_Light,   //TODO Update the Color
                width:70,
                height:70,
                borderRadius:35,
                position:"absolute",
                right:10,
                bottom:20,
            }}>
                <View style={{justifyContent:"center",
            alignItems:"center",
            width:"100%",
            height:"100%"}}>
            <Icon name={iconName} size={30} color={'#ffffff'}//TODO Update the Color
            />
            </View>
            </View>
        </TouchableOpacity>
    </View>
    )
};

export default FloatingButton;