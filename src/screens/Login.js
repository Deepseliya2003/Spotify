import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Localnotification from '../../LocalNotification';
import NETINFO from '@react-native-community/netinfo';
import { GoogleSignin, statusCodes,  } from '@react-native-google-signin/google-signin';


const Login = () => {
  const webClientId = "1084907551947-l6vqkqcg2qas0em79roovbhhqvua3fkm.apps.googleusercontent.com"; 

    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: webClientId,
        })
    },[])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isConnected,setIsConnected]=useState(false);

  
  useEffect(()=>{
    const unsubscribe = NETINFO.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected);

    });
    return()=>{
    unsubscribe();

    }
  })

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
        Localnotification();
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert('Invalid Credentials');
        setEmail('');
        setPassword('')
      });
  };


  //sign in with google

  const googleLogin = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userinfo", userInfo);

    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log(error)
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log(error)
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log(error)
        } else {
        }
    }
  };

  return (
    <><View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none" />
      {!isValidEmail && email.length > 0 && (
        <Text style={styles.errorText}>Invalid email format</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry />
      {!isValidPassword && password.length > 0 && (
        <Text style={styles.errorText}>Password must be at least 6 characters</Text>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
        <Text style={styles.createAccountText}>
          Don't have an account? Create one here
        </Text>
      </TouchableOpacity>
      <View style={{gap:20}}>
      <TouchableOpacity
        style={[
          styles.button,
          !(isValidEmail && isValidPassword) && styles.buttonDisabled,
        ]}
        onPress={() => (userLogin())}
        disabled={!(isValidEmail && isValidPassword)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => (googleLogin())}
      >
        <Text style={styles.buttonText}>Continue With Google</Text>
      </TouchableOpacity>
      </View>


    </View>
    <View style={{
      position: 'absolute',
      bottom: 0, width: '100%',
      justifyContent: 'center', alignItems: 'center',
      backgroundColor: isConnected ? 'green' : 'black'
    }}>
        <Text style={{ color: '#fff' }}>{isConnected ? 'Back online' : 'No Internet Connected'}</Text>

      </View>
      </>

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


