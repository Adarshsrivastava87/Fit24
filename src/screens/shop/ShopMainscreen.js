import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import ColorCode from "../../utils/ColorConst";
import ProductCard from "./ProductCard";
const renderCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'Shoes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000',
    },
    {
      id: 2,
      title: 'Gym',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/IY/YT/WF/131499983/multi-cardio-exercise-500x500.jpg',
    },
    {
      id: 3,
      title: 'Protein',
      image: 'https://static.independent.co.uk/2024/06/21/11/Best%20protein%20powder.png?width=1200&height=900&fit=crop',
    },
    {
      id: 4,
      title: 'Supplements',
      image: 'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114154.jpg',
    },
    {
      id: 5,
      title: 'Clothes',
      image: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=',
    },
  ];

  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.headingText}>Categories</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
            {/* <Image source={{ uri: item.image }} style={styles.categoryImage} /> */}
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const renderBestSelling = () => {
  return (
    <View style={styles.bestSelling}>
      <Text style={styles.headingText}>Best Selling</Text>

      <FlatList
        data={[
          {
            id: '1',
            title: 'Shoes',
            description: 'Write description of product 1',
            price: 55,
            qnt:1,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
          },
          {
            id: '2',
            title: 'shoes',
            description: 'Write description of product 2',
            price: 60,
            qnt:1,
            image: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=',
          },
          {
            id: '3',
            title: 'Gym',
            description: 'Write description of product 3',
            price: 45,
            qnt:1,
            image: 'https://m.media-amazon.com/images/I/61GemVcZOYL.jpg',
          },
          {
            id: '4',
            title: 'protien',
            description: 'Write description of product 4',
            price: 70,
            qnt:1,
            image: 'https://static.independent.co.uk/2024/06/21/11/Best%20protein%20powder.png?width=1200&height=900&fit=crop',
          },
          {
            id: '5',
            title: 'shoes',
            description: 'Write description of product 4',
            price: 70,
            qnt:1,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
          },
          {
            id: '1',
            title: 'Shoes',
            description: 'Write description of product 1',
            price: 55,
            qnt:1,
            image: 'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114154.jpg',
          },
          {
            id: '2',
            title: 'shoes',
            description: 'Write description of product 2',
            price: 60,
            qnt:1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-cIhGuHQGCZi4cvRCDGANtEF8DU9f-xKBw&s',
          },
          {
            id: '3',
            title: 'Gym',
            description: 'Write description of product 3',
            price: 45,
            qnt:1,
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/IY/YT/WF/131499983/multi-cardio-exercise-500x500.jpg',
          },
          {
            id: '4',
            title: 'protien',
            description: 'Write description of product 4',
            price: 70,
            qnt:1,
            image: 'https://static.independent.co.uk/2024/06/21/11/Best%20protein%20powder.png?width=1200&height=900&fit=crop',
          },
          {
            id: '5',
            title: 'shoes',
            description: 'Write description of product 4',
            price: 70,
            qnt:1,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
          },

        ]}
        keyExtractor={(item) => item.id} // Unique key for each item
        scrollEnabled={false}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard {...item} />} // Properly pass item data
      />
    </View>)
}
const ShoppingScreen = () => {

  const animation = useRef(new Animated.Value(0)).current
  const startAnimation = () => {
    console.log("check")
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true

    }).start()
  }

  const animationText = useRef(new Animated.Value(0)).current
  const startAnimationText = () => {
    console.log("check")
    Animated.timing(animationText, {
      toValue: 1,
      duration:2000,
      useNativeDriver: true

    }).start()
  }
  useEffect(() => {
    setTimeout(startAnimation, 800)
    setTimeout(startAnimationText, 1000)
  }, [])

  //useEffect(()=>startAnimation(),[])
  return (
    <View style={styles.container}>
      <View style={{ margin: 10 }}>
        <Animated.Text style={{ fontSize: 34, fontWeight: 'bold', color: ColorCode.bgColor, opacity: animationText.interpolate({ inputRange: [0,0.2,0.4,0.6,0.8, 1], outputRange: [0.1,0.2,0.4,0.6,0.8, 1] }) }}>What's new</Animated.Text>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: ColorCode.bgColor }}>Shoes</Text>
        <Text style={{ fontSize: 16, fontWeight: "800", color: ColorCode.bgColor }}>Dumble</Text>
        <Text style={{ fontSize: 14, fontWeight: "600", color: ColorCode.bgColor }}>And many more !</Text>
      </View>
      <Animated.View style={[styles.subContainer, { height: Dimensions.get("screen").height }, { transform: [{ translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [400, 0] }) }] }]} >
        <View style={{ height: 20 }} />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, padding: 5,paddingBottom:45 }}
          nestedScrollEnabled>

          {renderCategories()}
          {renderBestSelling()}
        </ScrollView>
        <View style={{ height: 180 }} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    height: 100,
    paddingTop: 10,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    // backgroundColor: " rgba(20, 64, 175, 0.2)",
    backgroundColor: ColorCode.bgColor
  },
  categories: {
    margin: 10,
    height: 120,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "800",
    color: "white"
  },
  bestSelling: {
    //margin:5,
    // height:120,
    //width:Dimensions.get("window").width-10
  },
  bestSellingContainer: {
    height: 300,
    width: "45%",
    backgroundColor: ColorCode.white,
    margin: 10,
    borderRadius: 20,
    elevation: 2
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#4285F4',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  productImage: {

    width: "100%",
    borderRadius: 20,
    height: 120,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  productDescription: {
    fontSize: 12,
    color: '#777',

    marginVertical: 4,
  },
  footer: {
    width: "100%",
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  categoriesContainer: {
    marginVertical: 10,
  },
  headingTextForCategories: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginLeft: 15,
    marginBottom: 10,
  },
  categoryCard: {
    minWidth: 100,
    height: 40,
    marginTop: 10,
    marginHorizontal: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#002a3c",
    borderRadius: 20,
    elevation: 2

  },
  categoryImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default ShoppingScreen;
