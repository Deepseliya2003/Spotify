import React from "react";
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Setting from "./Setting";
import { Provider } from "react-redux";
import { store } from "../src/redux/store/store";

const Stack=createNativeStackNavigator();

const Navigator=()=>{
    return(
        <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Setting" component={Setting}/>
        </Stack.Navigator>
       </NavigationContainer>
       </Provider>
    )
}

export default Navigator;