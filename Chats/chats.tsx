import React from "react";
import { View , FlatList, Dimensions} from "react-native";
import { UserList } from "../Services/data";
import { UserListProps } from "../Services/interface";
import {  White_Color } from "../Constants/Colors";
import ProfileCards from "../components/ProfileCards";
import FloatingButton from "../components/FloatingButton";
const {width:wWidth,height:wHeaight}=Dimensions.get('window');

interface chatsProp{}


const Chats=({}: chatsProp)=>
{
    const renderItem=({item}:{item:UserListProps})=>
{
    return(<ProfileCards {...{item}}/>
    )
}
return(
<View style={{flex:1,backgroundColor:White_Color}}>
    <FlatList
    data={UserList}
    keyExtractor={(item)=>item.id.toString()}
    renderItem={renderItem}/>
    <FloatingButton iconName="message-square"/>
</View>
)
};

export default Chats;