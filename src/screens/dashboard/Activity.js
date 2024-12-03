import { Dimensions, StyleSheet, View, Text, Image } from "react-native";
import ColorCode from "../../utils/ColorConst";

const CustomActivityComponents = () => {

componentData=()=>{
  return (
    <View style={{flexDirection:"row" ,alignItems:"center"}}>
    <View style={{width:40}}>
    <Image 
source={require('../../assets/icons/accDetails.png')} 
style={{ width: 24, // Adjust the width as needed
height: 24, // Adjust the height as needed
resizeMode: 'contain', }} 
/>
</View>
      <View style={{width:"50%",justifyContent:"flex-end"}} >
        <Text style={{fontWeight:"bold", fontSize:16}}>Total Food</Text>
        <Text>250 cal</Text>
      </View>
    </View>
  )
}


  return (
    <View style={style.container}>
      <View style={style.row}>
        <Text style={style.textStyle}>Activity</Text>
        <Text style={style.viewAll}>View all</Text>
      </View>

      <View style={style.subContainer}>
        <View style={style.challengeCard}>
          <View style={style.cardTextContainer}>
            <Text style={style.weeklyChallengeText}>Weekly</Text>
            <Text style={style.weeklyChallengeText}>Challenge</Text>
            <Text style={style.challengeTitle}>Swimming</Text>
          </View>
          <Image
            style={style.weeklyChallengeImage}
            source={require('../../assets/images/swimming.png')}
          />
        </View>

        <View style={style.bottomContainer}>
          <View style={{flexDirection:"row",justifyContent:"space-between",}}>
           {componentData()}
           {componentData()}
           
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 10,
   
    height: Dimensions.get("screen").height * 0.36,
    backgroundColor: ColorCode.white,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
  },
  subContainer: {
    margin: 10,
    padding: 15,
    borderRadius: 20,
    height: Dimensions.get("screen").height * 0.29,
    opacity: 0.95,
    backgroundColor: ColorCode.green,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    justifyContent:"space-between"
  },
  row: {
    margin: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  textStyle: {
    fontWeight: '800',
    fontSize: 22,
    color: ColorCode.black,
    letterSpacing: 1,
  },
  viewAll: {
    fontWeight: '600',
    fontSize: 16,
    color: ColorCode.darkGray,
  },
  challengeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#212020',
    borderRadius: 15,
    height: '50%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  cardTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding:15
  },
  weeklyChallengeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  challengeTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  weeklyChallengeImage: {
    width: '50%',
    height: 120,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  bottomContainer: {
    height: Dimensions.get("screen").height * 0.08,
    backgroundColor: "white",
    borderRadius:10,
    elevation:10,
    padding:10
  },
});

export default CustomActivityComponents;
