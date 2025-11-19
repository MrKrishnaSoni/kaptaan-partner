import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const VerifyId = () => {
    return (
        <View className='flex-1 py-10 px-6'>
            <Text className='text-base font-semibold text-[#212121]'>Namaste Rajeev Ji </Text>
            <Text className='text-2xl font-medium text-[#3E3E3E]'>Help us verify your identity</Text>
            <Text className='text-sm font-normal text-[#5B5B5B] mt-3'>This will help us verify your profile and you as an individual</Text>


            <View className='mt-10 flex-col gap-5'>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your ADHAAR Number"
                    keyboardType="default"
                />

                <TouchableOpacity
                    activeOpacity={0.8}
                    className="bg-[#434BEA] py-4 rounded-full mt-3 items-center"
                >
                    <Text className="text-white text-base font-medium">Verify</Text>
                </TouchableOpacity>
            </View>
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

export default VerifyId