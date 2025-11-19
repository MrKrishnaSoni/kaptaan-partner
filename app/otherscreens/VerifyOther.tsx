import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const VerifyOther = () => {
    return (
        <View className='flex-1 py-10 px-6'>
            <Text className='text-base font-semibold text-[#212121]'>Namaste Rajeev Ji </Text>
            <Text className='text-2xl font-medium text-[#3E3E3E]'>Help us verify your identity</Text>
            <Text className='text-sm font-normal text-[#5B5B5B] mt-3'>We need a few more documents to proceed with your verification</Text>


            <View className='mt-10 flex-col gap-5'>
                <View className='relative'>
                    <TextInput
                        style={styles.input}
                        placeholder="Last Department ID Card"
                        keyboardType="default"
                    />

                    <TouchableOpacity className='bg-[#2563EB] rounded-e-[10px] h-[52px] justify-center items-center w-[110px] mt-5 absolute bottom-0 right-0'>
                        <Text className='text-white text-base font-medium'>Upload</Text>
                    </TouchableOpacity>
                </View>

                <View className='relative'>
                    <TextInput
                        style={styles.input}
                        placeholder="Your PPO "
                        keyboardType="default"
                    />

                    <TouchableOpacity className='bg-[#2563EB] rounded-e-[10px] h-[52px] justify-center items-center w-[110px] mt-5 absolute bottom-0 right-0'>
                        <Text className='text-white text-base font-medium'>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text className='text-[10px] text-[#212121] font-norma mt-1 ml-1'>PPO is <Text className='font-semibold'>Pension Payment Order</Text>. This is issued after your retirement.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 52,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 12,
        padding: 10,
        fontSize: 16,
        color: "#878787"
    },
});

export default VerifyOther