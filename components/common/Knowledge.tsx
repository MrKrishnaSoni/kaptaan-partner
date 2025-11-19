import { ChevronRight } from 'lucide-react-native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from "expo-router";


const Knowledge = () => {
  const router = useRouter()

  return (
    <View className='mt-4 bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] p-5'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-base font-medium text-[#3E3E3E]'>Knowledge</Text>
        <TouchableOpacity><Text className='border-b border-[#434BEA] text-sm font-medium text-[#434BEA]'>View All</Text></TouchableOpacity>
      </View>
      <TouchableOpacity className="flex-row mt-4 border-b border-[#ECECEC] pb-4 items-start" onPress={() => router.push("/otherscreens/KnowledgeDetail")}>
        {/* Left Image */}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=80' }}
          className="w-[70px] h-[70px] rounded-xl mr-3"
        />

        {/* Right Content */}
        <View className="flex-1">
          {/* Title */}
          <Text className="text-[14px] font-semibold text-[#1E1E1E] mb-1 leading-5">
            How to File an FIR Without Going to a Police Station
          </Text>

          {/* Description */}
          <Text
            className="text-[12px] text-[#5B5B5B] leading-4 mb-2"
            numberOfLines={2}
          >
            You don’t always need to visit your local thana. This post breaks down
            online FIR...
          </Text>

          {/* Read More */}
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-[#434BEA] text-[12px] font-medium mr-1">
              Read more
            </Text>
            <ChevronRight size={14} color="#434BEA" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View className="flex-row mt-4 border-b border-[#ECECEC] pb-4 items-start">
        {/* Left Image */}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=80' }}
          className="w-[70px] h-[70px] rounded-xl mr-3"
        />

        {/* Right Content */}
        <View className="flex-1">
          {/* Title */}
          <Text className="text-[14px] font-semibold text-[#1E1E1E] mb-1 leading-5">
            How to File an FIR Without Going to a Police Station
          </Text>

          {/* Description */}
          <Text
            className="text-[12px] text-[#5B5B5B] leading-4 mb-2"
            numberOfLines={2}
          >
            You don’t always need to visit your local thana. This post breaks down
            online FIR...
          </Text>

          {/* Read More */}
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-[#434BEA] text-[12px] font-medium mr-1">
              Read more
            </Text>
            <ChevronRight size={14} color="#434BEA" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row mt-4 border-b border-[#ECECEC] pb-4 items-start">
        {/* Left Image */}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=80' }}
          className="w-[70px] h-[70px] rounded-xl mr-3"
        />

        {/* Right Content */}
        <View className="flex-1">
          {/* Title */}
          <Text className="text-[14px] font-semibold text-[#1E1E1E] mb-1 leading-5">
            How to File an FIR Without Going to a Police Station
          </Text>

          {/* Description */}
          <Text
            className="text-[12px] text-[#5B5B5B] leading-4 mb-2"
            numberOfLines={2}
          >
            You don’t always need to visit your local thana. This post breaks down
            online FIR...
          </Text>

          {/* Read More */}
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-[#434BEA] text-[12px] font-medium mr-1">
              Read more
            </Text>
            <ChevronRight size={14} color="#434BEA" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Knowledge