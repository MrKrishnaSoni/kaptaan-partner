import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Upload } from "lucide-react-native";

const AnalyzeDocs = () => {
    return (
        <View className="flex-1 bg-white">
            <Image
                source={require('../../assets/images/bgDcos.png')}
                className="h-[71px] mb-6"
                resizeMode="cover"
            />
            {/* Upload Container */}
            <View className="h-[80%] mx-4 border border-gray-300 rounded-2xl items-center justify-center">

                {/* Text */}
                <Text className="text-base font-normal text-gray-700 mb-1">
                    Analyzed document appear here
                </Text>
            </View>
        </View>
    )
}

export default AnalyzeDocs