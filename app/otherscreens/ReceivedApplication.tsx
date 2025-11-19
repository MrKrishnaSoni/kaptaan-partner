import React from 'react'
import { Image, Text, View } from 'react-native'

const ReceivedApplication = () => {
    return (
        <View className='flex-1 justify-center'>
            <Image
                source={require("@/assets/images/check-circle.png")}
                style={{ width: 95, height: 95, alignSelf: 'center', marginBottom: 24 }}
            />
            <Text className='text-[#212121] text-sm font-semibold text-center'>We have received your application</Text>
        </View>
    )
}

export default ReceivedApplication