import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import User from "./User";
import Second from "./Second";

const Home = () => {
    const [selectTab, setSelectTab] = useState(0);

    return (
        <View style={styles.container}>
            {selectTab === 0 ? <User/>:<Second/>}

            <View style={styles.bottomtab}>
                <TouchableOpacity style={styles.tab} onPress={() => setSelectTab(0)}>
                    <Image source={require('../../Component/assets/images/group.png')} 
                    style={[styles.tabIcon,{tintColor:selectTab==0?"white":"gray"}]}
                     />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setSelectTab(1)}>
                    <Image source={require('../../Component/assets/images/setting.png')} 
                    style={[styles.tabIcon,{tintColor:selectTab==1?"white":"gray"}]}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    bottomtab: { 
        position: 'absolute', bottom: 0, width: '100%', height: 100, backgroundColor: 'skyblue', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' 
    },
    tab: { width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' },
    tabIcon: { width: 30, height: 30 }
});

export default Home;






