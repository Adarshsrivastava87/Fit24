import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Modal } from 'react-native';
import CustomStepper from '../../utility/stepper';
import AddToCartComponent from './addTocartComponent';

const ProductDescriptionScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} resizeMode='cover'/>
        <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <Text style={styles.price}>${product.price}</Text>
      <AddToCartComponent/>
      </View>
        
   
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  productImage: {
    width: "100%",
    height:"80%",
   // borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProductDescriptionScreen;
