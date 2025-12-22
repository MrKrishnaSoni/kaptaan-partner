import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Upload } from "lucide-react-native";

const UploadCheckDocs = () => {
    return (
        <View className="flex-1 bg-white items-center justify-center px-4">

            {/* Upload Container */}
            <View className="w-full h-[90%] border-2 border-dashed border-gray-300 text-center rounded-2xl items-center justify-center">

                <View className='flex-col gap-2 items-center px-8'>
                    {/* Text */}
                    <Text className='text-2xl text-center font-semibold text-[#AF19B2]'>
                        Uploading an updated version of your document replaces the present document
                    </Text>

                    <Text className="text-[15px] text-center font-medium text-gray-700">
                        Please upload the updated version of your document here
                    </Text>

                    <Text className="text-[12px] text-gray-400 mb-4">
                        JPG, PNG or PDF, file size no more than{" "}
                        <Text className="text-red-500">10MB</Text>
                    </Text>
                </View>

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
    )
}

export default UploadCheckDocs