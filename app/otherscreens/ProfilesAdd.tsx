import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight, Siren } from "lucide-react-native";
import React, { memo } from "react";
import { Image, Pressable } from "react-native";
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { useRouter } from "expo-router";

/* -------------------- Card Component -------------------- */
const Card = memo(({ title, subtitle, image, onAddPress, onAddedPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            className="rounded-xl p-4"
        >
            <View className="flex-col justify-between items-start h-[120px]">

                {/* Top Section */}
                <View>
                    {image && (
                        <Image
                            source={image}
                            className="w-6 h-6 mb-3"
                            resizeMode="contain"
                        />
                    )}

                    <Text className="text-[15px] font-medium text-[#464646] w-full">
                        {title}
                    </Text>
                </View>

                {/* Bottom Section */}
                <View className="flex-row justify-between items-center w-full">

                    {/* Left side */}
                    {subtitle ? (
                        <View className="flex-row items-center">
                            {/* Avatars */}
                            <View className="flex-row items-center">
                                <Image
                                    source={subtitle}
                                    className="w-8 h-8 rounded-full border border-white"
                                />
                                <Image
                                    source={subtitle}
                                    className="w-8 h-8 rounded-full -ml-3 border border-white"
                                />
                            </View>

                            {/* Count */}
                            <Text className="ml-1 text-sm font-medium text-[#464646]">
                                +2
                            </Text>
                        </View>
                    ) : (
                        <Pressable
                            onPress={onAddPress}
                            android_ripple={{ color: "#e5e7eb" }}
                            className="px-3 py-1 rounded-full border border-gray-400"
                        >
                            <Text className="text-xs font-medium text-[#464646]">
                                Add
                            </Text>
                        </Pressable>
                    )}

                    {/* Right side arrow */}
                    <Pressable
                        onPress={onAddedPress}
                        className="w-7 h-7 items-center justify-center rounded-full border border-gray-400">
                        <ChevronRight size={18} color="#464646" />
                    </Pressable>
                </View>
            </View>
        </TouchableOpacity>
    );
});

/* -------------------- Static Data -------------------- */
const ASSETS = [
    {
        title: "House / Flat",
        subtitle: require("../../assets/images/profile.png"),
        image: require("../../assets/images/home.png"),
        gradient: ["#FFFFFF", "#E9EAFF"],
    },
    {
        title: "Business",
        image: require("../../assets/images/bussines.png"),
        gradient: ["#FFFFFF", "#E9EAFF"],
    },
    {
        title: "Intellectual Property",
        image: require("../../assets/images/schedule.png"),
        gradient: ["#FFFFFF", "#E9EAFF"],
    },
];

const LIABILITIES = [
    {
        title: "Car",
        subtitle: require("../../assets/images/profile.png"),
        image: require("../../assets/images/4wheel.png"),
        gradient: ["#FEF0F0", "#FFEFEF"],
    },
    {
        title: "Motor Cycle",
        image: require("../../assets/images/2wheel.png"),
        gradient: ["#FEF0F0", "#FFEFEF"],
    },
];


const { width: SCREEN_WIDTH } = Dimensions.get("window");

const CARD_WIDTH = SCREEN_WIDTH * 0.75;
const CARD_SPACING = 10;
const SIDE_PADDING = (SCREEN_WIDTH - CARD_WIDTH) / 2;

export const EMERGENCY_CARDS = [
    {
        id: "emergency",
        text: "Emergency mein sab kuch ready.",
        bg: "bg-[#EE3134]",
        textColor: "text-[#780002]",
        border: "border-[#780002]",
    },
    {
        id: "documents",
        text: "All documents in one place.",
        bg: "bg-[#31EED8]",
        textColor: "text-[#00786A]",
        border: "border-[#00786A]",
    },
    {
        id: "security",
        text: "Secure & private access.",
        bg: "bg-[#3141EE]",
        textColor: "text-[#001478]",
        border: "border-[#001478]",
    },
];

/* -------------------- Screen -------------------- */
const ProfilesAdd = () => {
    const router = useRouter()

    return (
        <ScrollView
            className="flex-1 bg-white pt-6"
            showsVerticalScrollIndicator={false}
        >
            {/* Banner */}
            <ImageBackground
                source={require("../../assets/images/profilesBg.png")}
                style={{
                    height: 150,
                }}
                className="mx-6 mb-4 rounded-lg overflow-hidden"
                resizeMode="cover"
            >
                <View className="p-6 flex justify-center h-full">
                    <Text className="text-white text-2xl font-semibold">
                        STAY ORGANIZED. STAY STRESS - FREE
                    </Text>
                    <Text className="text-white text-sm font-normal mt-1 opacity-90">
                        Profiles keeps your life sorted—simple, smart, and secure.
                    </Text>
                </View>
            </ImageBackground>

            {/* Emergency Horizontal Cards */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + CARD_SPACING}
                decelerationRate="fast"
                contentContainerStyle={{
                    paddingHorizontal: SIDE_PADDING,
                }}
            >
                {EMERGENCY_CARDS.map((item) => (
                    <View
                        key={item.id}
                        className={`${item.bg} ${item.border} border rounded-xl`}
                        style={{
                            width: CARD_WIDTH,
                            marginRight: CARD_SPACING,
                        }}
                    >
                        <View className="flex-row items-center gap-2 px-5 py-4">
                            <Siren size={22} className={item.textColor} />
                            <Text
                                className={`text-sm font-medium ${item.textColor}`}
                                numberOfLines={1}
                            >
                                {item.text}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>


            {/* Assets */}
            <View className="px-6 pt-6">
                <Text className="text-lg font-normal text-[#212121] mb-4 border-b border-red-400 self-start">Assets</Text>

                <View className="flex-row flex-wrap justify-between">
                    {ASSETS.map((item) => (
                        <LinearGradient
                            key={item.title}
                            colors={item.gradient}
                            className="w-[48%] rounded-xl mb-3"
                            start={{ x: 1.2, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 3 },
                                shadowOpacity: 0.12,
                                shadowRadius: 4,
                                elevation: 4,
                            }}
                        >
                            <Card
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                                onAddPress={() => router.push("/otherscreens/ProfileDetails")}
                                onAddedPress={() => router.push("/otherscreens/AddedCategory")}
                            />
                        </LinearGradient>
                    ))}
                </View>

                {/* Liabilities */}
                <Text className="text-lg font-normal text-[#212121] mt-4 mb-4 border-b border-[#434BEA] self-start">
                    Liabilities
                </Text>

                <View className="flex-row justify-between flex-wrap">
                    {LIABILITIES.map((item, index) => (
                        <LinearGradient
                            key={item.title}
                            colors={item.gradient}
                            className="w-[48%] rounded-xl mb-3"
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 3 },
                                shadowOpacity: 0.12,
                                shadowRadius: 4,
                                elevation: 4,
                            }}
                        >
                            <Card
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                                onAddPress={() => router.push("/otherscreens/ProfileDetails")}
                            />
                        </LinearGradient>
                    ))}
                </View>
            </View>
        </ScrollView >
    );
};

export default ProfilesAdd;
