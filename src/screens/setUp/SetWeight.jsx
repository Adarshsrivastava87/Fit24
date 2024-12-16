import { useContext, useEffect, useRef, useState } from "react"
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native"
import Button from "../../components/button/Button"
import { StatusBarWrapper } from "../../components/statusBarWrapper/StatusBarWrapper"
import AppBar from "./AppBar";

const SetWeight = ({ navigation }) => {
   const { setUpDetails, setSetUpDetails } = useContext(AppContext);
    const weights = Array.from({ length: 300 }, (_, i) => i + 1);
    const [selectedWeight, setSelectedWeight] = useState(50);
    const [selectedWeightType, setSelectedWeightType] = useState("Kg");
    const scrollViewRef = useRef(null);

    const scrollToWeight = (weight) => {
        if (scrollViewRef.current) {
            const itemWidth = 50; // Adjust based on your item width including margin
            const centralOffset = (Dimensions.get('window').width - itemWidth) / 2;
            const index = weight - 1; // Array index is 0-based
            const scrollToX = index * itemWidth - centralOffset;
            scrollViewRef.current.scrollTo({ x: scrollToX, animated: false });
        }
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const itemWidth = 50; // Adjust based on your item width including margin
        const screenWidth = Dimensions.get('window').width;
        const centralOffset = screenWidth / 24;
        const centralIndex = Math.round((scrollPosition + centralOffset - itemWidth / 2) / itemWidth);
        setSelectedWeight(weights[centralIndex]);
    };
  
 const handleContinue = () => {
    setSetUpDetails({...setUpDetails, ...{weight: selectedWeight}})
      navigation.navigate('SetHeight')
  }

    useEffect(() => {
        scrollToWeight(50);
    }, []);

    return (
        <StatusBarWrapper backgroundColor='#002D63' barStyle='light-content'>
         <AppBar title={"Back"} onBackPress={()=>{}}/>
            <View style={styles.container}>
             <Text style={{fontWeight:"bold",fontSize:25,color:"#fff"}}>What is your Weight</Text>
                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <View style={styles.toggleButtonContainer}>
                    <TouchableOpacity style={[styles.toggleButton, styles.leftToggleButton]} onPress={()=>setSelectedWeightType("Kg")}>
                        <Text style={styles.toggleButtonText}>KG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.toggleButton, styles.rightToggleButton]} onPress={()=>setSelectedWeightType("Lb")}>
                        <Text style={styles.toggleButtonText}>LB</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.scaleContainer}>
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.scrollViewContainer}
                        showsHorizontalScrollIndicator={false}
                        ref={scrollViewRef}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        snapToInterval={50} // Ensure it matches item width including margin
                        decelerationRate="fast"
                    >
                        {weights.map((weight, index) => (
                            <View key={index} style={styles.weightItemWrapper}>
                                <View style={[
                                    styles.tick,
                                    weight % 5 === 0 ? styles.longTick : styles.shortTick,
                                    selectedWeight === weight && styles.selectedTick
                                ]} />
                                <Text style={[
                                    styles.weightText,
                                    selectedWeight === weight && styles.selectedWeightText
                                ]}>
                                    {weight}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={styles.selectedWeightDisplay}>{selectedWeight} {selectedWeightType}</Text>
                </View>
                <Button label='Continue' onPress={handleContinue} width={178} />
            </View>
        </StatusBarWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'space-around',
       alignItems:'center',
       
        backgroundColor: '#002D63',
        paddingTop: 40,
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
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20BF55',
    },
    scrollViewContainer: {
        paddingHorizontal: Dimensions.get('window').width / 2 - 25,
    },
    weightItemWrapper: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tick: {
        width: 2,
        backgroundColor: 'white',
        marginVertical: 5,
    },
    longTick: {
        height: 30,
        backgroundColor:'black'
    },
    shortTick: {
        height: 15,
        backgroundColor:'black'
    },
    selectedTick: {
        backgroundColor: '#fff',
    },
    weightText: {
        fontSize:16,
        fontWeight: 'bold',
        color: '#ccc',
        marginTop: 5,
    },
    selectedWeightText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    selectedWeightDisplay: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 20,
    },
});

export default SetWeight;

