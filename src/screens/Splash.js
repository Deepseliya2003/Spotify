import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

const Splash = ({navigation}) => {

useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Login')  
    },1000)
},[])

    return (
        <View style={styles.mainview} >

                <Image source={require('../../Component/assets/images/images.png')} style={styles.image} resizeMode="contain" />
                <View>
                    <Text style={styles.text2} >Authentication</Text>

                </View>

        </View>
    )
}

const styles=StyleSheet.create({
    mainview:{flex: 1, backgroundColor: '#53b175', justifyContent: 'center',alignItems:'center' },
    viewimage:{alignItems: 'center', justifyContent: 'center', flexDirection: 'row',gap:10},
    image:{  width: 200},
    text1:{ fontSize: 50, color: 'white'},
    text2:{letterSpacing: 3, color: 'white'}
})

export default Splash;