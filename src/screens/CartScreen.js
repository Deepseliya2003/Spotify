import {View, Text, FlatList, Button} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductCart from '../../Component/ProductCart';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const data = useSelector(state => state.cartData.cartData);
  const navigation=useNavigation();
  return (
    <View>
      < View style={{backgroundColor:'skyblue'}}><Text style={{textAlign:'center',fontSize:20}}>CartScreen</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCart item={item} />}
        keyExtractor={item => item.id.toString()}
         />
    </View>
  );
};

export default CartScreen;
