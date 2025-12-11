import { Link } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FA5 from "react-native-vector-icons/FontAwesome5";

const categories = [
  {
    id: "1",
    name: "Fruits & Vegetables",
    image: require("../assets/category-images/fruitsandveg.jpeg"),
  },

  {
    id: "2",
    name: "Dairy,Bread & eggs",
    image: require("../assets/category-images/dairy.jpeg"),
  },
  {
    id: "3",
    name: "Package Snacks",
    image: require("../assets/category-images/snacks.jpeg"),
  },
  {
    id: "4",
    name: "Beverages & Drinks",
    image: require("../assets/category-images/drinks.png"),
  },
  {
    id: "5",
    name: "Bakery & Sweets",
    image: require("../assets/category-images/bakery.jpeg"),
  },
  {
    id: "6",
    name: "Grains & Pulses",
    image: require("../assets/category-images/grains.jpeg"),
  },
  {
    id: "7",
    name: "Meat, Fish and Poultry",
    image: require("../assets/category-images/non-veg.jpeg"),
  },
  {
    id: "8",
    name: "Frozen Foods",
    image: require("../assets/category-images/frozen-food.jpeg"),
  },
  {
    id: "9",
    name: "Fashion & Styles",
    image: require("../assets/category-images/fashion.jpeg"),
  },
  {
    id: "10",
    name: "Makeup & Beauty",
    image: require("../assets/category-images/makeup.jpeg"),
  },
  {
    id: "11",
    name: "Skincare & Haircare",
    image: require("../assets/category-images/skincare.jpeg"),
  },
  {
    id: "12",
    name: "Stationery & Office Supplies",
    image: require("../assets/category-images/stationery.jpeg"),
  },
  {
    id: "13",
    name: "Kitchen & Dining",
    image: require("../assets/category-images/kitchen.jpeg"),
  },
  {
    id: "14",
    name: "Electronics applications",
    image: require("../assets/category-images/electronics.jpeg"),
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon name="truck" size={40} color="#e6005c" />
        <Text style={styles.Mainheading}>FastDelivery</Text>
      </View>
      <View style={styles.topBar}>
        <View style={styles.searchBox}>
          <Icon name="search" size={18} color="#555" />
          <TextInput
            placeholder="Search products..."
            style={styles.searchInput}
          />
        </View>

        <View style={styles.topBar}>
          <TouchableOpacity style={styles.iconBtn}>
            <FA5 name="user" size={24} color="#444" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBtn}>
            <FA5 name="shopping-cart" size={24} color="#444" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.heading}>Categories</Text>
      <View>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 15 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cardHorizontal}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <Link href="/CategoriesScreen"> Go to Categories</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 40,
    // flexDirection: "row",
  },
  Mainheading: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 20,
    flexDirection: "colomn",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
  },

  iconBtn: {
    marginLeft: 12,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginVertical: 10,
  },

  card: {
    width: "48%",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },

  cardHorizontal: {
    width: 100,
    backgroundColor: "#f8f8f8",
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
});
