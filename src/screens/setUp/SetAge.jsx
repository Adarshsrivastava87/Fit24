
/* eslint-disable prettier/prettier */
import AppBar from "./AppBar"
import { useContext, useEffect, useRef, useState } from "react"
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Button from "../../components/button/Button"
import { StatusBarWrapper } from "../../components/statusBarWrapper/StatusBarWrapper"



const SetAge = ({ navigation }) => {
    const { setUpDetails, setSetUpDetails } = useContext();

    const ages = Array.from({ length: 100 }, (_, i) => i + 1); // Array of ages from 1 to 100
    const [selectedAge, setSelectedAge] = useState(25);
    const scrollViewRef = useRef(null);

    const scrollToAge = (age = 25) => {
        if (scrollViewRef.current) {
            const itemWidth = 90; // Adjust based on your item width including margin
            const centralOffset = (Dimensions.get('window').width - itemWidth) / 2;
            const index = age - 1; // Array index is 0-based
            const scrollToX = index * itemWidth - centralOffset;
            scrollViewRef.current.scrollTo({ x: scrollToX, animated: false });
        }
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const itemWidth = 90; // Adjust based on your item width including margin
        const screenWidth = Dimensions.get('window').width;
        const centralOffset = screenWidth / 6;
        const centralIndex = Math.round((scrollPosition + centralOffset - itemWidth / 2) / itemWidth);
        setSelectedAge(ages[centralIndex]);
    };

    const handleContinue = () => {

        setSetUpDetails({...setUpDetails, ...{age: selectedAge}})
        navigation.navigate('SetWeight')
    }

    useEffect(() => {
        scrollToAge(25);
    }, []);


    return (
        <StatusBarWrapper backgroundColor='#002D63' barStyle='light-content'>
        <AppBar title={"Back"} onBackPress={()=>{navigation.goBack()}}/>
            <View style={styles.container} >
                <View style={styles.headerView} >
                   
                </View>
                <View style={styles.pageContainer} >
                    <Text style={styles.centerHeaderText} >
                        What's Your Age
                    </Text>
                    <Text style={styles.subtitle}>
                    Your age helps us create a more accurate health profile for you. Please enter it below.
                </Text>
                    <Text style={styles.centerAgeText} >
                        {selectedAge}
                        </Text>
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.scrollViewContainer}
                        showsHorizontalScrollIndicator={false}
                        ref={scrollViewRef}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        snapToInterval={90} // Ensure it matches item width including margin
                        decelerationRate="fast"
                    >
                        {ages.map((age, index) => (
                            <View key={index} style={styles.ageItemWrapper}>
                                <Text style={[
                                    styles.ageText,
                                    selectedAge === age && styles.selectedAgeText
                                ]}>
                                    {age}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
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
        paddingBottom:20
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
    subtitle: {
        color: '#ccc',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
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
    centerAgeText: {
        color: 'white',
        fontSize: 64,
        fontWeight: 'bold',
    },
    scrollViewContainer: {
        position:'relative',
        top:40,
        paddingHorizontal: Dimensions.get('window').width/2 -45,
        backgroundColor: '#20BF55',
        height: 100,
    },
    ageItemWrapper: {
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ageText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#232323',
        opacity: 0.6,
        marginHorizontal: 10
    },
    selectedAgeText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
})

export default SetAge