import React from "react";
import { View ,Text,StyleSheet} from "react-native";
import FloatingButton from "../components/FloatingButton";
import ProfileCards from "../components/ProfileCards";
import { White_Color } from "../Constants/Colors";


interface callProp{}
const styles=StyleSheet.create(
    {
        rootCalls:{
            backgroundColor:White_Color,
            flex:1,
        },
    }
);


const Call=({}:callProp)=>
{
    const item={
        id:1,
        name:"React Native Client",
        lastMessage:"Today, 11:50 PM",
        profilePic:"",
        lastSeen:"4:30 PM",
    };
    const item2={
        id:1,
        name:"HR",
        lastMessage:"Yesterday, 11:50 AM",
        profilePic:"",
        lastSeen:"6:30 PM",
    };
    const item3={
        id:1,
        name:"React Community",
        lastMessage:"8 April, 11:50 AM",
        profilePic:"",
        lastSeen:"6:30 PM",
    };
return(
<View style={styles.rootCalls}>
<ProfileCards {...{item}} call={true}/>
<ProfileCards {...{item:item2}} call={true}/>
<ProfileCards {...{item:item3}} call={true}/>
<View style={{position:"absolute" , bottom:10,right:10 }}>
    <FloatingButton iconName="phone"/>
</View>
</View>
)
};

export default Call;