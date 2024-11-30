import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import Button from '../../components/button/Button'
import { StatusBarWrapper } from "../../components/statusBarWrapper/StatusBarWrapper"

const ForgotPassword = ({navigation}) => {

    const [email, setEmail] = useState('')

    const handleContinue = () => {
        console.log('Continue')
        navigation.navigate('SetPassword')
    }

    return (
        <StatusBarWrapper backgroundColor='#002D63' barStyle='light-content' >
            <View style={styles.container} >
                <View style={styles.headerView} >
                    <Text style={styles.forgotPasswordHeader} >
                        Forgot Password
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center', alignItems: 'center', height: '100%'}} >
                    <Text style={styles.middleHeader} >
                        Forgot Password?
                    </Text>
                    <Text style={styles.subText} >
                        Enter your username or email to reset your password
                    </Text>
                    <Text style={styles.subHeaderText} >
                        Username or Email
                    </Text>
                    <TextInput
                        placeholder="example@example.com"
                        style={styles.inputBox}
                        keyboardType='default'
                        value={email}
                        onChangeText={(text) => setEmail(text)} />
                    <Button label='Continue' onPress={handleContinue} width={178} />
                </ScrollView>
            </View>
        </StatusBarWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002D63',
        paddingHorizontal: 20,
    },
    headerView: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    forgotPasswordHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#20BF55'
    },
    middleHeader:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        
    },
    subText: {
        fontSize: 14,
        fontWeight: 'light',
        color: 'white',
        marginTop: 10
    },
    subHeaderText: {
        width: '100%',
        color: 'white',
        fontSize: 18,
        fontWeight: 'medium',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 20
    },
    inputBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: '100%',
        height: 45,
    },
})

export default ForgotPassword