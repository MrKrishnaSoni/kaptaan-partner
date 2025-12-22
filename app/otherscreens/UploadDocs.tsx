import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { Upload } from "lucide-react-native";

const UploadDocs = () => {
    return (
        <View className="flex-1 bg-white items-center justify-center px-4">

            {/* Upload Container */}
            <View className="w-full h-[90%] border-2 border-dashed border-gray-300 rounded-2xl items-center justify-center">

                {/* Text */}
                <Text className="text-[15px] font-medium text-gray-700 mb-1">
                    Select a document to upload
                </Text>

                <Text className="text-[12px] text-gray-400 mb-6">
                    JPG, PNG or PDF, file size no more than{" "}
                    <Text className="text-red-500">10MB</Text>
                </Text>

                {/* Upload Button */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="flex-row items-center bg-indigo-600 px-6 py-3 rounded-full"
                >
                    <Upload size={18} color="#fff" />
                    <Text className="text-white font-medium ml-2">
                        Upload
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default UploadDocs