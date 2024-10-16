import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from "./src/pages/chat";
import CallPage from "./src/pages/CallPage";

const Stack = createNativeStackNavigator();

export default function AppNavigation(props:any) {
    return (
        <Stack.Navigator 
            initialRouteName="HomePage"
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="HomePage" component={Chat} />
            <Stack.Screen name="CallPage" component={CallPage} />
        </Stack.Navigator>
    );
}