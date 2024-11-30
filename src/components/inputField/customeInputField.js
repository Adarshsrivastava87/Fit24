import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const InputField = ({ 
    placeholder, 
    value, 
    onChangeText, 
    keyboardType = 'default', 
    secureTextEntry = false, 
    style 
}) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#888"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});

export default InputField;
