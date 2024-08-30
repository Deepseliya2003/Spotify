import React from "react";
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const Setting = () => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
            //   region={{
            //     latitude: 8.4095,
            //     longitude: 115.1889,
            //     latitudeDelta: 0.1,
            //     longitudeDelta: 0.25,
            //   }}
            >
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Setting;





// import React from "react";
// import { View, StyleSheet,Image,Text } from 'react-native';
// import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';


// const Setting = () => {
//     return (
//         <View style={styles.container}>
//             <MapView
//                 provider={PROVIDER_GOOGLE}
//                 style={styles.map}
//               region={{
//                 latitude: 37.78825,
//                 longitude: -122.4324,
//                 latitudeDelta: 0.015,
//                 longitudeDelta: 0.0121,
//               }}
//             >
//                 <Marker
//                 coordinate={{
//                     latitude:37.78825,
//                     longitude:-122.4324
//                 }}
//                 image={require('../Component/assets/images/marker.png')}
//                 title="Test title"
//                 description="this is the test description"
//                 >
//                     <Callout tooltip>
//                         <View>
//                         <View style={styles.bubble}>
//                           <Text>Favourite Resturent</Text>
//                           <Image source={require('../Component/assets/images/image.png')} style={styles.image}/>
//                           </View>

//                         <View style={styles.arrowBorder}/>
//                         <View style={styles.arrow}/>
//                         </View>

//                     </Callout>
//                     </Marker>
//             </MapView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
//     bubble:{
//         flexDirection:"column",
//         alignSelf:"flex-start",
//         backgroundColor:'#fff',
//         borderRadius:6,
//         borderColor:"#ccc",
//         borderWidth:0.5,
//         padding:15,
//         width:150,
//     },
//     arrow:{
//         backgroundColor:"transperent",
//         borderColor:"transperent",
//         borderTopColor:"#fff",
//         borderWidth:16,
//         alignSelf:'center',
//         marginTop:-32
//     },
//     arrowBorder:{
//         backgroundColor:"transperent",
//         borderColor:"transperent",
//         borderTopColor:"#007a87",
//         borderWidth:16,
//         alignSelf:'center',
//         marginTop:-0.5
//     },
//     name:{
//         fontSize:16,
//         marginBottom:5,
//     },
//     image:{
//         width:120,
//         height:80,
//     }
// });

// export default Setting;