import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import stack from "./stack.routes";
import loginCriar from "./login-home";


const Tab = createBottomTabNavigator();

export default function App (){
    return (
        <Tab.Navigator>
            <Tab.Screen name=" " component={stack} />
            <Tab.Screen name=" " component={loginCriar} />
        </Tab.Navigator>
    );
}