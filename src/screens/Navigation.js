import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import messaging from '@react-native-firebase/messaging'; 
import Auth from "./Auth";
import Login from "./Login";
import Splash from "./Splash";
import First from "./First";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import CartScreen from "./CartScreen";
import LogoutScreen from "./LogoutScreen";


const Stack=createNativeStackNavigator();
const Navigation=()=>{

  useEffect(()=>{
    const requestUserPermission=async()=>{
      const authStatus=await messaging().requestPermission();
      const enabled=
      authStatus===messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus===messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        console.log("Notification permission granted.");

        // Get the FCM token
        try {
          const fcmToken = await messaging().getToken();
          if (fcmToken) {
            console.log("FCM Token:", fcmToken); // Log the FCM token
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

    // Handle background and quit state notifications
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    return unsubscribe; // Clean up on unmount
  }, []);
  
    return(
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Auth" component={Auth}/>
            <Stack.Screen name="First" component={First}/>
            <Stack.Screen name="CartScreen" component={CartScreen}/>
            <Stack.Screen name="LogoutScreen" component={LogoutScreen}/>

            </Stack.Navigator>
            
        </NavigationContainer>
        </Provider>
    )
}

export default Navigation;













// import React, { useEffect } from "react";
// import { PermissionsAndroid, Linking, ActivityIndicator } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Splash from "./Splash";
// import Login from "./Login";
// import Auth from "./Auth";
// import First from "./First";
// import CartScreen from "./CartScreen";
// import { Provider } from "react-redux";
// import { store } from "../redux/store/store";
// import LogoutScreen from "./LogoutScreen";

// const Stack = createNativeStackNavigator();
// const NAVIGATION_IDS = ["Splash"]; // Removed "settings"

// function buildDeepLinkFromNotificationData(data) {
//   const navigationId = data?.navigationId;
//   console.log("Notification data:", data);
//   if (!NAVIGATION_IDS.includes(navigationId)) {
//     console.warn('Unverified navigationId', navigationId);
//     return null;
//   }
//   if (navigationId === 'Splash') {
//     return 'myapp://Splash';
//   }
//   return null;
// }

// const linking = {
//   prefixes: ['myapp://'],
//   config: {
//     screens: {
//       Splash: "Splash",
//     }
//   },
//   async getInitialURL() {
//     const url = await Linking.getInitialURL();
//     if (typeof url === 'string') {
//       return url;
//     }
//     const message = await messaging().getInitialNotification();
//     const deeplinkURL = buildDeepLinkFromNotificationData(message?.data);
//     if (typeof deeplinkURL === 'string') {
//       return deeplinkURL;
//     }
//   },
//   subscribe(listener) {
//     const onReceiveURL = ({ url }) => listener(url);

//     const linkingSubscription = Linking.addEventListener('url', onReceiveURL);

//     messaging().setBackgroundMessageHandler(async remoteMessage => {
//       console.log("Message handler in the background", remoteMessage);
//     });

//     const foreground = messaging().onMessage(async remoteMessage => {
//       console.log("A new FCM message Arrived", remoteMessage);
//     });

//     const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
//       const url = buildDeepLinkFromNotificationData(remoteMessage.data);
//       if (typeof url === 'string') {
//         listener(url);
//       }
//     });

//     return () => {
//       console.log('linkingSubscription called >')
//       linkingSubscription.remove();
//       unsubscribe();
//       foreground();
//     };
//   },
// };

// const App = () => {
//   useEffect(() => {
//     const requestUserPermission = async () => {
//       PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//       const authStatus = await messaging().requestPermission();
//       const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//       if (enabled) {
//         console.log('Authorization status', authStatus);
//         const token = await messaging().getToken();
//         console.log('FCM token', token);
//       }
//     };
//     requestUserPermission();
//   }, []);

//   return (
//      <Provider store={store}>
//     <NavigationContainer linking={linking} fallback={<ActivityIndicator animating />}>
//             <Stack.Navigator screenOptions={{headerShown:false}}>
//                  <Stack.Screen name="Splash" component={Splash}/>
//              <Stack.Screen name="Login" component={Login}/>
//            <Stack.Screen name="Auth" component={Auth}/>
//              <Stack.Screen name="First" component={First}/>
//              <Stack.Screen name="CartScreen" component={CartScreen}/>
//              {/* <Stack.Screen name="LogoutScreen" component={LogoutScreen}/> */}

//              </Stack.Navigator>
            
//          </NavigationContainer>
//          </Provider>
//      )
  
// };

// export default App;
