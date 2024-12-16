import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomStepper from '../../utility/stepper';
import ColorCode from '../../utils/ColorConst';


const AddToCartComponent = (props) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const data = props;
  const handleValueChange = (value) => {
    console.log('Stepper Value:', value);
    if(value < 1){
      setAddedToCart(false)
    }
  };

  return (
    <View style={styles.container}>
      {addedToCart ? (
        <CustomStepper
          min={data.qnt}
          max={20}
          step={1}
          initialValue={1}
          onValueChange={handleValueChange}
        />
      ) : (
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => setAddedToCart(true)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: ColorCode.bgColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AddToCartComponent;
