import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Adcanimal from "../pages/Adcanimal";
import Localizacao from "../pages/Localizacao";


const Stack = createStackNavigator();

export default function App (){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Localização" component={Localizacao} />
            <Stack.Screen name="Adcanimal" component={Adcanimal} />
        </Stack.Navigator>
    );
}