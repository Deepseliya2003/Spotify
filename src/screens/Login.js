import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const navigation = useNavigation();

  useEffect(()=>{
    setEmail('');
    setPassword('');
    setIsValidEmail(false);
    setIsValidPassword(false);
  },[])

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function
  const validatePassword = (password) => {
    return password.length >= 6; // Example: minimum 6 characters
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsValidEmail(validateEmail(text));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsValidPassword(validatePassword(text));
  };

  

  const userLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User logged in!');
        setEmail(''); 
        setPassword('');
        navigation.navigate('First')
      })
      .catch((error) => {
        Alert.alert('Invalid Credetials');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
        <Text style={styles.createAccountText}>
          Don't have an account? Create one here
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          !(isValidEmail && isValidPassword) && styles.buttonDisabled,
        ]}
        onPress={userLogin}
        disabled={!(isValidEmail && isValidPassword)}
      >
        <Text style={styles.buttonText}>Log in</Text>
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
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  createAccountText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#007BFF',
    padding: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Login;




// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import messaging from '@react-native-firebase/messaging';
// import { useNavigation } from '@react-navigation/native';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isValidEmail, setIsValidEmail] = useState(false);
//   const [isValidPassword, setIsValidPassword] = useState(false);

//   const navigation = useNavigation();

//   useEffect(() => {
//     // Request permission for push notifications (for iOS)
//     requestUserPermission();
//   }, []);

//   const requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log('Authorization status:', authStatus);
//       getFcmToken();
//     }
//   };

//   const getFcmToken = async () => {
//     const fcmToken = await messaging().getToken();
//     if (fcmToken) {
//       console.log('FCM Token:', fcmToken);
//       // Save the token to your backend or local storage
//     } else {
//       console.warn('Failed to get FCM token');
//     }
//   };

//   // Email validation function
//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   // Password validation function
//   const validatePassword = (password) => password.length >= 6;

//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setIsValidEmail(validateEmail(text));
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setIsValidPassword(validatePassword(text));
//   };

//   const userLogin = () => {
//     auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         Alert.alert('User logged in!');
//         navigation.navigate('First');

//         // Send local notification after successful login
//         sendPushNotification();
//       })
//       .catch((error) => {
//         console.warn('Invalid credentials', error);
//       });
//   };

//   const sendPushNotification = () => {
//     const message = {
//       notification: {
//         title: 'Welcome!',
//         body: 'You have successfully logged in.',
//       },
//       android: {
//         priority: 'high',
//       },
//       data: {
//         extraInfo: 'Login successful',
//       },
//     };

//     messaging()
//       .sendMessage(message)
//       .then(() => console.log('Push notification sent'))
//       .catch((error) => console.warn('Error sending notification:', error));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={handleEmailChange}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       {!isValidEmail && email.length > 0 && (
//         <Text style={styles.errorText}>Invalid email format</Text>
//       )}
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={handlePasswordChange}
//         secureTextEntry
//       />
//       {!isValidPassword && password.length > 0 && (
//         <Text style={styles.errorText}>Password must be at least 6 characters</Text>
//       )}
//       <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
//         <Text style={styles.createAccountText}>
//           Don't have an account? Create one here
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           styles.button,
//           !(isValidEmail && isValidPassword) && styles.buttonDisabled,
//         ]}
//         onPress={userLogin}
//         disabled={!(isValidEmail && isValidPassword)}
//       >
//         <Text style={styles.buttonText}>Log in</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginBottom: 10,
//   },
//   createAccountText: {
//     marginTop: 15,
//     textAlign: 'center',
//     color: '#007BFF',
//     padding: 20,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonDisabled: {
//     backgroundColor: '#ccc',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default Login;
