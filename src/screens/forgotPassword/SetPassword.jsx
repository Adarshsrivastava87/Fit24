import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import Button from "../../components/button/Button"
import { StatusBarWrapper } from "../../components/statusBarWrapper/StatusBarWrapper"

const SetPassword = () => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleResetPassword = () => {
        console.log('Reset Password')
    }

    return(
        <StatusBarWrapper backgroundColor='#002D63' barStyle='light-content' >
        <View style={styles.container} >
            <View style={styles.headerView} >
                <Text style={styles.forgotPasswordHeader} >
                    Forgot Password
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center', alignItems: 'center', height: '100%'}} >
                <Text style={styles.subText} >
                    Set New Password
                </Text>
                <Text style={styles.subHeaderText} >
                    Password
                </Text>
                <TextInput
                    placeholder="********"
                    style={styles.inputBox}
                    keyboardType='default'
                    value={password}
                    onChangeText={(text) => setPassword(text)} />
                <Text style={styles.subHeaderText} >
                    Confirm Password
                </Text>
                <TextInput
                    placeholder="********"
                    style={styles.inputBox}
                    keyboardType='default'
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)} />
                <Button label='Reset Password' onPress={handleResetPassword} width={191} />
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

export default SetPassword