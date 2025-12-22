import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Upload } from "lucide-react-native";

const AnalyzeDocs = () => {
    return (
        <View className="flex-1 bg-white items-center justify-center px-4">

            {/* Upload Container */}
            <View className="w-full h-[90%] border border-gray-300 rounded-2xl items-center justify-center">

                {/* Text */}
                <Text className="text-base font-normal text-gray-700 mb-1">
                    Analyzed document appear here
                </Text>
            </View>
        </View>
    )
}

export default AnalyzeDocs