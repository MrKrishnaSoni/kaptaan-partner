import { Pencil, Star } from 'lucide-react-native'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ReviewsCard from '@/components/common/ReviewsCard';
import { useRouter } from "expo-router";


const Profile = () => {
    const router = useRouter()

    return (
        <ScrollView className="bg-[#FFFDFA]">
            <View className="flex-row items-center py-6 px-5 gap-3 w-full">
                <View className="relative">
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                        className="rounded-full"
                        style={{ width: 60, height: 60 }}
                    />
                    <View className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                </View>

                {/* FIX: Replace w-full with flex-1 */}
                <View className="flex-1">
                    <View>
                        <Text className="text-base font-medium text-[#3E3E3E]">
                            IPS Rajveer Chauhan
                        </Text>

                        <View className="flex-row items-center gap-1">
                            <Star size={14} color="#434BEA" fill="#434BEA" />
                            <Text className="text-xs text-[#767676] font-normal">4.65 Rating</Text>
                        </View>
                    </View>

                    <View className="flex-row justify-between items-center mt-2 w-full">
                        <View className="flex-row gap-1">
                            <Text className="text-[#434BEA] text-sm">Criminal Cases</Text>
                            <Text className="text-[#D6D6D6]">|</Text>
                            <Text className="text-[#434BEA] text-sm">Cyber Crime</Text>
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

            <View className="my-4 bg-[#434bea]/10 p-5 mx-5 rounded-xl flex-row justify-between items-center">

                {/* LEFT BLOCK */}
                <View className="w-2/3 flex-col justify-center items-center border-r border-[#DEDEDE]">
                    <Text className="text-[#3E3E3E] font-medium text-sm">Mon-Sat | 9AM-5PM</Text>

                    <View className="flex-row items-center mt-1">
                        <Text className="text-sm font-normal text-[#888686]">Availability</Text>

                        <TouchableOpacity className="ml-3" onPress={() => router.push("/otherscreens/Availability")}>
                            <View className="flex-row items-center">
                                <Pencil size={14} color="#434bea" strokeWidth={1.5} />
                                <Text className="text-indigo-500 text-sm underline font-medium ml-1">
                                    Edit
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* RIGHT BLOCK */}
                <View className="flex-col justify-center w-1/3 items-center pl-4">
                    <Text className="text-sm font-medium text-[#3E3E3E]">12 Years</Text>
                    <Text className="text-sm font-normal text-[#888686]">Experience</Text>
                </View>

            </View>

            <View className='mx-5 flex-col gap-3'>
                <View className='flex-row justify-between items-center'>
                    <Text className='font-medium text-[#3E3E3E] text-base'>About</Text>
                    <TouchableOpacity>
                        <View className='flex-row gap-1 items-center'>
                            <Pencil size={14} color="#434bea" strokeWidth={1.5} />
                            <Text className="text-indigo-500 text-sm underline font-medium">Edit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text className='text-xs font-normal text-[#767676]'>
                    Specializing in land and property disputes, I handle cases involving land boundary issues, encroachment matters, partition suits, and related real estate conflicts. With a thorough understanding of property laws, I work to protect clients’ ownership rights, resolve complex title disputes, and ensure fair division of assets. My practice includes representing individuals, families, and businesses in court, as well as offering advisory services to prevent future conflicts through proper documentation and legal compliance.
                </Text>
            </View>

            <View className='mx-5 flex-col my-4 gap-3'>
                <View className='flex-row justify-between items-center'>
                    <Text className='font-medium text-[#3E3E3E] text-base'>Experience</Text>
                    <TouchableOpacity onPress={() => router.push("/otherscreens/ExperieneceHold")}>
                        <View className='flex-row gap-1 items-center'>
                            <Pencil size={14} color="#434bea" strokeWidth={1.5} />
                            <Text className="text-indigo-500 text-sm underline font-medium">Edit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="p-4">

                {/* --------------------- Rajasthan Police ---------------------- */}
                <View className="pb-6">

                    {/* Header */}
                    <View className="flex-row items-center">
                        <Image
                            source={require("@/assets/images/policeImg.png")}
                            className="w-12 h-12 mr-3"
                            resizeMode="contain"
                        />
                        <Text className="text-base font-medium text-[#212121]">Rajasthan Police</Text>
                    </View>

                    {/* Item 1 */}
                    <View className='ml-10'>
                        <View className="flex-row pl-3">
                            <View className="items-center mr-4">
                                <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
                                <View className="w-[1px] h-[44px] bg-[#ECECEC]" />
                            </View>
                            <View className="">
                                <Text className="text-sm font-semibold text-[#898989]">Assistant Sub-Inspector</Text>
                                <Text className="text-[#898989] font-light text-xs">2018–2024</Text>
                                <Text className="text-[#898989] font-light text-[10px]">Jaipur, Rajasthan</Text>
                            </View>
                        </View>

                        {/* Item 2 */}
                        <View className="flex-row pl-3">
                            <View className="items-center mr-4">
                                <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
                                <View className="w-[1px] h-[44px] bg-[#ECECEC]" />
                            </View>
                            <View className="">
                                <Text className="text-sm font-semibold text-[#898989]">Head Constable</Text>
                                <Text className="text-[#898989] font-light text-xs">2002-2018</Text>
                                <Text className="text-[#898989] font-light text-[10px]">Ajmer, Rajasthan</Text>
                            </View>
                        </View>

                        {/* Item 3 */}
                        <View className="flex-row pl-3">
                            <View className="items-center mr-4">
                                <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
                            </View>
                            <View className="">
                                <Text className="text-sm font-semibold text-[#898989]">Constable</Text>
                                <Text className="text-[#898989] font-light text-xs">1990-2002</Text>
                                <Text className="text-[#898989] font-light text-[10px]">Bikaner, Rajasthan</Text>
                            </View>
                        </View>
                    </View>

                </View>

                {/* --------------------- Ministry of Finance ---------------------- */}
                <View className="pb-6">

                    {/* Header */}
                    <View className="flex-row items-center mb-4">
                        <Image
                            source={require("@/assets/images/finance.png")}
                            className="w-12 h-12 mr-3"
                            resizeMode="contain"
                        />
                        <Text className="text-base font-medium text-[#212121]">Ministry of Finance</Text>
                    </View>

                    <View className='ml-10'>
                        {/* Item 1 */}
                        <View className="flex-row pl-3">
                            <View className="items-center mr-4">
                                <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
                                <View className="w-[1px] h-[44px] bg-[#ECECEC]" />
                            </View>
                            <View className="">
                                <Text className="text-sm font-semibold text-[#898989]">Comptroller General of India</Text>
                                <Text className="text-[#898989] font-light text-xs">2018–2024</Text>
                                <Text className="text-[#898989] font-light text-[10px]">New Delhi</Text>
                            </View>
                        </View>

                        {/* Item 2 */}
                        <View className="flex-row pl-3">
                            <View className="items-center mr-4">
                                <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
                                <View className="w-[1px] h-[44px] bg-[#ECECEC]" />
                            </View>
                            <View className="">
                                <Text className="text-sm font-semibold text-[#898989]">Comptroller General of India</Text>
                                <Text className="text-[#898989] font-light text-xs">2018–2024</Text>
                                <Text className="text-[#898989] font-light text-[10px]">New Delhi</Text>
                            </View>
                        </View>

                        {/* Item 3 */}
                        <View className="flex-row pl-3">
                            <View className="items-center mr-4">
                                <View className="w-3 h-3 rounded-full bg-[#D9D9D9] mt-1" />
                            </View>
                            <View className="">
                                <Text className="text-sm font-semibold text-[#898989]">Comptroller General of India</Text>
                                <Text className="text-[#898989] font-light text-xs">2018–2024</Text>
                                <Text className="text-[#898989] font-light text-[10px]">New Delhi</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>

            <ReviewsCard />

        </ScrollView>
    )
}

export default Profile