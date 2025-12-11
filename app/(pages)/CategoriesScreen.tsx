import { RouteProp, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { multiCategoryData } from "../(pages)/multipleCategoryData";

interface CategoryParams {
  categoryId: string;
  categoryName: string;
  // categoryLogo: string;
}

export default function CategoriesScreen() {
  const route = useRoute<RouteProp<Record<string, CategoryParams>, string>>();
  const { categoryId, categoryName } = route.params;

  const category = multiCategoryData.find((c) => c.id === categoryId);


  if (!category) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Category not found</Text>
      </View>
    );
  }


  const products = category.products;

  return (
       
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[
            "rgba(255,255,255,1)",
          "rgba(252,187,213,0.87)",
          "rgba(250,112,167,0.86)",
          "rgba(252,71,143,0.8)",
        ]}
        start={{ x: 0, y: 1}}
        end={{ x: 0, y: 1}}
            >
      <Text style={styles.heading}> {categoryName}</Text>

      <View style={styles.grid}>
        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />

            <View style={styles.nameQty}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.qty}>{item.qty}</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.price}>₹{item.price}</Text>
              <Text style={styles.cutPrice}>₹{item.cutPrice}</Text>
            </View>

            <View style={styles.tagBox}>
              <Text style={styles.offer}>Save {item.offer}</Text>
              <Text style={styles.rating}>⭐ {item.rating}</Text>
            </View>

            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addText}>ADD</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      </LinearGradient>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: "#fff",
    gap: 3,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 30,
    color: "#ff3385",
    fontWeight: "700",
    margin: 20,
  },
  card: {
    width: "18%",
    height: 320,
    padding: 10,
    margin: 15,
    backgroundColor: "#fff",
    borderColor: "#f2f2f2",
    borderWidth: 2,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  nameQty: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,

  },

  image: {
    width: "100%",
    height: 110,
  
    
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "green",
    padding: 10,
  },
  cutPrice: {
    padding: 15,
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#999",
  },
  offer: {
    fontSize: 15,
    fontWeight: "600",
    color: "red",
    margin: 2,
    marginLeft: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 8,
    paddingTop: 10,
  },
  qty: {
    fontSize: 15,
    color: "#777",
    marginRight: 15,
    paddingTop: 15,
  },
  tagBox:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  tagText: {
    flexDirection: "row",
    backgroundColor: "#e6f7ff",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 6,
    fontSize: 11,
    color: "#0077b6",
    margin: 5,
  },
 
  rating: {
    marginTop: 8,
    marginRight: 12,
    fontSize: 12,
    color: "green",
  },
  addBtn: {
    borderWidth: 1,
    borderColor: "#ff3385",
    backgroundColor: "#ff3385",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 15,
  },
  addText: {
    borderColor: "#ff3385",
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
});
