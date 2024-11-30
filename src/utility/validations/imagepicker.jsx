import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const pickImage = (fromCamera = false) => {
  return new Promise((resolve, reject) => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    const callback = (response) => {
      if (response.didCancel) {
       // reject('User cancelled image picker');
      } else if (response.errorCode) {
        reject(`Image Picker Error: ${response.errorMessage}`);
      } else {
        resolve(response.assets[0]);
      }
    };

    if (fromCamera) {
      launchCamera(options, callback);
    } else {
      launchImageLibrary(options, callback);
    }
  });
};

export default pickImage;
