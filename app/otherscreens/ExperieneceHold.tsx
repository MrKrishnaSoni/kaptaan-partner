import { Pencil } from 'lucide-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useRouter } from "expo-router";


const ExperieneceHold = () => {
    const router = useRouter()
  return (
    <View className="p-4 bg-white flex-1">

      {/* --------------------- Rajasthan Police ---------------------- */}
      <View className="pb-10">

        {/* Header */}
        <View className="flex-row items-center mb-5">
          <Image
            source={require("@/assets/images/policeImg.png")}
            className="w-14 h-14 mr-4"
            resizeMode="contain"
          />
          <Text className="text-base font-medium text-[#212121]">Rajasthan Police</Text>
        </View>

        {/* Item 1 */}
        <View className='ml-14'>
          <View className="flex-row pl-3">
            <View className="items-center mr-4">
              <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
              <View className="w-[1px] h-[44px] bg-[#ECECEC]" />
            </View>

            {/* ADD flex-1 HERE */}
            <View className="flex-row justify-between flex-1">
              <View>
                <Text className="text-sm font-semibold text-[#898989]">Assistant Sub-Inspector</Text>
                <Text className="text-[#898989] font-light text-xs">2018–2024</Text>
                <Text className="text-[#898989] font-light text-[10px]">Jaipur, Rajasthan</Text>
              </View>

              <TouchableOpacity  onPress={() => router.push("/otherscreens/EditExperience")}>
                <View className="flex-row gap-1 items-center">
                  <Pencil size={14} color="#434bea" strokeWidth={1.5} />
                  <Text className="text-indigo-500 text-sm underline font-medium">Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Item 2 */}
          <View className="flex-row pl-3">
            <View className="items-center mr-4">
              <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
              <View className="w-[1px] h-[44px] bg-[#ECECEC]" />
            </View>
            <View className='flex-row flex-1 justify-between'>
              <View className="">
                <Text className="text-sm font-semibold text-[#898989]">Head Constable</Text>
                <Text className="text-[#898989] font-light text-xs">2002-2018</Text>
                <Text className="text-[#898989] font-light text-[10px]">Ajmer, Rajasthan</Text>
              </View>
              <TouchableOpacity>
                <View className='flex-row gap-1 items-center'>
                  <Pencil size={14} color="#434bea" strokeWidth={1.5} />
                  <Text className="text-indigo-500 text-sm underline font-medium">Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Item 3 */}
          <View className="flex-row pl-3">
            <View className="items-center mr-4">
              <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
            </View>
            <View className='flex-row flex-1 justify-between'>
              <View className="">
                <Text className="text-sm font-semibold text-[#898989]">Constable</Text>
                <Text className="text-[#898989] font-light text-xs">1990-2002</Text>
                <Text className="text-[#898989] font-light text-[10px]">Bikaner, Rajasthan</Text>
              </View>
              <TouchableOpacity>
                <View className='flex-row gap-1 items-center'>
                  <Pencil size={14} color="#434bea" strokeWidth={1.5} />
                  <Text className="text-indigo-500 text-sm underline font-medium">Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>

      {/* --------------------- Ministry of Finance ---------------------- */}
      <View className="pb-10">

        {/* Header */}
        <View className="flex-row items-center mb-5">
          <Image
            source={require("@/assets/images/finance.png")}
            className="w-14 h-14 mr-4"
            resizeMode="contain"
          />
          <Text className="text-base font-medium text-[#212121]">Ministry of Finance</Text>
        </View>

        <View className='ml-14'>
          {/* Item 1 */}
          <View className="flex-row pl-3">
            <View className="items-center mr-4">
              <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
              <View className="w-[1px] h-[44px] bg-[#ECECEC]" />
            </View>
            <View className='flex-row flex-1 justify-between'>
              <View className="">
                <Text className="text-sm font-semibold text-[#898989]">Comptroller General of India</Text>
                <Text className="text-[#898989] font-light text-xs">2018–2024</Text>
                <Text className="text-[#898989] font-light text-[10px]">New Delhi</Text>
              </View>
              <TouchableOpacity>
                <View className='flex-row gap-1 items-center'>
                  <Pencil size={14} color="#434bea" strokeWidth={1.5} />
                  <Text className="text-indigo-500 text-sm underline font-medium">Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Item 2 */}
          <View className="flex-row pl-3">
            <View className="items-center mr-4">
              <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
              <View className="w-[1px] h-[44px] bg-[#ECECEC]" />
            </View>
            <View className="flex-row justify-between flex-1">
              <View className="">
                <Text className="text-sm font-semibold text-[#898989]">Comptroller General of India</Text>
                <Text className="text-[#898989] font-light text-xs">2018–2024</Text>
                <Text className="text-[#898989] font-light text-[10px]">New Delhi</Text>
              </View>
              <TouchableOpacity>
                <View className='flex-row gap-1 items-center'>
                  <Pencil size={14} color="#434bea" strokeWidth={1.5} />
                  <Text className="text-indigo-500 text-sm underline font-medium">Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Item 3 */}
          <View className="flex-row pl-3">
            <View className="items-center mr-4">
              <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
            </View>
            <View className="flex-row justify-between flex-1">
              <View className="">
                <Text className="text-sm font-semibold text-[#898989]">Comptroller General of India</Text>
                <Text className="text-[#898989] font-light text-xs">2018–2024</Text>
                <Text className="text-[#898989] font-light text-[10px]">New Delhi</Text>
              </View>
              <TouchableOpacity>
                <View className='flex-row gap-1 items-center'>
                  <Pencil size={14} color="#434bea" strokeWidth={1.5} />
                  <Text className="text-indigo-500 text-sm underline font-medium">Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    </View>
  )
}

export default ExperieneceHold