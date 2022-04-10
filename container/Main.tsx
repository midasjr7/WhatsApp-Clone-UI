import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons' ;
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from '../Chats';
import Status from '../Status';
import Call from '../Calls';
import { Primary, Primary_Dark, White_Color } from '../Constants/Colors';
import CameraScreen from '../Camera';

interface MainProp
{

}
const Stack=createNativeStackNavigator();
const tab=createMaterialTopTabNavigator();
const MaterialTop=()=>
{
    return(
        <tab.Navigator 
      initialRouteName='chats'
        screenOptions={{
            
            tabBarIndicatorStyle:{backgroundColor:White_Color},
            tabBarActiveTintColor:White_Color,
            tabBarLabelStyle: { fontSize: 13,fontWeight:'bold' },
            tabBarStyle: { backgroundColor: Primary, elevation:0,borderTopWidth:0 ,shadowOpacity:0},
            }}>
                <tab.Screen name='camera' 
                options={{tabBarLabel:()=>(
                    <View>
                        <Icon name="camera" size={20} color={Primary_Dark}/>
                    </View>
                )}} component={CameraScreen}/>
            <tab.Screen name='chats' component={Chats}/>
            <tab.Screen name='status' component={Status}/>
            <tab.Screen name='call' component={Call}/>
        </tab.Navigator>
    );
};
const Main=({}: MainProp)=>
{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={({navigation,route})=>({
                    title:'WhatsApp',
                    headerTintColor:White_Color,
                    headerShadowVisible:false,
                    headerStyle:{
                        elevation: 0,
                        backgroundColor:Primary,
                        shadowOpacity: 0,
                    },
                    headerRight:()=>
                    {
                        return(
                        <View style={{flexDirection:"row", alignItems:"center" }}>
                            <TouchableOpacity onPress={() => console.log("search clicked")}
                            style={{ marginHorizontal:15 }}>
                                <Icon name ="search" size={26} color={White_Color}/>
                            </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={() => console.log("menu clicked")}
                            style={{ marginHorizontal:5 }}>
                            <Icon name="more-vertical" size={26} color={White_Color}/>
                            </TouchableOpacity>
                        </View>
                        )
                    }
                })}
                name="home" component={MaterialTop}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Main;