import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import messaging from '@react-native-firebase/messaging'; 
import Auth from "./Auth";
import Login from "./Login";
import Splash from "./Splash";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import Home from "./Home";
import { useColorScheme } from "react-native";


const Stack=createNativeStackNavigator();
const Navigation=()=>{

  const scheme = useColorScheme();
  const MyTheme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  useEffect(()=>{
    const requestUserPermission=async()=>{
      const authStatus=await messaging().requestPermission();
      const enabled=
      authStatus===messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus===messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        console.log("Notification permission granted.");

        try {
          const fcmToken = await messaging().getToken();
          if (fcmToken) {
            console.log("FCM Token:", fcmToken); 
          } else {
            console.log("Failed to get FCM token");
          }
        } catch (error) {
          console.error("Error fetching FCM token:", error);
        }
      } else {
        console.log("Notification permission denied.");
      };
    };
    
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    return unsubscribe; 
  }, []);
  
    return(
        <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Auth" component={Auth}/>
            <Stack.Screen name="Home" component={Home}/>

            </Stack.Navigator>
            
        </NavigationContainer>
        </Provider>
    )
}

export default Navigation;






