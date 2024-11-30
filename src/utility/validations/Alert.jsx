import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
function showAlert(){
    Alert.alert(
      "Coming Soon",
      "this screen will coming soon",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default showAlert;




export const showAlertBox = (title, message, onOk, onCancel) => {
  Alert.alert(
    title || 'Alert', // Default title if not provided
    message || 'Something happened!', // Default message
    [
      {
        text: 'Cancel',
        onPress: onCancel || (() => console.log('Cancel Pressed')),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: onOk || (() => console.log('OK Pressed')),
      },
    ],
    { cancelable: true }
  );
};
