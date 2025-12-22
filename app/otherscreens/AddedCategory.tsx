import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Briefcase, ChevronRight } from "lucide-react-native";
import { router } from "expo-router";

/* -------------------- Business Item -------------------- */
const BusinessItem = ({ name, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            className="mb-4"
        >
            <View
                className="flex-row items-center justify-between rounded-xl px-4 py-4"
                style={{ backgroundColor: "#EEF0FF" }} // ✅ FIXED
            >
                {/* Left */}
                <View className="flex-row items-center gap-3">
                    <Image
                        source={require("../../assets/images/bussines.png")}
                        className="w-6 h-6"
                        resizeMode="contain"
                    />

                    <Text className="text-[15px] font-medium text-[#303030]">
                        {name}
                    </Text>
                </View>

                {/* Right */}
                <View className="w-7 h-7 rounded-full border border-gray-400 items-center justify-center">
                    <ChevronRight size={16} color="#4B5563" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

/* -------------------- Static Data -------------------- */
const BUSINESSES = [
    { id: "1", name: "Business 1" },
    { id: "2", name: "Business 2" },
    { id: "3", name: "Business 3" },
];

/* -------------------- Screen -------------------- */
const AddedCategory = () => {
    return (
        <View className="flex-1 bg-white">

            {/* Scroll Content */}
            <ScrollView
                className="flex-1 px-6"
                showsVerticalScrollIndicator={false}
            >
                {/* Header Image */}
                <Image
                    source={require("../../assets/images/businessbg.png")}
                    className="w-full h-[150px] rounded-xl mt-6"
                    resizeMode="cover"
                />

                {/* Section */}
                <View className="mt-6">

                    {/* Title */}
                    <View className="mb-6">
                        <Text className="text-lg font-semibold text-[#1F2937]">
                            Registered Business
                        </Text>
                        <View className="w-14 h-[1px] bg-[#6366F1] rounded-full" />
                    </View>

                    {/* List */}
                    {BUSINESSES.map((item) => (
                        <BusinessItem
                            key={item.id}
                            name={item.name}
                            onPress={() => {
                                console.log("Pressed:", item.name);
                            }}
                        />
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Button */}
            <TouchableOpacity
                activeOpacity={0.85}
                className="bg-[#434BEA] px-4 py-4 rounded-full mx-4 mb-4 items-center"
                onPress={() => router.push("/otherscreens/UploadCheckDocs")}
            >
                <Text className="text-white text-base font-medium uppercase">
                    Add New Business
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddedCategory;
