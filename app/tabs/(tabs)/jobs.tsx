import Knowledge from "@/components/common/Knowledge";
import JobBoard from "@/components/common/JobBoard";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Check, ChevronRight, CircleChevronRight, Clock, IndianRupee, MessageSquareMore, Phone } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function Tab2() {
  const router = useRouter()

  return (
    <ScrollView className='bg-white'>
      <View className="px-6 py-4">
        <Text className='text-xl font-normal text-[#212121]'>Namaste Rajeev Ji </Text>
        <Text className="text-[#494949] text-xs font-normal">Here is a summary of your activities on Kaptaan</Text>
      </View>
      {/* my progress card */}
      <LinearGradient
        colors={['#4C56EF', '#2431B7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-3xl p-5 mx-6 shadow-[0_0_8px_rgba(0,0,0,0.15)]"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white tracking-[2px] text-[13px] font-medium uppercase">
            My Progress
          </Text>
          <Image
            source={require('@/assets/images/question-line.png')}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
          />
        </View>

        {/* Tabs */}
        <View className="flex-row bg-white/10 rounded-full p-[3px] mb-5">
          <TouchableOpacity className="flex-1 bg-white rounded-full py-2">
            <Text className="text-[#4C56EF] text-center text-[12px] font-semibold">
              Today
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 rounded-full py-2">
            <Text className="text-white text-center text-[12px] font-semibold">
              This month
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 rounded-full py-2">
            <Text className="text-white text-center text-[12px] font-semibold">
              All time
            </Text>
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View className="flex-row justify-between mb-6">
          <View className="items-center flex-1">
            <Text className="text-white text-lg font-bold">₹3,050</Text>
            <View className="flex-row items-center mt-1">
              <IndianRupee size={10} color="#BFD2FF" />
              <Text className="text-[#BFD2FF] text-[10px] ml-1">Earnings</Text>
            </View>
          </View>

          <View className="items-center flex-1">
            <Text className="text-white text-lg font-bold">4:32 hrs</Text>
            <View className="flex-row items-center mt-1">
              <Clock size={10} color="#BFD2FF" />
              <Text className="text-[#BFD2FF] text-[10px] ml-1">Online</Text>
            </View>
          </View>

          <View className="items-center flex-1">
            <Text className="text-white text-lg font-bold">20</Text>
            <View className="flex-row items-center mt-1">
              <MessageSquareMore size={10} color="#BFD2FF" />
              <Text className="text-[#BFD2FF] text-[10px] ml-1">Chats</Text>
            </View>
          </View>

          <View className="items-center flex-1">
            <Text className="text-white text-lg font-bold">5</Text>
            <View className="flex-row items-center mt-1">
              <Phone size={10} color="#BFD2FF" />
              <Text className="text-[#BFD2FF] text-[10px] ml-1">Calls</Text>
            </View>
          </View>
        </View>

        {/* Footer Buttons */}
        <View className="flex-row justify-between items-center">
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-white text-[13px] font-medium mr-1">
              View full history
            </Text>
            <CircleChevronRight size={16} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-full px-4 py-2 flex-row items-center" onPress={() => router.push("/otherscreens/PaymentDetail")}>
            <Text className="text-[#000] text-[13px] font-medium mr-1">
              Payments
            </Text>
            <ChevronRight size={18} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* my price card */}
      <LinearGradient
        colors={['#C400C6', '#4B00C7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-3xl p-5 mt-4 mx-6 shadow-[0_0_8px_rgba(0,0,0,0.15)]"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center mb-5">
          <Text className="text-white tracking-[2px] text-[13px] font-medium uppercase">
            My Prices
          </Text>
          <Image
            source={require('@/assets/images/question-line.png')}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
          />
        </View>

        {/* Prices Section */}
        <View className="flex-row justify-between items-center">
          {/* Chats */}
          <View className="items-start">
            <Text className="text-white text-lg font-semibold">
              ₹<Text className="font-bold">10</Text>
              <Text className="text-sm font-medium text-[#D4BBFF]">/min</Text>
            </Text>
            <View className="flex-row items-center mt-1">
              <MessageSquareMore size={10} color="#D4BBFF" />
              <Text className="text-[#D4BBFF] text-[11px] ml-1">Chats</Text>
            </View>
          </View>

          {/* Calls */}
          <View className="items-start">
            <Text className="text-white text-lg font-semibold">
              ₹<Text className="font-bold">15</Text>
              <Text className="text-sm font-medium text-[#D4BBFF]">/min</Text>
            </Text>
            <View className="flex-row items-center mt-1">
              <Phone size={10} color="#D4BBFF" />
              <Text className="text-[#D4BBFF] text-[11px] ml-1">Calls</Text>
            </View>
          </View>

          {/* Change Button */}
          <TouchableOpacity className="bg-white rounded-full px-4 py-2 flex-row items-center" onPress={() => router.push("/otherscreens/ChangePrice")}>
            <Text className="text-[#000] text-[13px] font-medium mr-1">
              Change
            </Text>
            <ChevronRight size={18} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* my jobs card */}
      <LinearGradient
        colors={['#1F3AA4', '#15A4A4']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        className="rounded-3xl p-5 mt-4 mx-6 shadow-[0_0_8px_rgba(0,0,0,0.15)]"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center mb-5">
          <Text className="text-white tracking-[2px] text-[13px] font-medium uppercase">
            My Jobs
          </Text>
          <Image
            source={require('@/assets/images/question-line.png')}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
          />
        </View>

        {/* Prices Section */}
        <View className="flex-row justify-between items-center">
          {/* Chats */}
          <View className="items-center">
            <Text className="text-white text-lg font-semibold">
              <Text className="font-bold">55</Text>
            </Text>
            <View className="flex-row items-center mt-1">
              <Check size={10} color="#d1d5db" />
              <Text className="text-gray-300 text-[11px] ml-1">Completed</Text>
            </View>
          </View>

          {/* Calls */}
          <View className="items-start">
            <Text className="text-white text-lg font-semibold">
              ₹<Text className="font-bold"> 2,500</Text>
            </Text>
            <View className="flex-row items-center mt-1">
              <IndianRupee size={10} color="#d1d5db" />
              <Text className="text-[#d1d5db] text-[11px] ml-1">Earrings</Text>
            </View>
          </View>

          {/* Change Button */}
          <TouchableOpacity className="bg-white rounded-full px-4 py-2 flex-row items-center">
            <Text className="text-[#000] text-[13px] font-medium mr-1">
              Payments
            </Text>
            <ChevronRight size={18} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <TouchableOpacity onPress={() => router.push("/otherscreens/Benefits")}>
        <Image
          source={require("@/assets/images/activityBg.png")}
          style={{ width: '100%', height: 185, resizeMode: 'contain', marginTop: 16 }}
        />
      </TouchableOpacity>

      <JobBoard />
      <Knowledge />
    </ScrollView>
  );
}
