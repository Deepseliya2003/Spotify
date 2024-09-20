// // import React  from "react";
// // import { SafeAreaView,Button } from 'react-native';
// // import { GoogleSignin } from "@react-native-google-signin/google-signin";
// // import { useNavigation } from "@react-navigation/native";

// // const Home=()=>{
   
// //             GoogleSignin.configure({
// //                 webClientId: '1084907551947-l6vqkqcg2qas0em79roovbhhqvua3fkm.apps.googleusercontent.com',
// //               });
      
// //               async function onGoogleButtonPress() {
// //                     // Check if your device supports Google Play
// //                     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
// //                     // Get the users ID token
// //                     const { idToken } = await GoogleSignin.signIn();
            
// //                     // Create a Google credential with the token
// //                     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            
// //                     // Sign-in the user with the credential
// //                     return auth().signInWithCredential(googleCredential);
// //                 }
            
            
// //     return(
// //         <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
// //            <Button
// //       title="Google Sign-In"
// //       onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
// //     />
// //         </SafeAreaView>
// //     )
// // }

// // export default Home;



// import React from "react";
// import { SafeAreaView, Button } from "react-native";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import auth from "@react-native-firebase/auth";

// const Home = () => {
//   GoogleSignin.configure({
//     webClientId: "1084907551947-l6vqkqcg2qas0em79roovbhhqvua3fkm.apps.googleusercontent.com",
//   });

//   async function onGoogleButtonPress() {
//     try {
//       // Check if your device supports Google Play
//       await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

//       // Get the user's ID token
//       const { idToken } = await GoogleSignin.signIn();

//       // Create a Google credential with the token
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//       // Sign-in the user with the credential
//       await auth().signInWithCredential(googleCredential);
//       console.log("Signed in with Google!");
//     } catch (error) {
//       console.error("Error during Google Sign-In: ", error);
//     }
//   }

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
//       <Button title="Google Sign-In" onPress={onGoogleButtonPress} />
//     </SafeAreaView>
//   );
// };

// export default Home;


// import React  from "react";
// import { SafeAreaView,Button } from 'react-native';
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import { useNavigation } from "@react-navigation/native";

// const Home=()=>{
   
//             GoogleSignin.configure({
//                 webClientId: '1084907551947-l6vqkqcg2qas0em79roovbhhqvua3fkm.apps.googleusercontent.com',
//               });
      
//               async function onGoogleButtonPress() {
//                     // Check if your device supports Google Play
//                     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//                     // Get the users ID token
//                     const { idToken } = await GoogleSignin.signIn();
            
//                     // Create a Google credential with the token
//                     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            
//                     // Sign-in the user with the credential
//                     return auth().signInWithCredential(googleCredential);
//                 }
            
            
//     return(
//         <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
//            <Button
//       title="Google Sign-In"
//       onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
//     />
//         </SafeAreaView>
//     )
// }

// export default Home;



// import React from "react";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import auth from "@react-native-firebase/auth";


// export const Home = async() => {
//    try{
//     GoogleSignin.configure({
//         offlineAccess:false,
//         webClientId:"1084907551947-l6vqkqcg2qas0em79roovbhhqvua3fkm.apps.googleusercontent.com",
//         scopes:['profile','email']
//     });
//     await GoogleSignin.hasPlayServices();

//     const userInfo=await GoogleSignin.signIn();
//     const {idToken}=await GoogleSignin.signIn();
//     const googleCredential=auth.GoogleAuthProvider.credential(idToken);
//     auth.signInWithCredential(googleCredential);
//     return userInfo;
//    }catch(error){
//      console.log('=>Google Sign in',error);
//      return null;
//    }

// }


import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";


export const Home = async() => {
   try{
    GoogleSignin.configure({
        offlineAccess:false,
        webClientId:"1084907551947-l6vqkqcg2qas0em79roovbhhqvua3fkm.apps.googleusercontent.com",
        scopes:['profile','email']
    });
    await GoogleSignin.hasPlayServices();

    const userInfo=await GoogleSignin.signIn();
    const {idToken}=await GoogleSignin.signIn();
    const googleCredential=auth.GoogleAuthProvider.credential(idToken);
    auth.signInWithCredential(googleCredential);
    return userInfo;
   }catch(error){
     console.log('=>Google Sign in',error);
     return null;
   }
}

