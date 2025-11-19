import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox'
import { CheckIcon } from 'lucide-react-native'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native'

const ChangePrice = () => {
    return (
        <View className='flex-1 bg-[#F6F6F6] px-4 py-6'>
            <ScrollView>

                {/* Price boxes */}
                <View className="space-y-4">
                    {/* Call */}
                    <View className="flex-row justify-between items-center border border-[#434BEA] rounded-2xl p-3 bg-white">
                        <View className="flex-row items-center">
                            <Image
                                source={require("@/assets/images/call.png")}
                                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                            />
                            <Text className="ml-2 text-[#626262] font-semibold text-base">Call</Text>
                        </View>

                        <View className="flex-row items-center gap-5">
                            <Text className="text-[#434BEA] text-lg font-semibold">−</Text>

                            <Text className="text-[#212121] text-center text-2xl font-semibold">
                                ₹15<Text className="text-gray-400 text-sm">{'\n'}/min</Text>
                            </Text>

                            <Text className="text-[#434BEA] text-lg font-semibold">+</Text>
                        </View>
                    </View>

                    {/* Chat */}
                    <View className="flex-row justify-between items-center border border-[#434BEA] rounded-2xl mt-4 p-4 bg-white">
                        <View className="flex-row items-center">
                            <Image
                                source={require("@/assets/images/chat.png")}
                                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                            />
                            <Text className="ml-2 text-[#626262] font-semibold text-base">Chat</Text>
                        </View>

                        <View className="flex-row items-center gap-5">
                            <Text className="text-[#434BEA] text-lg font-semibold">−</Text>

                            <Text className="text-[#212121] text-center text-2xl font-semibold">
                                ₹18<Text className="text-gray-400 text-sm">{'\n'}/min</Text>
                            </Text>

                            <Text className="text-[#434BEA] text-lg font-semibold">+</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* Info Box */}
            <View className="bg-[#EBECFF] border border-[#C9CEFF] rounded-xl p-4 mt-6">
                <Text className="text-[#434BEA] text-sm">
                    Price updates are not instantaneous and may take some time to reflect.
                </Text>
            </View>

            {/* Checkbox and terms */}
            <View className="mt-4 p-3">
                <Checkbox isDisabled={false} isInvalid={false} size="md">
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} className='bg-[#434BEA]' />
                    </CheckboxIndicator>
                    <CheckboxLabel> <Text className="text-[12px] text-[#595959]">
                        I agree and understand the consequences of changing the price and I agree to{' '}
                        <Text className="underline font-semibold">Terms and Conditions</Text>
                    </Text></CheckboxLabel>
                </Checkbox>
            </View>

            {/* Button */}
            <TouchableOpacity className="bg-[#434BEA] py-4 mb-4 rounded-full mt-4 items-center">
                <Text className="text-white text-base font-medium">Update Prices</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangePrice