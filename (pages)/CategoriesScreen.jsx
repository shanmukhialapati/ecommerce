import { FlatList, Text, TouchableOpacity, View } from "react-native";

const categories = [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Clothing" },
    { id: "3", name: "Groceries" },
    { id: "4", name: "Furniture" },
    { id: "5", name: "Mobiles" },
];

export default function CategoriesScreen() {
    return (
        <View className="flex-1 bg-white pt-12">
            <Text className="text-3xl font-bold text-center mb-6 text-gray-800">
                📦 Categories
            </Text>

            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                renderItem={({ item }) => (
                    <TouchableOpacity className="flex-1 bg-gray-200 m-2 p-6 rounded-xl items-center justify-center">
                        <Text className="text-lg font-semibold text-gray-800">
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
