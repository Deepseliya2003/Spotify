import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ProductCart from '../../Component/ProductCart';
import { data } from '../../Component/dummydata';

const First = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          padding: 15,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View />
        {/* <Button title='Ok' onPress={navigation.navigate('LogoutScreen')}  /> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CartScreen');
          }}>
          <Text style={{fontSize:20}}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LogoutScreen');
          }}>
          <Text style={{fontSize:20}}>Logout</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <ProductCart item={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

export default First;
