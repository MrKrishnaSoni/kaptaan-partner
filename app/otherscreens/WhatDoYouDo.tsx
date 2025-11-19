import { Scale } from 'lucide-react-native'
import React from 'react'
import { Image, Text, View } from 'react-native'

const WhatDoYouDo = () => {
    return (
        <View className='flex-1 py-10 px-6'>
            <Text className='text-base font-semibold text-[#212121]'>Namaste Rajeev Ji </Text>
            <Text className='text-2xl font-medium text-[#3E3E3E]'>What do you do?</Text>
            <Text className='text-sm font-normal text-[#5B5B5B] mt-3'>This will help us create the right profile for you</Text>


            <View className='mt-8 flex-col gap-5'>
                <View className='flex-row items-center gap-3 border border-[#434BEA] p-5 rounded-[20px] bg-[#F2F2F2]'>
                    <Image
                        source={require('@/assets/images/police.png')}
                        style={{ width: 24, height: 24, resizeMode: 'contain' }}
                    />
                    <Text className='text-base text-[#5B5B5B] font-normal'>Retired Government  Official</Text>
                </View>
                <View className='flex-row items-center gap-3 border border-[#DEDEDE] p-5 rounded-[20px] bg-[#F2F2F2]'>
                    <Scale color='#5B5B5B' />
                    <Text className='text-base text-[#5B5B5B] font-normal'>Lawyer/ Advocate</Text>
                </View>
                <View className='flex-row items-center gap-3 border border-[#DEDEDE] p-5 rounded-[20px] bg-[#F2F2F2]'>
                    <Image
                        source={require('@/assets/images/ngo.png')}
                        style={{ width: 24, height: 24, resizeMode: 'contain' }}
                    />
                    <Text className='text-base text-[#5B5B5B] font-normal'>Non Government Organisation</Text>
                </View>
            </View>
        </View>
    )
}

export default WhatDoYouDo