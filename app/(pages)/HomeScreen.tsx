
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import {LinearGradient} from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import FA5 from "react-native-vector-icons/FontAwesome5";
import LoginPopup from "../(authentication)/Login";
import CategorySection from "../(pages)/CategorySection";
import { multiCategoryData } from "../(pages)/multipleCategoryData";


interface CategoryItem {
  id: string;
  name: string;
  image: any;
  logo: any;
}

const categories: CategoryItem[] = [
  {
    id: "1",
    name: "Fruits & Vegetables",
    image: require("../../assets/category-images/fruitsandveg.jpeg"),
    logo:"🍉🥦",
  },
  {
    id: "2",
    name: "Dairy,Bread & eggs",
    image: require("../../assets/category-images/dairy.jpeg"),
    logo:"🥛🍞🥚",
  },
  {
    id: "3",
    name: "Package Snacks",
    image: require("../../assets/category-images/snacks.jpeg"),
    logo:"🍪",
  },
  {
    id: "4",
    name: "Beverages & Drinks",
    image: require("../../assets/category-images/drinks.png"),
    logo:"🥤",
  },
  {
    id: "5",
    name: "Bakery & Sweets",
    image: require("../../assets/category-images/bakery.jpeg"),
    logo:"🍰",
  },
  {
    id: "6",
    name: "Grains & Pulses",
    image: require("../../assets/category-images/grains.jpeg"),
    logo:"🍚",
  },
  {
    id: "7",
    name: "Meat, Fish and Poultry",
    image: require("../../assets/category-images/non-veg.jpeg"),
    logo:"🍗",
  },
  {
    id: "8",
    name: "Frozen Foods",
    image: require("../../assets/category-images/frozen-food.jpeg"),
    logo:"🧊",
  },
  {
    id: "9",
    name: "Fashion & Styles",
    image: require("../../assets/category-images/fashion.jpeg"),
    logo:"👗",
  },
  {
    id: "10",
    name: "Makeup & Beauty",
    image: require("../../assets/category-images/makeup.jpeg"),
    logo:"💄",
  },
  {
    id: "11",
    name: "Skincare & Haircare",
    image: require("../../assets/category-images/skincare.jpeg"),
    logo:"🧴",
  },
  {
    id: "12",
    name: "Stationery & Office Supplies",
    image: require("../../assets/category-images/stationery.jpeg"),
    logo:"🖊️",
  },
  {
    id: "13",
    name: "Kitchen & Dining",
    image: require("../../assets/category-images/kitchen.jpeg"),
    logo:"🍽️",
  },
  {
    id: "14",
    name: "Electronics applications",
    image: require("../../assets/category-images/electronics.jpeg"),
    logo:"📱",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
  colors={[
      "rgba(255,255,255,1)",
    "rgba(252,187,213,0.87)",
    "rgba(250,112,167,0.86)",
    "rgba(252,71,143,0.8)",
  ]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.gradientBox}
      >

      <View style={styles.topNav}>

      <View style={styles.logoContainer}>
        <Icon name="truck" size={30} color="#ff3385" />
        <Text className="italic" style={styles.Mainheading}>FastDelivery</Text>
      </View>

      <View style={styles.topBar}>
        <View style={styles.searchBox}>
          <Icon name="search" size={18} color="#555" />
          <TextInput placeholder="Search products..." style={styles.searchInput} />
        </View>
      <ScrollView>

        <TouchableOpacity style={styles.iconBtn} onPress={() => setShowLogin(true)}>
          <FA5 name="user" size={20} color="white" />
          <Text className="antialiased font-medium text-[#fff]">Login</Text>
        </TouchableOpacity>
        </ScrollView>
        <LoginPopup visible={showLogin} onClose={() => setShowLogin(false)} />
    

        <TouchableOpacity style={styles.iconBtn}>
          <FA5 name="shopping-cart" size={20} color="white" />
          <Text className="antialiased font-medium text-[#fff] ">Cart</Text>
        </TouchableOpacity>
      </View>
      </View>
      </LinearGradient>
      <View>

      <Text style={styles.heading}>Categories</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardHorizontal}
            onPress={() =>
  navigation.navigate("Products", {
    categoryId: item.id,
    categoryName: item.name,
    categoryLogo: item.logo,
  })
}
          >
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      </View>

      <View className="w-full px-6 mt-10 flex flex-row gap-20 h-96">
      <View className="">
        <Image
          source={require("../../assets/posters/yearend.png")}
          className="w-1/2 h-[32rem] rounded-xl object-fill ms-20"
          resizeMode="cover"
        />
      </View>
      <View className="">
        <Image
          source={require("../../assets/posters/vegies.jpeg")}
          className="w-1/2 h-[32rem] rounded-xl overflow-hidden"
          resizeMode="cover"
        />
      </View>

    

 
</View>
{multiCategoryData.map((section) => (
        <CategorySection
          key={section.id}
          id={section.id}
          title={section.title}
          data={section.products}
        />
      ))}


     
    
    </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // padding: 15,
  },
  gradientBox: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  Mainheading: {
    color: "#ff3385",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },

  logoContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  topNav: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topBar: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  searchBox: {
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    // flex: 1,
    height: 40,
    borderRadius: 10,
    marginRight: 25,
    paddingHorizontal: 20,
  },

  searchInput: {

    flex: 1,
    marginLeft: 8,
  },

  iconBtn: {
    // borderColor: "#ccc",
    // marginRight: 15,
    // borderWidth: 1,
    // borderRadius: "70%",
    // padding: 10,
    // paddingRight: 20,
    // paddingLeft: 20,
    marginLeft: 20,
    marginRight: 10,
    alignItems: "center",
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginVertical: 10,
  },

  cardHorizontal: {
    width: 100,
    height: 150,
    backgroundColor: "#FEDAE8",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 15,
    elevation: 3,
  },

  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 10,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  offersContainer: {
    flexDirection: "row",
    height: 500,
    width: "100%",
    padding: 10,
  },
});
