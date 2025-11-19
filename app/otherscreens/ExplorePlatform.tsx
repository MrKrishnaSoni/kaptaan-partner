import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const ExplorePlatform = () => {
    return (
        <View className='flex-1 justify-center'>
            <Image
                source={require("@/assets/images/watch.png")}
                style={{ width: 80, height: 80, alignSelf: 'center', marginBottom: 24 }}
            />
            <Text className='text-[#212121] text-sm font-semibold text-center'>Your application is under process</Text>

            <Text className='text-4xl font-normal text-[#212121] text-center p-6 leading-[100%]'>Stay Patient, our team will get back to you soon</Text>

            <TouchableOpacity
                activeOpacity={0.8}
                className="bg-[#434BEA] py-4 rounded-full m-4 items-center"
            >
                <Text className="text-white text-base font-medium">Explore Platform</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ExplorePlatform