/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Image, ScrollView, Alert } from 'react-native';
import ContinueButton from './Button';
import ColorCode from '../../utils/ColorConst';
import AppBar from './AppBar';
import pickImage from '../../utility/validations/imagepicker';
import { AppContext } from '../../context_api/AppContext';
import { updateUser } from '../../api/authApi';

export default function FillProfile({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  //const {userDetails, setUpDetails} = useContext(AppContext)

  const handleSelectImage = async (fromCamera) => {
    try {
      const image = await pickImage(fromCamera);
      setImageUri({ uri: image.uri });
      setModalVisible(false); // Close modal after picking image
    } catch (error) {
      Alert.alert('Error', error);
    }
  };

  const handleNavigate = async () => {
   // updateUser(setUpDetails);
    navigation.navigate("HomeScreen")
  }

  const ShowModal = ({modalVisible, callback}) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => callback()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => handleSelectImage(false)}>
              <Text>Select Image from Library</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectImage(true)}>
              <Text>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => callback()}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{flex:1}}>
      <AppBar onBackPress={() => {navigation.goBack()}} title={"Back"} />
      <ShowModal modalVisible={modalVisible} callback={() => setModalVisible(false)} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Fill Your Profile</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View style={styles.profileImageContainer}>
            <Image
              source={imageUri ? { uri: imageUri.uri } : require("../../assets/images/profile.png")}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon} onPress={() => setModalVisible(true)}>
              <Text style={styles.editIconText}>✎</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Full name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Nickname</Text>
            <TextInput style={styles.input} placeholder='nickname' />
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput style={styles.input} placeholder="+91" />
          </View>
          <ContinueButton onPress={handleNavigate} title={"Start"} buttonStyle={{backgroundColor:ColorCode.green, borderColor:ColorCode.green, margin:10}} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002d6b',
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'center',
  },
  profileImageContainer: {
    width: '100%',
    backgroundColor: ColorCode.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    position: 'relative',
    top: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "static",
    left: 35,
    bottom: 30,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  editIconText: {
    fontSize: 16,
    color: '#002d6b',
  },
  form: {
    width: '100%',
    height: "auto",
    paddingLeft: 20,
    paddingRight: 20,
  },
  label: {
    color: ColorCode.green,
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: '400',
  },
  startButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    height: 200, // Set the height of the modal to 200
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 10,
  },
});
