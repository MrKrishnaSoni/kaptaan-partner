import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react-native";
import { useRouter } from "expo-router";

const PersonalInfo = () => {

  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 justify-between">

      <View>
        {/* Profile Picture */}
        <View className="items-center mb-10 mt-14">
          <Image
            source={require("@/assets/images/ExpertImagw.png")}
            className="w-28 h-28 rounded-full"
          />
          <Text className="mt-2 text-black font-normal text-sm">
            Upload Profile Picture
          </Text>
        </View>

        {/* Input Fields */}
        <View className="gap-5">
          <TextInput
            placeholder="Adv"
            className="w-full border border-[#CCCCCC] text-[#878787] rounded-xl px-4 py-3 text-base"
            placeholderClassName="text-[#212121]"
          />

          <TextInput
            placeholder="Mridul"
            placeholderClassName="text-[#212121]"
            className="w-full border border-[#CCCCCC] text-[#878787] rounded-xl px-4 py-3 text-base"
          />

          <TextInput
            placeholder="Medium Name"
            placeholderClassName="text-[#212121]"
            className="w-full border border-[#CCCCCC] text-[#878787] rounded-xl px-4 py-3 text-base"
          />

          <TextInput
            placeholder="Goswami"
            placeholderClassName="text-[#212121]"
            className="w-full border border-[#CCCCCC] text-[#878787] rounded-xl px-4 py-3 text-base"
          />
        </View>
      </View>

      {/* Save Button */}
      <View className="sticky bottom-5 pb-10">
        <TouchableOpacity className="bg-[#434BEA] py-4 rounded-full">
          <Text className="text-center text-white font-semibold text-lg">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PersonalInfo