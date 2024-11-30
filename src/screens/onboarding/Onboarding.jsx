import { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, BackHandler, Dimensions, ImageBackground } from "react-native";
import Button from "../../components/button/Button";

const Onboarding = ({ navigation }) => {

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

    const handleNext = () => {
        navigation.navigate('OnboardingB')
    }

    return (
        <View style={Styles.container}>
            <ImageBackground style={Styles.image} source={require('../../assets/images/onboardingA.png')}>
                <TouchableOpacity style={Styles.skipContainer}
                    onPress={() => {navigation.navigate('Login') }}>
                    <Text style={Styles.skipText}>
                        Skip
                    </Text>
                </TouchableOpacity>
                <View style={{position:'absolute', bottom: 200, right: Dimensions.get('window').width/3.5}} >
                    <Button label='Get Started' onPress={handleNext} width={165} />
                </View>
            </ImageBackground>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    skipContainer: {
        width: Dimensions.get('window').width - 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    skipText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#828282',
    },
    centerText: {
        fontSize: 16,
        marginBottom: 20,
        color: '#828282',
        textAlign: 'center',
    },
    button: {
        borderRadius: 40,
        height: 56,
        width: 327,
        position: 'absolute',
        bottom: 56,
        backgroundColor: '#0C9BE2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    }
})

export default Onboarding;