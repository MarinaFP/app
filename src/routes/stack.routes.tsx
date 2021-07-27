import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login} from "../pages";


const Stack = createStackNavigator();

export default function App (){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}