import { S } from '@expo/html-elements'
import React from 'react'
import { Image, ScrollView } from 'react-native'
import { Text, View } from 'react-native'

const ProgressHistory = () => {
    return (
        <ScrollView className='bg-[#F6F6F6] flex-1 shadow-[0_0_4px_0_rgba(0,0,0,0.05)]'>
            <View className="flex-row justify-between items-center p-4 border border-[#E6E6E6]">
                {/* Left Section */}
                <View className="flex-row items-center gap-3">
                    {/* Profile Image */}
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                        className="w-14 h-14 rounded-full"
                    />

                    {/* User Details */}
                    <View>
                        <Text className="text-[10px] text-[#909090]] uppercase tracking-[2px]">
                            Chat
                        </Text>
                        <Text className="text-base font-medium text-[#3E3E3E]">
                            Sanjog Singh
                        </Text>
                        <View className="flex-row items-center gap-2 mt-1">
                            <Text className="text-[10px] font-normal text-[#767676]">
                                Today, 8:22
                            </Text>
                            <Text className="text-[10px] font-normal text-black">
                                30 mins
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Right Section — Amount */}
                <Text className="text-[13px] font-medium text-[#212121]]">
                    ₹800
                </Text>
            </View>
            <View className="flex-row justify-between items-center p-4 border border-[#E6E6E6]">
                {/* Left Section */}
                <View className="flex-row items-center gap-3">
                    {/* Profile Image */}
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                        className="w-14 h-14 rounded-full"
                    />

                    {/* User Details */}
                    <View>
                        <Text className="text-[10px] text-[#909090]] uppercase tracking-[2px]">
                            Call
                        </Text>
                        <Text className="text-base font-medium text-[#3E3E3E]">
                            Sanjog Singh
                        </Text>
                        <View className="flex-row items-center gap-2 mt-1">
                            <Text className="text-[10px] font-normal text-[#767676]">
                                1st Sept 2025, 8:22
                            </Text>
                            <Text className="text-[10px] font-normal text-black">
                                30 mins
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Right Section — Amount */}
                <Text className="text-[13px] font-medium text-[#212121]]">
                    ₹800
                </Text>
            </View>
        </ScrollView>
    )
}

export default ProgressHistory