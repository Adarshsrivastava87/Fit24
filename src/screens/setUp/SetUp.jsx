import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from "react-native"
import Button from "../../components/button/Button"
import { StatusBarWrapper } from "../../components/statusBarWrapper/StatusBarWrapper"

const SetUp = ({ navigation }) => {

    const handleNext = () => {
        navigation.navigate('SetGender')
    }

    return (
        <StatusBarWrapper backgroundColor='#002D63' barStyle='light-content'>
        <View style={styles.container} >
            <View style={styles.headerView} >
                <Text style={styles.headerText} >
                    Set Up Your Account
                </Text>
            </View>
            <Image source={require('../../assets/images/setUpImage.png')}
                style={styles.mainImageContainer} />
            <View style={{ marginTop: 20, paddingHorizontal: 20 }} >
                <Text style={styles.centralText} >
                    Consistency Is {'\n'} the Key To progress.{'\n'} Don't Give Up!
                </Text>
            </View>
            <View style={styles.buttonContainer} >
            <Button label='Next' onPress={handleNext} width={178} />
            </View>
        </View>
        </StatusBarWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002D63',
    },
    headerView: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    headerText: {
        color: '#20BF55',
        fontSize: 20,
        fontWeight: 'bold'
    },
    mainImageContainer: {
        width: Dimensions.get('window').width,
        height: '50%',
        resizeMode: 'cover',
        marginTop: 20
    },
    centralText: {
        color: '#E6E7E8',
        fontSize: 30,
        fontWeight: 'medium',
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center'
    }
})

export default SetUp