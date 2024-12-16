import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import CustomStepper from '../../utility/stepper';
import AddToCartComponent from './addTocartComponent';
import { useNavigation } from '@react-navigation/native';

const ProductCard = (product ) => {
  const scaleAnim = new Animated.Value(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigation = useNavigation()
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleAnim }],
  };

  return (
    <Animated.View style={[styles.cardContainer, animatedStyle]}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() =>navigation.navigate("ProductDescription", { product:product })}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Image source={{ uri: product.image }} style={styles.productImage} resizeMode="cover" />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price}</Text>
            {/* <TouchableOpacity style={styles.buyButton} onPress={() => console.log('Buy Now!')}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity> */}
            <AddToCartComponent data={product}/>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    width:"45%",
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: 'hidden', // Ensures rounded corners
  },
  touchable: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  contentContainer: {
   padding:5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buyButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductCard;
