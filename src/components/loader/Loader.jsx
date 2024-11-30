import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const Loader = ({ loading, size = 'large', color = '#20BF55' }) => {

    if (!loading) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
            <Text style={styles.message}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#002D63',
    },
    message: {
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
    },
});

export default Loader;
