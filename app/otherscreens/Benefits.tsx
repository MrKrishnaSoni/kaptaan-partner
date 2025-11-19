import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ChevronRight, CircleChevronRight } from 'lucide-react-native'

const Benefits = () => {
    return (
        <View className='bg-[#F6F6F6] flex-1'>
            <View className='px-6 py-3'>
                <Text className='text-base font-medium text-[#212121] mb-1'>Benefits</Text>
                <Text className='text-[#212121] text-sm font-normal'>For every referral you get ₹200</Text>
            </View>
            <LinearGradient
                colors={['#272C88', '#0A0B22']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="rounded-2xl p-4 mx-6 flex-col justify-between"
            >
                {/* Top Section */}
                <View className="flex-row justify-between items-center">
                    <Text className="text-white font-normal text-[13px]">
                        Total Referral Earnings
                    </Text>
                    <Text className="text-white text-2xl font-normal">
                        ₹ 10,000
                    </Text>
                </View>

                {/* Bottom Section */}
                <TouchableOpacity className="flex-row items-center mt-3">
                    <Text className="text-white text-xs font-medium mr-2">
                        View breakup
                    </Text>
                    <CircleChevronRight size={16} color="#fff" />
                </TouchableOpacity>
            </LinearGradient>

            <View className='bg-[#FFE3AA] border border-[#C47C00] p-4 mx-6 mt-4 rounded-[20px]'>
                <Text className='text-[#5B3A00] text-base font-medium'>Your Referral code</Text>
                <Text className='text-center uppercase font-medium text-[40px] text-[#C47C00] pt-4'>CX3YTW45</Text>
            </View>

            {/* Button */}
            <TouchableOpacity className="bg-[#434BEA] py-4 rounded-full my-5 mx-6 items-center">
                <Text className="text-white text-base font-medium">Share Referral Code</Text>
            </TouchableOpacity>

            <Text className='text-[#212121] font-medium text-[15px] py-5 px-6'>Your Referrals</Text>
            <ScrollView>
                <View className='bg-white py-4 px-6 border-b border-[#E6E6E6] flex-row items-center justify-between'>
                    <View className="flex-row items-center gap-3">
                        {/* Profile Image */}
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                            className="w-14 h-14 rounded-full"
                        />
                        <Text className='text-base font-medium text-[#3E3E3E]'>Sanjog Singh</Text>
                    </View>
                    <Text className='text-base font-medium text-[#67B238]'>₹200</Text>
                </View>
                   <View className='bg-white py-4 px-6 border-b border-[#E6E6E6] flex-row items-center justify-between'>
                    <View className="flex-row items-center gap-3">
                        {/* Profile Image */}
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                            className="w-14 h-14 rounded-full"
                        />
                        <Text className='text-base font-medium text-[#3E3E3E]'>Sanjog Singh</Text>
                    </View>
                    <Text className='text-base font-medium text-[#67B238]'>₹200</Text>
                </View>
                   <View className='bg-white py-4 px-6 border-b border-[#E6E6E6] flex-row items-center justify-between'>
                    <View className="flex-row items-center gap-3">
                        {/* Profile Image */}
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                            className="w-14 h-14 rounded-full"
                        />
                        <Text className='text-base font-medium text-[#3E3E3E]'>Sanjog Singh</Text>
                    </View>
                    <Text className='text-base font-medium text-[#67B238]'>₹200</Text>
                </View>
                   <View className='bg-white py-4 px-6 border-b border-[#E6E6E6] flex-row items-center justify-between'>
                    <View className="flex-row items-center gap-3">
                        {/* Profile Image */}
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                            className="w-14 h-14 rounded-full"
                        />
                        <Text className='text-base font-medium text-[#3E3E3E]'>Sanjog Singh</Text>
                    </View>
                    <Text className='text-base font-medium text-[#67B238]'>₹200</Text>
                </View>
                   <View className='bg-white py-4 px-6 border-b border-[#E6E6E6] flex-row items-center justify-between'>
                    <View className="flex-row items-center gap-3">
                        {/* Profile Image */}
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                            className="w-14 h-14 rounded-full"
                        />
                        <Text className='text-base font-medium text-[#3E3E3E]'>Sanjog Singh</Text>
                    </View>
                    <Text className='text-base font-medium text-[#67B238]'>₹200</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Benefits