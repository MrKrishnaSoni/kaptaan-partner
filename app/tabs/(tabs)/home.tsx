import { LinearGradient } from '@/components/ui/LinearGradient ';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Svg, Circle } from "react-native-svg";
import { BlurView } from 'expo-blur';
import JobBoard from '@/components/common/JobBoard';
import Knowledge from '@/components/common/Knowledge';

export default function Tab2() {

  const progress = 76; // percentage
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (circumference * progress) / 100;

  return (
    <ScrollView className='bg-[#fafafa]'>
      <Text className='text-xl font-normal px-6 py-4 text-[#212121]'>Namaste Rajeev Ji </Text>
      <LinearGradient
        className='border border-[#FCA242] py-4 mx-6 px-5 rounded-[20px] flex-row justify-start gap-4 shadow-custom-red'
        colors={['#FCA242', '#FFF6ED']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={{ display: 'flex', alignItems: 'center', }}
      >
        <Image
          source={require("@/assets/images/watch.png")}
          style={{ width: 30, height: 30, resizeMode: 'contain' }}
        />
        <View>
          <Text className='text-xs text-[#212121] font-medium'>Your Profile is under review.</Text>
          <Text className='text-xs text-[#212121] font-normal'>Please wait for 2 to 3 business days.</Text>
        </View>
      </LinearGradient>

      <LinearGradient
        className='border border-[#434BEA] rounded-[20px] mx-6 mt-4 relative overflow-hidden'
        colors={['rgba(255, 255, 255, 1)', 'rgba(67, 75, 234, 0.01)']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <View className="p-5 h-[380px] flex justify-center items-center w-full">
          <Text className='text-center text-[#212121] text-[16px] font-semibold uppercase'>Please complete you profile</Text>

          {/* Circular Progress */}
          <View className="items-center mb-6 mt-4">
            <Svg width="130" height="130">
              <Circle
                cx="65"
                cy="65"
                r={radius}
                stroke="#E5E7EB"
                strokeWidth={strokeWidth}
                fill="none"
              />
              <Circle
                cx="65"
                cy="65"
                r={radius}
                stroke="#22C55E"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                strokeLinecap="round"
                fill="none"
                rotation="-90"
                origin="65,65"
              />
            </Svg>
            <Text className="absolute top-[38%] left-[15%] text-3xl font-bold text-gray-900">
              {progress}%
            </Text>
          </View>

          <ScrollView className="w-full"
            showsVerticalScrollIndicator={false}>
            {/* Upload Profile Picture */}
            <View className="flex-row items-center justify-between mb-4 border-b border-[#E2E2E2] pb-4">
              <View className="flex-1 mr-2">
                <Text className="text-[#212121] text-xs font-medium">Upload your profile picture</Text>
                <Text className="text-[#5B5B5B] text-[10px] font-light">
                  Increases your chance of being {'\n'}of being considered for services
                </Text>
              </View>
              <TouchableOpacity className="bg-[#434BEA] px-3 py-2 rounded-full">
                <Text className="text-white text-[10px] font-medium">Complete now</Text>
              </TouchableOpacity>
            </View>

            {/* Add Bank Account */}
            <View className="flex-row items-center justify-between mb-4 border-b border-[#E2E2E2] pb-4">
              <View className="flex-1 mr-2">
                <Text className="text-[#212121] text-xs font-medium">Add Bank Account</Text>
                <Text className="text-[#5B5B5B] text-[10px] font-light">
                  This will help us pay your earned money to {'\n'}you in your bank account
                </Text>
              </View>
              <TouchableOpacity className="bg-[#434BEA] px-3 py-2 rounded-full">
                <Text className="text-white text-[10px] font-medium">Complete now</Text>
              </TouchableOpacity>
            </View>

            {/* Update Bio */}
            <View className="flex-row items-center justify-between mb-4 border-b border-[#E2E2E2] pb-4">
              <View className="flex-1 mr-2">
                <Text className="text-[#212121] text-xs font-medium">Update your Bio</Text>
                <Text className="text-[#5B5B5B] text-[10px] font-light">
                  People are more inclined to choose you {'\n'}when they know more about you
                </Text>
              </View>
              <View className="bg-[#31B301] px-3 py-2 rounded-full">
                <Text className="text-white text-[10px] font-medium">✓ Completed</Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between border-b border-[#E2E2E2] pb-4">
              <View className="flex-1 mr-2">
                <Text className="text-[#212121] text-xs font-medium">Update your Bio</Text>
                <Text className="text-[#5B5B5B] text-[10px] font-light">
                  People are more inclined to choose you {'\n'}when they know more about you
                </Text>
              </View>
              <View className="bg-[#31B301] px-3 py-2 rounded-full">
                <Text className="text-white text-[10px] font-medium">✓ Completed</Text>
              </View>
            </View>
          </ScrollView>
          <BlurView
            intensity={8}
            tint="light"
            className="absolute bottom-0 left-0 right-0 h-16 rounded-[20px]"
          />
        </View>
      </LinearGradient>

      <JobBoard />
      <Knowledge />

    </ScrollView>
  );
}
