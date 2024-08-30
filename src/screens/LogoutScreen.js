import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";

const LogoutScreen = () => {
    const navigation = useNavigation();

    const Logout = () => {
        auth()
            .signOut()
            .then(() => {
                Alert.alert("User signed out!");
                navigation.navigate('Login');
            })
            .catch(error => {
                console.log("Error:", error);
                Alert.alert("Unable to logout");
            });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={Logout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    button: {
        backgroundColor: '#FF5733',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LogoutScreen;
