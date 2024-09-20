// import React from "react";
// import { View, StyleSheet } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


// const Setting = () => {
//     return (
//         <View style={styles.container}>
//             <MapView
//                 provider={PROVIDER_GOOGLE}
//                 style={styles.map}
//               region={{
//                 latitude: 8.4095,
//                 longitude: 115.1889,
//                 latitudeDelta: 0.1,
//                 longitudeDelta: 0.25,
//               }}
//             >
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
// });

// export default Setting;


// ***********************custom multipale marker**************************************************************


// import React, { useRef, useState } from "react";
// import { StyleSheet, Text,Image,View } from 'react-native';
// import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";


// const Setting =()=>{
//     const mapRef=useRef(null);
//     const [origin,setOrigin]=useState();
//     const [destination,setDestination]=useState();
//     const [markerList,setMarkerList]=useState([
       
//         {
//             id: 1,
//             latitude: 23.0225, // Latitude for Ahmedabad
//             longitude: 72.5714, // Longitude for Ahmedabad
//             title: "Ahmedabad City Center",
//             description: "This is Ahmedabad City Center",
//           },
//           {
//             id: 2,
//             latitude: 21.1702, // Latitude for Surat
//             longitude: 72.8311, // Longitude for Surat
//             title: "Surat City Center",
//             description: "This is Surat City Center",
//           },
//           {
//             id: 3,
//             latitude: 22.3039, // Latitude for Surat
//             longitude:70.8022, // Longitude for Surat
//             title: "Rajkot City Center",
//             description: "This is Rajkot City Center",
//           }, 

//     ])

//     const MyCustomMarkerView=()=>{
//         return(
//            <Image
//            style={{width:50,height:50}}
//            source={require('../Component/assets/images/car.png')}
//            />
//         )
//     }


//     const MyCustomCalloutView=()=>{
//         return(
//          <View>
//             <Text>MyCustonColloutView</Text>
//          </View>
//         )
//     }
//     return(
//         <View style={styles.container}>
//             <MapView
//             provider={PROVIDER_GOOGLE}
//             style={styles.map}
//             region={{
//                 latitude: 22.3511148, // Latitude for the center of India
//                 longitude: 78.6677428, // Longitude for the center of India
//                 latitudeDelta: 20, // Wide enough to cover most of India
//                 longitudeDelta: 20, // Wide enough to cover most of India
//               }}
//            >
//                 <Marker
//                coordinate={{
//                 latitude: 19.0760, // Latitude for Surat
//                 longitude: 72.8777,
//               }}>
//                     <MyCustomMarkerView/>
//                     <Callout style={{width:300,height:100,backgroundColor:'white'}}>
//                         <MyCustomCalloutView/>
//                     </Callout>

//                 </Marker>
//                 {
//                     markerList.map(marker=>{
//                         return(
//                             <Marker
//                             key={marker.id}
//                             coordinate={{
//                                 latitude:marker.latitude,
//                                 longitude:marker.longitude
//                             }}
//                             title={marker.title}
//                             description={marker.description}
//                             />
//                         )
//                     })
//                 }

//             </MapView>

//         </View>


//     )
// }

// const styles=StyleSheet.create({
//     container:{
//         ...StyleSheet.absoluteFillObject,
//         flex:1,
//         justifyContent:'flex-end',
//         alignItems:'center'
//     },
//     map:{
//         ...StyleSheet.absoluteFillObject
//     }
// })

// export default Setting;







// import React, { useRef, useState } from "react";
// import { StyleSheet,View } from 'react-native';
// import MapView, {  Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


// const Setting =()=>{
//     const mapRef=useRef(null);
//     const [origin,setOrigin]=useState();
//     const [destination,setDestination]=useState();
   
//     async function moveToLocation(latitude,longitude) {
//         mapRef.current.animateToRegion(
//             {
//                 latitude,
//                 longitude,
//                 latitudeDelta:0.015,
//                 longitudeDelta:0.0121
//             },
//         );
//     }
//     return(
//         <View style={styles.container}>
//             <View style={{zIndex:1,flex:0.5,flexDirection:'row',marginHorizontal:10,marginVertical:5}}>
//                 <View style={{flex:0.5}}>
//                 <GooglePlacesAutocomplete
//                 fetchDetails={true}
//                 placeholder="Origin"
//                 onpress={(data, details = null)=>{
//                     let originCordinates={
//                         latitude:details?.geometry?.location.lat,
//                         longitude:details?.geometry?.location.lng
//                     }
//                     setOrigin(originCordinates)
//                     moveToLocation(originCordinates);
//                 }}
//                 query={{
//                     key:"AIzaSyBv3CaU3VE_JPfZyiX_XINxrno9nBnHivA",
//                     language:'en'
//                 }}
//                 onFail={error=>console.log(error)}
//                 />
//                 </View>
//                 <View style={{flex:0.5,marginLeft:6}}>
//                 <GooglePlacesAutocomplete
//                 fetchDetails={true}
//                 placeholder="Destination"
//                 onpress={(data,details=null)=>{
//                     let destinationCordinated={
//                         latitude:details?.geometry?.location.lat,
//                         longitude:details?.geometry?.location.lng
//                     }
//                     setDestination(destinationCordinated)
//                     moveToLocation( destinationCordinated);
//                 }}
//                 query={{
//                     key:"AIzaSyBv3CaU3VE_JPfZyiX_XINxrno9nBnHivA",
//                     language:'en'
//                 }}
//                 onFail={error=>console.log(error)}
//                 />
//                 </View>
//             </View>
//             <MapView
//             ref={mapRef}
//             provider={PROVIDER_GOOGLE}
//             style={styles.map}
//                 region={{
//                  latitude: 24.842865, 
//                  longitude: 67.044405,
//                 latitudeDelta: 0.1, 
//                 longitudeDelta: 0.1, 
//             }}>
//                 {origin !== undefined ? <Marker coordinate={origin}></Marker>:null}
//                 {destination !== undefined ? <Marker coordinate={destination}></Marker>:null}


//                     {origin !=undefined && destination!=undefined ?   
//                     <MapViewDirections
//                     origin={origin}
//                     destination={destination}
//                     apikey="AIzaSyBv3CaU3VE_JPfZyiX_XINxrno9nBnHivA"
//                     />:null}

//             </MapView>

//         </View>

    
//     )
// }

// const styles=StyleSheet.create({
//     container:{
//         ...StyleSheet.absoluteFillObject,
//         flex:1,
       
//     },
//     map:{
//         ...StyleSheet.absoluteFillObject,
//         zIndex:0,
//     }
// })

// export default Setting;









import React, { useState } from "react";
import {StyleSheet, Text,View} from 'react-native';
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const Setting=()=>{
    const[state,setState]=useState({
        pickupCords:{
            latitude:23.0225,
            longitude:72.5714,
            latitudeDelta:20,
            longitudeDelta:20
        },
        droplocationCors:{
            latitude:21.1702,
            longitude:72.8311,
            latitudeDelta:20,
            longitudeDelta:20
        }
    })

    const {pickupCords,droplocationCors} = state

    return(
        <View style={{flex:1}}>
            <MapView
            style={StyleSheet.absoluteFill}
            initialRegion={pickupCords}
            >
                <Marker coordinate={pickupCords}/>
                <Marker coordinate={droplocationCors}/>
                <MapViewDirections
                origin={pickupCords}
                destination={droplocationCors}
                apikey="AIzaSyBv3CaU3VE_JPfZyiX_XINxrno9nBnHiv"
                strokeWidth={5}
                strokeColor="hotpink"
                />

                </MapView>

        </View>
    )
}

export default Setting;
