import React  from "react";
import { SafeAreaView,Button } from 'react-native';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";

const Home=()=>{
   
            GoogleSignin.configure({
                webClientId: '1084907551947-l6vqkqcg2qas0em79roovbhhqvua3fkm.apps.googleusercontent.com',
              });
      
              async function onGoogleButtonPress() {
                    // Check if your device supports Google Play
                    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
                    // Get the users ID token
                    const { idToken } = await GoogleSignin.signIn();
            
                    // Create a Google credential with the token
                    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            
                    // Sign-in the user with the credential
                    return auth().signInWithCredential(googleCredential);
                    
                }
            
            
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
           <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
        </SafeAreaView>
    )
}

export default Home;