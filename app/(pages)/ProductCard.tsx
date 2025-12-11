
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface ProductCardProps {
  item: any; 
}
export default function ProductCard({ item }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      
      <View style={styles.priceRow}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>

        <Text style={styles.price}>₹{item.price}</Text>
        <Text style={styles.cutPrice}>₹{item.cutPrice}</Text>
      </View>
      <Text style={styles.offer}>{item.offer} OFF</Text>
      </View>

      

      <View style={styles.nameQty}>

      <Text numberOfLines={2} style={styles.name}>
        {item.name}
      </Text>


      <Text style={styles.qty}>{item.qty}</Text>
      </View>

      <View style={styles.tagBox}>
        <Text style={styles.tagText}>{item.tag}</Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>

      {/* <Text style={styles.rating}>⭐ {item.rating}</Text> */}

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
  
    padding: 10,
    marginRight: 12,
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
    justifyContent: "space-around",
    marginTop: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "green",
  },
  cutPrice: {
    marginLeft: 10,
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#999",
  },
  offer: {
    fontSize: 15,
    color: "green",
    margin: 4,
    marginLeft: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
  qty: {
    fontSize: 12,
    color: "#777",
    marginRight: 15,
    marginTop: 2,
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
    marginRight: 10,
    fontSize: 12,
    color: "green",
  },
  addBtn: {
    borderWidth: 1,
    borderColor: "#ff3385",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 8,
  },
  addText: {
    color: "#ff3385",
    fontSize: 14,
    fontWeight: "700",
  },
});
