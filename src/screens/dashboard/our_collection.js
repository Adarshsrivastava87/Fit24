import { FlatList,View,Text, StyleSheet, Dimensions, Image } from "react-native";
import ColorCode from "../../utils/ColorConst";

const OurCollection=()=>{


    const data = [
        { 
          id: '1', 
          title: "Your body is your best investment.", 
          name: 'Stretching', 
          img: "https://images.healthshots.com/healthshots/en/uploads/2023/05/10200007/exercise.jpg" 
        },
        { 
          id: '2', 
          title: '"Progress, not perfection."', 
          name: 'Outdoor Jogging', 
          img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV4ZXJjaXNlfGVufDB8fDB8fHww" 
        },
        { 
          id: '3', 
          title: '"Strength" comes from struggle.', 
          name: 'Weight Training', 
          img: "https://hips.hearstapps.com/hmg-prod/images/gym-workout-weight-training-bodybuilding-muscular-royalty-free-image-1703160802.jpg?crop=0.669xw:1.00xh;0.216xw,0&resize=640:*" 
        },
        { 
          id: '4', 
          title: 'Embrace challenges', 
          name: 'Strength Exercises', 
          img: "https://www.dmoose.com/cdn/shop/articles/MicrosoftTeams-image_3946f9ea-6053-49fe-8c14-4080fc88253b.jpg?v=1681378878" 
        },
        { 
          id: '5', 
          title: "Fitness is it’s about being better than you used to be.", 
          name: 'Functional Training', 
          img: "https://fitnessvolt.com/wp-content/uploads/2024/08/Non-Dominant-Side-Workouts-750x467.jpg.webp" 
        },
      ];
    const renderItem=({item})=>{
        return <View style={style.card}>
        <View style={{width:Dimensions.get("screen").width-200}}>
        <View style={{padding:10}}>
        <Text style={{color:ColorCode.black,fontSize:20}}>{item.title}</Text>
        </View>
       
        </View>
            
            <Image source={{uri:item.img}} style={{height:Dimensions.get("screen").height*0.15,width:200,borderTopRightRadius:100,borderTopLeftRadius:10}}/>
        </View>
    }
    return(<View style={style.conatiner}>
    <Text style={style.textstyle}>Our Collection</Text>
        <FlatList 
data={data}
renderItem={renderItem}
keyExtractor={(item) => item.id}

        />
    </View>)
}
const style = StyleSheet.create({
    conatiner:{
        flex:1,
        
    },
    card: {
        flexDirection:"row",
        justifyContent:"space-between",
       height:Dimensions.get("screen").height*0.15,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        borderTopRightRadius:100,
        //padding: 16,
        marginBottom: 12,
        borderColor: ColorCode.lightGray, // Light border for subtle separation
      },
      textstyle:{
        marginVertical:10,
        fontWeight:"800",
        fontSize:20,
        color:ColorCode.textColor,
      },
})
export default OurCollection;