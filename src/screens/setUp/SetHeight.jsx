import { useContext, useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/button/Button";
import { StatusBarWrapper } from "../../components/statusBarWrapper/StatusBarWrapper";
import AppBar from "./AppBar";


const SetHeight = ({ navigation }) => {
  const { setUpDetails, setSetUpDetails } = useContext(AppContext);
    const heights = Array.from({ length: 300 }, (_, i) => i + 1);
    const [selectedHeight, setSelectedHeight] = useState(50);
    const scrollViewRef = useRef(null);

    const scrollToHeight = (height) => {
        if (scrollViewRef.current) {
            const itemHeight = 50; // Adjust based on your item height including margin
            const centralOffset = (Dimensions.get('window').height - itemHeight) / 2;
            const index = height - 1; // Array index is 0-based
            const scrollToY = index * itemHeight - centralOffset;
            scrollViewRef.current.scrollTo({ y: scrollToY, animated: false });
        }
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.y;
        const itemHeight = 59; // Adjust based on your item height including margin
        const screenHeight = Dimensions.get('window').height;
        const centralOffset = screenHeight / 4;
        const centralIndex = Math.round((scrollPosition + centralOffset - itemHeight / 2) / itemHeight);
        setSelectedHeight(heights[centralIndex]);
    };

    const handleContinue = () => {
      setSetUpDetails({...setUpDetails, ...{height: selectedHeight}})
        navigation.navigate('SetupGoalScreen');
    };

    useEffect(() => {
        scrollToHeight(50);
    }, []);

    return (
        <StatusBarWrapper backgroundColor='#002D63' barStyle='light-content'>
        <AppBar title={"Back"} onBackPress={()=>{}}/>
            <View style={styles.container}>
            <Text style={styles.headerText}>What Is Your Height?</Text>
                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
               <View style={{flexDirection:'row',justifyContent:'center',alignItems:"flex-end",marginBottom:10}}>
                <Text style={styles.selectedWeightDisplay}>{selectedHeight}</Text>
                <Text style={{color:"white", fontSize:18}}> cm</Text>
                </View>
                <View style={styles.scaleContainer}>
                    <ScrollView
                        vertical
                        contentContainerStyle={styles.scrollViewContainer}
                        showsVerticalScrollIndicator={false}
                        ref={scrollViewRef}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        snapToInterval={50} // Ensure it matches item height including margin
                        decelerationRate="fast"
                    >
                        {heights.map((height, index) => (
                            <View key={index} style={styles.heightItemWrapper}>
                                <View style={[
                                    styles.tick,
                                    height % 5 === 0 ? styles.longTick : styles.shortTick,
                                    selectedHeight === height && styles.selectedTick
                                ]} />
                                <Text style={[
                                    styles.heightText,
                                    selectedHeight === height && styles.selectedHeightText
                                ]}>
                                    {height}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
               
                <Button label='Continue' onPress={handleContinue} width={178} />
            </View>
        </StatusBarWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002D63',
        paddingTop: 40,
        flexDirection:'column',
        alignItems:'center',
        paddingBottom:20
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
        backgroundColor: '#002D63',
    },
    backButton: {
        marginRight: 10,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#ccc',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    toggleButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    toggleButton: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20BF55',
        borderRadius: 30,
    },
    leftToggleButton: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    rightToggleButton: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    toggleButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    scaleContainer: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20BF55',
        flex: 1,
        borderRadius:20
    },
    scrollViewContainer: {
        paddingVertical: Dimensions.get('window').height / 2 - 25,
    },
    heightItemWrapper: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tick: {
        height: 2,
        backgroundColor: 'white',
        marginHorizontal: 5,
    },
    longTick: {
        width: 30,
        backgroundColor:'black'
    },
    shortTick: {
        width: 15,
        backgroundColor:'black'
    },
    selectedTick: {
        backgroundColor: '#fff',
    },
    heightText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ccc',
        marginTop: 5,
    },
    selectedHeightText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    selectedWeightDisplay: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        
       
    },
});

export default SetHeight;
