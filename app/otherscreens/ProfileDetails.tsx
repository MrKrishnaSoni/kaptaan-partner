import React, { memo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";

/* -------------------- Benefit Item -------------------- */
const BenefitItem = memo(({ title, description }) => {
    return (
        <View className="flex-row items-start mb-5">

            {/* Gradient Indicator */}
            <LinearGradient
                colors={["#434BEA", "#AF19B2", "#F34C5D"]}
                className="w-1 h-10 rounded-full mt-1"
            />

            {/* Text */}
            <View className="ml-4 flex-1">
                <Text className="text-base font-medium text-[#0F0F0F]">
                    {title}
                </Text>
                <Text className="text-xs text-[#444444] font-normal leading-5">
                    {description}
                </Text>
            </View>
        </View>
    );
});

const StepItem = ({ step, title, description, isLast }) => {
    return (
        <View className="flex-row items-start">

            {/* Left Indicator */}
            <View className="items-center">
                <LinearGradient
                    colors={["#7C3AED", "#EC4899"]}
                    className="w-10 h-10 rounded-l-lg items-center justify-center"
                >
                    <Text className="text-white font-bold text-lg">
                        {step}
                    </Text>
                </LinearGradient>

                {!isLast && (
                    <View className="w-[1px] flex-1 bg-[#000] h-full" />
                )}
            </View>

            {/* Right Content Card */}
            <View className="flex-1 rounded-r-md p-4 mb-6" style={{ backgroundColor: '#F5F5FC' }}>
                <Text className="text-[16px] font-semibold text-[#1E40AF]">
                    {title}
                </Text>
                <Text className="text-[13px] text-gray-600 mt-1 leading-5">
                    {description}
                </Text>
            </View>
        </View>
    );
};

const STEPS = [
    {
        id: "1",
        title: "Create a Profile",
        description:
            "Choose what you want to add (bike, property, documents, etc.).",
    },
    {
        id: "2",
        title: "Fill Key Details",
        description:
            "Add basic info, photos, and important documents.",
    },
    {
        id: "3",
        title: "Set & Track",
        description:
            "Get reminders, access info anytime, and manage everything in one place.",
    },
];


/* -------------------- Static Data -------------------- */
const BENEFITS = [
    {
        id: "ai",
        title: "AI-Powered Document Analysis",
        description: "Analyse your ownership documents through AI.",
    },
    {
        id: "expert",
        title: "Expert Help for Property Issues",
        description: "Get expert consultation on your property related disputes.",
    },
    {
        id: "organized",
        title: "Stay Organized",
        description: "Keep all your item details in one place.",
    },
    {
        id: "quick",
        title: "Quick Access",
        description: "Find important info, documents, or numbers instantly.",
    },
    {
        id: "tracking",
        title: "Easy tracking",
        description: "Get reminders for renewals, maintenance, and updates.",
    },
    {
        id: "records",
        title: "Better records",
        description: "Store bills, photos, and notes for future reference.",
    },
];

/* -------------------- Screen -------------------- */
const ProfileDetails = () => {
    return (
        <View className="flex-1">
            <ScrollView
                className="flex-1 bg-white"
                showsVerticalScrollIndicator={false}
            >
                {/* Header Image */}
                <Image
                    source={require("../../assets/images/detailsbg.png")}
                    style={{ width: "100%", height: 130 }}
                    resizeMode="cover"
                />

                {/* Intro Section */}
                <View className="px-6 mt-4">
                    <Text className="text-xl font-semibold text-[#303030]">
                        Why House-Profile Creation Matters
                    </Text>
                    <Text className="text-sm font-medium text-[#303030] mt-2 leading-5">
                        Keep all your home-related information organized by adding your house
                        profile. Enter basic details like address, documents, utilities, and
                        important records—everything stored safely in one place.
                    </Text>
                </View>

                {/* Key Benefits */}
                <View className="mt-6 px-6 py-6"
                    style={{ backgroundColor: "#F5F5FC" }}>
                    <Text className="text-lg font-semibold text-[#111827] mb-5">
                        Key Benefits
                    </Text>

                    {BENEFITS.map((item) => (
                        <BenefitItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </View>

                {/* steps */}
                <View className="px-4 pt-6 bg-white">

                    {/* Title */}
                    <Text className="text-xl font-semibold text-[#303030] mb-6">
                        How it works
                    </Text>

                    {/* Steps */}
                    {STEPS.map((item, index) => (
                        <StepItem
                            key={item.id}
                            step={item.id}
                            title={item.title}
                            description={item.description}
                            isLast={index === STEPS.length - 1}
                        />
                    ))}
                </View>

                {/* Banner */}
                <ImageBackground
                    source={require("../../assets/images/profilesBg.png")}
                    style={{ width: "100%", height: 140, marginTop: 20, marginBottom: 20, borderWidth: 0 }}
                    resizeMode="cover"
                >
                    <View className="p-5 flex justify-center h-full">
                        <Text className="text-white text-2xl font-semibold">
                            STAY ORGANIZED.STAY STRESS-FREE
                        </Text>
                        <Text className="text-white text-sm font-normal mt-1 opacity-90">
                            Multi-Profile Creation keeps your life sorted—simple,{'\n'}smart, and secure.
                        </Text>
                    </View>
                </ImageBackground>
            </ScrollView>
            {/* add Button */}
            <TouchableOpacity className="bg-[#434BEA] px-4 py-4 my-4 rounded-full mx-4 items-center">
                <Text className="text-white text-base font-medium uppercase">Add New House</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileDetails;