
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProductCard from "./ProductCard";
interface CategorySectionProps {
  id:string,
  title: string;
  data: any[]; 
}
export default function CategorySection({id,title, data }: CategorySectionProps) {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
    onPress={() =>
      navigation.navigate("Products", {
        categoryId:id,
        categoryName: title,
      })
    }
  >
    <Text style={styles.seeAll}>See All</Text>
  </TouchableOpacity>
        
        
        
                {/* <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                  </TouchableOpacity> */}
                
              
      </View>

      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>  <ProductCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  seeAll: {
    color: "#ff3385",
    fontSize: 16,
    fontWeight: "600",
  },
});
