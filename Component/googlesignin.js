// import React from "react";
// import { TouchableOpacity, View,Text } from 'react-native';
// import { Home } from "./Home";

// const googlesignin=()=>{
      
//     const facebookcredential=auth.FacebookAuthProvider.credential(
//         data.accessToken
//     );
//     return auth().signinwithCredential(facebookcredential)


//     return(
//       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//          <TouchableOpacity onPress={()=>Home()}>
//             <Text style={{color:'white',backgroundColor:'blue',padding:8}}>Sign in with Google</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={()=>Home()}>
//             <Text style={{color:'white',backgroundColor:'blue',padding:8}}>Sign in with Facebook</Text>
//             </TouchableOpacity>
//       </View>
//     )
// }

// export default googlesignin;


import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Home } from './Home';

export default function googlesignin() {


  async function signInWithGoogle() {
    Home().then(data => {
      console.log('user data=>', data);
    });
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     
      <TouchableOpacity onPress={() => signInWithGoogle()}>
        <Text
          style={{
            color: 'white',
            backgroundColor: 'green',
            padding: 8,
            marginTop: 10,
          }}>
          SignIn With Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}
