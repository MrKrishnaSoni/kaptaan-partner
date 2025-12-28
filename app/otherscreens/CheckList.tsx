import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";

/* ----------------------------------
   CHECKLIST ITEM
---------------------------------- */

const ChecklistItem = ({ label, checked, onToggle }) => {
    return (
        <Pressable
            onPress={onToggle}
            className="flex-row items-center py-2"
        >
            {/* Checkbox */}
            <View
                className={`w-6 h-6 rounded-lg border mr-3 items-center justify-center ${checked
                    ? "bg-[#4F46E5] border-[#4F46E5]"
                    : "border-[#D1D5DB]"
                    }`}
            >
                {checked && <View className="w-3 h-3 bg-white rounded-lg" />}
            </View>

            {/* Label */}
            <Text
                className={`text-sm ${checked ? "text-[#9CA3AF] line-through" : "text-[#212121]"
                    }`}
            >
                {label}
            </Text>
        </Pressable>
    );
};

/* ----------------------------------
   MAIN SCREEN
---------------------------------- */

const BusinessChecklistScreen = () => {
    const [items, setItems] = useState([
        { label: "Business goal & objective defined", checked: false },
        { label: "Legal & compliance requirements checked", checked: false },
        { label: "Budget & cost structure finalized", checked: false },
        { label: "Target audience clearly identified", checked: false },
        { label: "Product / service scope locked", checked: false },
        { label: "Operations & workflow planned", checked: false },
        { label: "Tools, software & resources ready", checked: false },
        { label: "Marketing & growth plan outlined", checked: false },
        { label: "Risk & fallback plan prepared", checked: false },
        { label: "Business goal & objective defined", checked: false },
        { label: "Legal & compliance requirements checked", checked: false },
        { label: "Budget & cost structure finalized", checked: false },
    ]);

    const completedCount = items.filter(i => i.checked).length;

    const toggleItem = (index) => {
        const updated = [...items];
        updated[index].checked = !updated[index].checked;
        setItems(updated);
    };

    return (
        <ScrollView
            className="flex-1 bg-white"
            showsVerticalScrollIndicator={false}
        >

            <Image
                source={require("../../assets/images/bggg.png")}
                className="w-full h-[150px] mb-5"
                resizeMode="cover"
            />

            <View className="px-6 pb-6">
                {/* Title */}
                <Text className="text-lg font-semibold text-[#212121]">
                    Business, Bilkul Sorted!
                </Text>

                {/* Description */}
                <Text className="text-sm text-[#6B7280] mt-1 leading-4">
                    Yeh checklist help karegi aapko har important requirement ko track aur
                    complete karne mein.
                </Text>

                {/* Checklist Header */}
                <View className="flex-row justify-between items-center mt-6 pb-2 border-b border-[#E5E7EB]">
                    <Text className="text-sm font-medium text-[#212121]">
                        Checklist
                    </Text>

                    <View className="border border-[#D1D5DB] rounded-full px-2 py-0.5">
                        <Text className="text-xs text-[#374151]">
                            {completedCount}/{items.length}
                        </Text>
                    </View>
                </View>

                {/* Checklist Items */}
                <View className="mt-2">
                    {items.map((item, index) => (
                        <ChecklistItem
                            key={index}
                            label={item.label}
                            checked={item.checked}
                            onToggle={() => toggleItem(index)}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default BusinessChecklistScreen;