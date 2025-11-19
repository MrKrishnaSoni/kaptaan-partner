import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ChevronRight } from 'lucide-react-native'
import { useRouter } from "expo-router";


const PaymentDetail = () => {
    const router = useRouter()

    return (
        <ScrollView className='bg-[#FAFAFA] flex-1'>
            <LinearGradient
                colors={['#2C45FF', '#3018B9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="rounded-3xl p-5 mt-6 mb-6 mx-6 shadow-[0_0_8px_rgba(0,0,0,0.15)]"
            >
                {/* Header */}
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-white tracking-[2px] text-[13px] font-medium uppercase">
                        Payment Briefs
                    </Text>
                    <Image
                        source={require('@/assets/images/question-line.png')}
                        style={{ width: 24, height: 24, resizeMode: 'contain' }}
                    />
                </View>

                {/* Payment Info */}
                <View className="flex-row justify-between items-start mb-3">
                    <View>
                        <Text className="text-white text-2xl font-bold">₹25,569/-</Text>
                        <Text className="text-[#D4BBFF] text-[10px] mt-1">
                            Pending Settlement
                        </Text>
                    </View>
                    <View className="items-end">
                        <Text className="text-white text-[14px] font-semibold">
                            15th Oct, 2025
                        </Text>
                        <Text className="text-[#D4BBFF] text-[10px] mt-1">Payment Date</Text>
                    </View>
                </View>

                {/* Description */}
                <Text className="text-[#D4BBFF] text-center text-[10px] leading-4">
                    Our payments are processed every month. Sometimes there can be delays due to unexpected circumstances, please read the{' '}
                    <Text className="underline text-white font-medium">
                        Terms and Conditions
                    </Text>{' '}
                    for more details
                </Text>
            </LinearGradient>

            <View className='bg-white'>
                <Text className='text-[#3E3E3E] text-base font-medium py-4 px-6 '>Transaction History</Text>

                <View className='shadow-[0_0_4px_0_rgba(0,0,0,0.1)] '>
                    <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#DEDEDE]" onPress={() => router.push("/otherscreens/ProgressHistory")}>

                        {/* Left Section: Icon + Text */}
                        <View className="flex-row items-center">
                            <Image
                                source={require("@/assets/images/banknote.png")}
                                style={{ width: 40, height: 40, resizeMode: 'contain', marginRight: 12 }}
                            />

                            <View>
                                <Text className="text-base font-medium text-[#3E3E3E]">
                                    Money Transferred
                                </Text>
                                <Text className="text-[10px] text-[#767676] mt-1">
                                    15 August 2025
                                </Text>
                            </View>
                        </View>

                        {/* Right Section: Amount + Arrow */}
                        <View className="flex-row items-center gap-2">
                            <Text className="text-[#01B42D] text-base font-medium">
                                ₹20,000
                            </Text>
                            <ChevronRight size={24} color="#868686" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#DEDEDE]">

                        {/* Left Section: Icon + Text */}
                        <View className="flex-row items-center">
                            <Image
                                source={require("@/assets/images/banknote.png")}
                                style={{ width: 40, height: 40, resizeMode: 'contain', marginRight: 12 }}
                            />

                            <View>
                                <Text className="text-base font-medium text-[#3E3E3E]">
                                    Money Transferred
                                </Text>
                                <Text className="text-[10px] text-[#767676] mt-1">
                                    15 August 2025
                                </Text>
                            </View>
                        </View>

                        {/* Right Section: Amount + Arrow */}
                        <View className="flex-row items-center gap-2">
                            <Text className="text-[#01B42D] text-base font-medium">
                                ₹20,000
                            </Text>
                            <ChevronRight size={24} color="#868686" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#DEDEDE]">

                        {/* Left Section: Icon + Text */}
                        <View className="flex-row items-center">
                            <Image
                                source={require("@/assets/images/banknote.png")}
                                style={{ width: 40, height: 40, resizeMode: 'contain', marginRight: 12 }}
                            />

                            <View>
                                <Text className="text-base font-medium text-[#3E3E3E]">
                                    Money Transferred
                                </Text>
                                <Text className="text-[10px] text-[#767676] mt-1">
                                    15 August 2025
                                </Text>
                            </View>
                        </View>

                        {/* Right Section: Amount + Arrow */}
                        <View className="flex-row items-center gap-2">
                            <Text className="text-[#01B42D] text-base font-medium">
                                ₹20,000
                            </Text>
                            <ChevronRight size={24} color="#868686" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default PaymentDetail