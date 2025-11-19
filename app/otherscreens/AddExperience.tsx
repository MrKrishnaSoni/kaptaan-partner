import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Calendar, ChevronDown } from "lucide-react-native";

const AddExperience = () => {
    return (
        <View className="flex-1 justify-between bg-white px-6 py-8">

            <View>

                {/* TITLE */}
                <Text className="text-xs font-medium text-[#3C3C3C] mb-1 uppercase">Department/ Organisation/Office</Text>
                <TextInput
                    placeholder="Assistant Sub-Inspector"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px] mb-4"
                />

                {/* TITLE */}
                <Text className="text-xs font-medium text-[#3C3C3C] mb-1 uppercase">TITLE</Text>
                <TextInput
                    placeholder="Assistant Sub-Inspector"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px] mb-4"
                />

                {/* START YEAR */}
                <Text className="text-xs font-medium text-[#3C3C3C] mb-1 uppercase">START YEAR</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3 mb-4">
                    <Calendar size={18} color="#444" />
                    <TextInput
                        placeholder="2018"
                        className="ml-3 flex-1 text-[15px]"
                        keyboardType="numeric"
                    />
                </View>

                {/* END YEAR */}
                <Text className="text-xs font-medium text-[#3C3C3C] mb-1 uppercase">END YEAR</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3 mb-4">
                    <Calendar size={18} color="#444" />
                    <TextInput
                        placeholder="2024"
                        className="ml-3 flex-1 text-[15px]"
                        keyboardType="numeric"
                    />
                </View>

                {/* STATE */}
                <Text className="text-xs font-medium text-[#3C3C3C] mb-1 uppercase">STATE</Text>
                <TouchableOpacity className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3 mb-4">
                    <Text className="flex-1 text-[15px] text-black">Rajasthan</Text>
                    <ChevronDown size={18} color="#444" />
                </TouchableOpacity>

                {/* CITY */}
                <Text className="text-xs font-medium text-[#3C3C3C] mb-1 uppercase">CITY</Text>
                <TextInput
                    placeholder="Jaipur"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px] mb-8"
                />
            </View>

            {/* Save Button */}
            <TouchableOpacity className="bg-[#4C4FF8] py-4 rounded-full">
                <Text className="text-center text-white font-semibold text-[16px]">
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddExperience