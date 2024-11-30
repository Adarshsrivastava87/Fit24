import { StyleSheet, Text, TouchableOpacity } from "react-native"

const Button = ({ label, onPress, width, backgroundColor='#20BF55' }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={[styles.buttonContainer, {width, backgroundColor}]}>
            <Text style={styles.buttonText} >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 45,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Button