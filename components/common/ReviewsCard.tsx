import { Star } from 'lucide-react-native'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

const ReviewsCard = ({ }) => {
  return (
    <View className='py-5 pl-5 mb-10'>
      <Text className='text-base font-medium mb-3 text-[#3E3E3E]'>User Reviews</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* card 1 */}
        <View className="bg-white rounded-[10px] p-4 w-80 mr-3 shadow-sm border border-[#DFDFDF] overflow-hidden">
          {/* Review Text */}
          <Text
            className="text-[#3E3E3E] text-base leading-[140%] mb-4"
          >
            I approached Adv. Rakesh Singh for a long-standing land boundary dispute.
            From the very first meeting, they explained the legal process in simple terms
            and guided me step-by-step. Their attention to detail and commitment to my case
            were truly impressive...
          </Text>

          {/* User Info Section */}
          <View className="flex-row items-center mt-2">
            {/* Avatar */}
            <Image
              source={require("@/assets/images/Avatar Image.png")}
              className="w-12 h-12 rounded-full"
            />

            {/* Name + Stars + Date */}
            <View className="ml-3">
              <Text className="font-semibold text-base">Kirti Verma</Text>

              {/* Stars */}
              <View className="flex-row items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#434BEA"
                    stroke="#434BEA"
                    className="mr-1"
                  />
                ))}
              </View>

              <Text className="text-[#7A7A7A] text-sm mt-1">4 June 2025</Text>
            </View>
          </View>
        </View>

        {/* card 2 */}
        <View className="bg-white rounded-[10px] p-4 w-80 mr-3 shadow-sm border border-[#DFDFDF] overflow-hidden">
          {/* Review Text */}
          <Text
            className="text--[#3E3E3E] text-base leading-[140%] mb-4"
          >
            I approached Adv. Rakesh Singh for a long-standing land boundary dispute.
            From the very first meeting, they explained the legal process in simple terms
            and guided me step-by-step. Their attention to detail and commitment to my case
            were truly impressive...
          </Text>

          {/* User Info Section */}
          <View className="flex-row items-center mt-2">
            {/* Avatar */}
            <Image
              source={require("@/assets/images/Avatar Image.png")}
              className="w-12 h-12 rounded-full"
            />

            {/* Name + Stars + Date */}
            <View className="ml-3">
              <Text className="font-semibold text-base">Kirti Verma</Text>

              {/* Stars */}
              <View className="flex-row items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#434BEA"
                    stroke="#434BEA"
                    className="mr-1"
                  />
                ))}
              </View>

              <Text className="text-[#7A7A7A] text-sm mt-1">4 June 2025</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ReviewsCard