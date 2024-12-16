import { useContext, useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Button from "../../components/button/Button"
import { StatusBarWrapper } from "../../components/statusBarWrapper/StatusBarWrapper"


const SetGender = ({navigation}) => {
  const { setUpDetails, setSetUpDetails } = useContext();
    

    const [gender, SetGender] = useState()

    const handleContinue = () => {
        setSetUpDetails({...setUpDetails, ...{gender: gender}})
        navigation.navigate('SetAge')
    }

    return (
        <StatusBarWrapper backgroundColor='#002D63' barStyle='light-content'>
            <View style={styles.container} >
                <View style={styles.headerView} >
                    <Text style={styles.headerText} >
                        Set Gender
                    </Text>
                </View>
                <View style={styles.pageContainer} >
                    <Text style={styles.centerHeaderText} >
                        What's Your Gender
                    </Text>
                    <TouchableOpacity onPress={() => SetGender('male')}
                        style={[styles.genderImageContainer, gender == 'male' ? styles.genderImageSelectedContainer : null]}>
                        <Image style={styles.genderImage}
                            source={gender == 'male' ?
                                require('../../assets/icons/maleIconBlack.png')
                                : require('../../assets/icons/maleIconWhite.png')} />
                    </TouchableOpacity>
                    <Text style={styles.genderText} >
                        Male
                    </Text>
                    <TouchableOpacity onPress={() => SetGender('female')}
                        style={[styles.genderImageContainer, gender == 'female' ? styles.genderImageSelectedContainer : null]}>
                        <Image style={styles.genderImage}
                            source={gender == 'female' ?
                                require('../../assets/icons/femaleIconBlack.png')
                                : require('../../assets/icons/femaleIconWhite.png')} />
                        <Image />
                    </TouchableOpacity>
                    <Text style={styles.genderText} >
                        Female
                    </Text>
                    <Button label='Continue' onPress={handleContinue} width={178} />
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
        marginTop: 10
    },
    headerText: {
        color: '#20BF55',
        fontSize: 20,
        fontWeight: 'bold'
    },
    pageContainer: {
        flex: 1,
        backgroundColor: '#002D63',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerHeaderText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40
    },
    genderImageContainer: {
        width: 162,
        height: 162,
        backgroundColor: 'transparent',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    genderImageSelectedContainer: {
        backgroundColor: '#20BF55'
    },
    genderImage: {
        width: 64,
        height: 64,
        resizeMode: 'contain'
    },
    genderText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    }
})

export default SetGender