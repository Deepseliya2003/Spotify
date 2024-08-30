



// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { AddtoCartAction } from '../src/redux/actions/AddtoCartAction';
// import { useDispatch, useSelector } from 'react-redux';

// const ProductCart = ({ item }) => {
//   const cartData = useSelector(state => state.AddToCart.cartData);
//   const dispatch = useDispatch();

//   // Check if the item is already in the cart

//   // Handle Add to Cart action
//   const handleAddToCart = () => {
//     console.log('Item added to cart:', item.title);
//     dispatch(AddtoCartAction(item, cartData));
//   };


//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: item.thumbnail }} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//       <Text style={styles.price}>${item.price}</Text>
//       <Text style={styles.discount}>Discount: {item.discountPercentage}%</Text>
//       <Text style={styles.rating}>Rating: {item.rating}</Text>
//       <Text style={styles.stock}>Stock: {item.stock}</Text>
//       <Text style={styles.brand}>Brand: {item.brand}</Text>
//       <Text style={styles.category}>Category: {item.category}</Text>
//       <TouchableOpacity
//         style={styles.addToCartButton}
//         onPress={handleAddToCart}>
//         <Text style={styles.addToCartButtonText}>
//           Add to Cart
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//     marginVertical: 5,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     borderRadius: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   description: {
//     fontSize: 14,
//     marginTop: 5,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   discount: {
//     fontSize: 14,
//     marginTop: 5,
//   },
//   rating: {
//     fontSize: 14,
//     marginTop: 5,
//   },
//   stock: {
//     fontSize: 14,
//     marginTop: 5,
//   },
//   brand: {
//     fontSize: 14,
//     marginTop: 5,
//   },
//   category: {
//     fontSize: 14,
//     marginTop: 5,
//   },
//   addToCartButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   addToCartButtonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });


// export default ProductCart;





// src/components/ProductCart.js

// src/Component/ProductCart.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCartAction } from '../src/redux/actions/AddtoCartAction';
import { RemovetoCartAction } from '../src/redux/actions/RemovetoCartAction';

const ProductCart = ({ item }) => {
  const cartData = useSelector(state => state.cartData.cartData); // Ensure correct path
  const dispatch = useDispatch();

  // Check if the item is already in the cart
  const isInCart = cartData && Array.isArray(cartData) && cartData.some(cartItem => cartItem.id === item.id);

  // Handle Add to Cart action
  const handleAddToCart = () => {
    console.log('Item added to cart:', item.title);
    dispatch(AddtoCartAction(item, cartData));
  };

  // Handle Remove from Cart action
  const handleRemoveFromCart = () => {
    console.log('Item removed from cart:', item.title);
    dispatch(RemovetoCartAction(item.id, cartData));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.discount}>Discount: {item.discountPercentage}%</Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
      <Text style={styles.stock}>Stock: {item.stock}</Text>
      <Text style={styles.brand}>Brand: {item.brand}</Text>
      <Text style={styles.category}>Category: {item.category}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={isInCart ? handleRemoveFromCart : handleAddToCart}>
        <Text style={styles.addToCartButtonText}>
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  discount: {
    fontSize: 14,
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    marginTop: 5,
  },
  stock: {
    fontSize: 14,
    marginTop: 5,
  },
  brand: {
    fontSize: 14,
    marginTop: 5,
  },
  category: {
    fontSize: 14,
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductCart;
