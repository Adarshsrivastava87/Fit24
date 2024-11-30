import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, BackHandler, Dimensions, ImageBackground } from "react-native";
import Button from "../../components/button/Button";

const OnboardingB = ({ navigation }) => {

    const pageData = [
        {
            id: 0,
            image: require('../../assets/images/onboardingB.png'),
            text: 'Start Your Journey Towards A\nMore Active Lifestyle'
        },
        {
            id: 1,
            image: require('../../assets/images/onboardingC.png'),
            text: 'Find Nutrition Tips That Fit\nYour Lifestyle'
        },
        {
            id: 2,
            image: require('../../assets/images/onboardingD.png'),
            text: 'A Community For You,\nChallenge Yourself'
        },
    ]

    //used to keep note of array index
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {

        const disableBackButton = () => {
            return true; // Disable back button
        };

        const focusListener = navigation.addListener('focus', () => {
            BackHandler.addEventListener('hardwareBackPress', disableBackButton);
        });

        const blurListener = navigation.addListener('blur', () => {
            BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
        });

        return () => {
            focusListener();
            blurListener();
        };
    }, [navigation])


    //function to handle the button press 
    const handleNext = () => {
        if (currentImageIndex < pageData.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1)
        }
        else {
            setOnboardingShown()
        }
    }

    const setOnboardingShown = () => {
        try {
            AsyncStorage.setItem('onboardingShown', 'true')
            navigation.navigate('Login')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={pageData[currentImageIndex].image}>
                <TouchableOpacity style={styles.skipContainer}
                    onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.skipText}>
                        {currentImageIndex < pageData.length - 1 ? 'Skip' : ''}
                    </Text>
                    <Image source={currentImageIndex < pageData.length - 1 && require('../../assets/icons/arrowRightWhite.png')} style={{width:6, height:11, marginLeft: 5}} />
                </TouchableOpacity>
                <View style={styles.centerContainer} >
                    <Text style={styles.centerText}>
                        {pageData[currentImageIndex]?.text}
                    </Text>
                    <Button label='Next' onPress={handleNext} width={178} backgroundColor="rgba(0, 0, 0, 0.6)" />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    skipContainer: {
        marginTop: 10,
        marginLeft: 10,
        width: Dimensions.get('window').width - 40,
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    skipText: {
        fontSize: 18,
        fontWeight: 'medium',
        color: '#E6E7E8',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    centerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
})

export default OnboardingB;