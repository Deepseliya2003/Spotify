
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileno, setMobileNo] = useState('');

  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidMobileNo, setIsValidMobileNo] = useState(false);



  const navigation = useNavigation();

  const validateName = (name) => {
    const nameRegex=/^[a-zA-Z ]{2,40}$/;
    return nameRegex.test(name) 
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; 
  };
  
  const validateMobileNo = (mobileno) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobileno)
  };

  
  

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login');
        
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
       
        console.error(error);
      });
  };
  const handleNameChange = (text) => {
    setName(text);
    setIsValidName(validateName(text));
  };
  
  const handleMobileNoChange = (text) => {
    setMobileNo(text);
    setIsValidMobileNo(validateMobileNo(text));
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    setIsValidEmail(validateEmail(text));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsValidPassword(validatePassword(text));
  };


  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}
        keyboardType="name"
        autoCapitalize="none"
      />
       {!isValidName && name.length > 0 && (
        <Text style={styles.errorText}>Invalid name format</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileno}
        onChangeText={handleMobileNoChange}
        keyboardType="numeric"
        autoCapitalize="none"
      />
       {!isValidMobileNo && mobileno.length > 0 && (
        <Text style={styles.errorText}>Invalid MobileNo format</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {!isValidEmail && email.length > 0 && (
        <Text style={styles.errorText}>Invalid email format</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      {!isValidPassword && password.length > 0 && (
        <Text style={styles.errorText}>Password must be at least 6 characters</Text>
      )}

      <TouchableOpacity
        style={[
          styles.button,
          !(isValidEmail && isValidPassword && isValidMobileNo && isValidName) && styles.buttonDisabled,
        ]}
        onPress={createUser}
        disabled={!(isValidName && isValidMobileNo && isValidEmail && isValidPassword)}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    
    
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:30
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Auth;







// import React, { useEffect, useState } from "react";
// import { View,Text } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';
// const Second=()=>{
//     const [isConnected,setIsConnected]=useState(false);

//     useEffect(()=>{
//         const unsubscribe = NetInfo.addEventListener(state => {
//             console.log("Connection type", state.type);
//             console.log("Is connected?", state.isConnected);
//             setIsConnected(state.isConnected);
//           });
//           return()=>{
//           unsubscribe();
//           }
//     })
//     return(
//         <View style={{flex:1}}>
//           <View style={{position:'absolute',
//             bottom:0,height:50,width:'100%',
//             justifyContent:'center',alignItems:'center',
//             backgroundColor:isConnected?'green':'black'}}>
//           <Text style={{color:'#fff'}}>{isConnected?'Back online': 'No Internet Connected'}</Text>

//           </View>
//         </View>
//     )
// }
// export default Second;