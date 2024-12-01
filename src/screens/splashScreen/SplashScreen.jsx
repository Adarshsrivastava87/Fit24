import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native"

const SplashScreen = ({ navigation }) => {

    const timer = () => {
        setTimeout(async () => {
            try {
                const value = await AsyncStorage.getItem('isOnboard')
                console.log("chck ->",value)
                if (value == true) {
                    navigation.navigate('Login')
                } else {
                   // navigation.navigate('Onboarding')
                    navigation.navigate('Login')
                }
            }
            catch (err) {
                console.log(err)
            }
        }, 2000);
    }

    useEffect(() => {
        timer()

        return () => {
            clearTimeout(timer)
        }
    }, [navigation])

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/fit24Logo.png')}
                style={styles.imageContainer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#002D63'
    },
    imageContainer: {
        height: 79,
        width: 277,
        resizeMode: 'contain'
    }
})

export default SplashScreen;