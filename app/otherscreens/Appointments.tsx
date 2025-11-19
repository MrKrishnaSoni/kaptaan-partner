import { Check, X } from 'lucide-react-native'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Appointments = () => {
    return (
        <ScrollView className='bg-white py-6 flex-1'>
            <View className="flex-row gap-3 px-6 py-4 items-center border-b border-[#E6E6E6]">

                {/* Profile Image */}
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                    className="w-12 h-12 rounded-full"
                />

                {/* Middle Content */}
                <View className="flex-1 ml-4">
                    <Text className="text-[10px] text-[#909090] font-medium tracking-[2px]">CALL</Text>

                    <Text className="text-base font-medium text-[#3E3E3E]">
                        Sanjog Singh
                    </Text>

                    <View className="flex-row gap-2 items-center mt-1">
                        <Text className="text-[#767676] text-[10px] font-normal">29 Sep, 5:00 PM</Text>
                        <Text className="text-gray-900 font-normal text-[10px]">10 mins</Text>
                    </View>
                </View>

                {/* Right Accepted Status */}
                <View className="flex-row items-center gap-1">
                    <Check size={18} color="#67B238" />
                    <Text className="text-[#67B238] font-light">Accepted</Text>
                </View>
            </View>
            <View className="flex-row gap-3 px-6 py-4 items-center border-b border-[#E6E6E6]">

                {/* Profile Image */}
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                    className="w-12 h-12 rounded-full"
                />

                {/* Middle Content */}
                <View className="flex-1 ml-4">
                    <Text className="text-[10px] text-[#909090] font-medium tracking-[2px]">CALL</Text>

                    <Text className="text-base font-medium text-[#3E3E3E]">
                        Sanjog Singh
                    </Text>

                    <View className="flex-row gap-2 items-center mt-1">
                        <Text className="text-[#767676] text-[10px] font-normal">29 Sep, 5:00 PM</Text>
                        <Text className="text-gray-900 font-normal text-[10px]">10 mins</Text>
                    </View>
                </View>

                {/* Right Accepted Status */}
                <View className="flex-row items-center gap-1">
                    <X size={18} color="#F34C5D" />
                    <Text className="text-[#F34C5D] font-light">Declined</Text>
                </View>
            </View>
            <View className="flex-row items-center px-6 py-4  justify-between flex-1 border-b border-[#E6E6E6]">

                {/* Left Section */}
                <View className="flex-row items-center">
                    {/* Profile Image */}
                    <Image
                        source={{ uri: "https://via.placeholder.com/80" }}
                        className="w-14 h-14 rounded-full"
                    />

                    {/* User Info */}
                    <View className="ml-4">
                        <Text className="text-xs text-gray-400 tracking-widest">CALL</Text>

                        <Text className="text-lg font-semibold text-gray-900">
                            Sanjog Singh
                        </Text>

                        <View className="flex-row items-center gap-2">
                            <Text className="text-gray-500 text-sm">29 Sep, 5:00 PM</Text>
                            <Text className="text-gray-900 font-medium text-sm">10 mins</Text>
                        </View>
                    </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row items-center gap-3">

                    {/* Decline Button */}
                    <TouchableOpacity className="border border-gray-400 rounded-full px-5 py-2">
                        <Text className="text-gray-700 font-medium">Decline</Text>
                    </TouchableOpacity>

                    {/* Accept Button */}
                    <TouchableOpacity className="bg-blue-600 rounded-full px-6 py-2">
                        <Text className="text-white font-medium">Accept</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>
    )
}

export default Appointments