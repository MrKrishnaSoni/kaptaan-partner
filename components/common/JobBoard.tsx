import React from 'react'
import { LinearGradient } from '@/components/ui/LinearGradient ';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from "expo-router";

const JobBoard = () => {
  const router = useRouter()

  return (
    <LinearGradient
      className='border border-[#DEDEDE] mt-4'
      colors={['#EDEDFF', '#C4C7F2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View className='bg-[#434BEA] flex-row justify-between p-5 items-center'>
        <Text className='text-white font-semibold text-[15px]'>Job Board</Text>
        <TouchableOpacity>
          <Text className='border-b border-white text-xs font-medium text-white'>View All</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity className="bg-white p-4 flex-row justify-between items-start w-full" onPress={() => router.push("/otherscreens/JobDetail")}>
          {/* Left Content */}
          <View className="flex-1 pr-2">
            {/* Title + Tag */}
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-[15px] font-semibold text-[#1E1E1E] flex-shrink">
                Ancestral Property Dispute
              </Text>
              <View className="border border-[#434BEA] px-2 py-[2px] rounded-full">
                <Text className="text-[#4F46E5] text-[10px] font-medium uppercase">
                  Immediate
                </Text>
              </View>
            </View>

            {/* Description */}
            <Text
              className="text-[12px] text-[#5B5B5B] leading-4"
              numberOfLines={2}
            >
              Looking for a property and family lawyer who can help with documentation,
              filing, and court representation...
            </Text>

            {/* Avatars + Responses */}
            <View className="flex-row items-center justify-between mt-3">
              {/* Avatars */}
              <View className='flex-row items-center'>
                <View className="flex-row -space-x-2">
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                    className="w-7 h-7 rounded-full border border-white"
                  />
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/women/45.jpg' }}
                    className="w-7 h-7 rounded-full border border-white absolute left-4"
                  />
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/12.jpg' }}
                    className="w-7 h-7 rounded-full border border-white absolute left-8"
                  />
                </View>

                {/* Responses */}
                <TouchableOpacity className="ml-10">
                  <Text className="text-[#4F46E5] text-[12px] font-medium">
                    4 Responses
                  </Text>
                </TouchableOpacity>
              </View>

              <Text className="text-[11px] text-[#9CA3AF]">5 days ago</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View className="bg-white p-4 flex-row justify-between items-start w-full">
          {/* Left Content */}
          <View className="flex-1 pr-2">
            {/* Title + Tag */}
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-[15px] font-semibold text-[#1E1E1E] flex-shrink">
                Ancestral Property Dispute
              </Text>
              <View className="border border-[#434BEA] px-2 py-[2px] rounded-full">
                <Text className="text-[#4F46E5] text-[10px] font-medium uppercase">
                  Immediate
                </Text>
              </View>
            </View>

            {/* Description */}
            <Text
              className="text-[12px] text-[#5B5B5B] leading-4"
              numberOfLines={2}
            >
              Looking for a property and family lawyer who can help with documentation,
              filing, and court representation...
            </Text>

            {/* Avatars + Responses */}
            <View className="flex-row items-center justify-between mt-3">
              {/* Avatars */}
              <View className='flex-row items-center'>
                <View className="flex-row -space-x-2">
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                    className="w-7 h-7 rounded-full border border-white"
                  />
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/women/45.jpg' }}
                    className="w-7 h-7 rounded-full border border-white absolute left-4"
                  />
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/12.jpg' }}
                    className="w-7 h-7 rounded-full border border-white absolute left-8"
                  />
                </View>

                {/* Responses */}
                <TouchableOpacity className="ml-10">
                  <Text className="text-[#4F46E5] text-[12px] font-medium">
                    4 Responses
                  </Text>
                </TouchableOpacity>
              </View>

              <Text className="text-[11px] text-[#9CA3AF]">5 days ago</Text>
            </View>
          </View>
        </View>
        <View className="bg-white p-4 flex-row justify-between items-start w-full">
          {/* Left Content */}
          <View className="flex-1 pr-2">
            {/* Title + Tag */}
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-[15px] font-semibold text-[#1E1E1E] flex-shrink">
                Ancestral Property Dispute
              </Text>
              <View className="border border-[#434BEA] px-2 py-[2px] rounded-full">
                <Text className="text-[#4F46E5] text-[10px] font-medium uppercase">
                  Immediate
                </Text>
              </View>
            </View>

            {/* Description */}
            <Text
              className="text-[12px] text-[#5B5B5B] leading-4"
              numberOfLines={2}
            >
              Looking for a property and family lawyer who can help with documentation,
              filing, and court representation...
            </Text>

            {/* Avatars + Responses */}
            <View className="flex-row items-center justify-between mt-3">
              {/* Avatars */}
              <View className='flex-row items-center'>
                <View className="flex-row -space-x-2">
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                    className="w-7 h-7 rounded-full border border-white"
                  />
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/women/45.jpg' }}
                    className="w-7 h-7 rounded-full border border-white absolute left-4"
                  />
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/12.jpg' }}
                    className="w-7 h-7 rounded-full border border-white absolute left-8"
                  />
                </View>

                {/* Responses */}
                <TouchableOpacity className="ml-10">
                  <Text className="text-[#4F46E5] text-[12px] font-medium">
                    4 Responses
                  </Text>
                </TouchableOpacity>
              </View>

              <Text className="text-[11px] text-[#9CA3AF]">5 days ago</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default JobBoard