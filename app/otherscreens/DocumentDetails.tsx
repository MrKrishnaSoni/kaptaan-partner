import { Download } from 'lucide-react-native'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Share2, Sparkles, User, Users } from 'lucide-react-native';


const ActionButton = ({ icon, label }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row items-center gap-2 border border-[#E2E2E2] px-4 py-2 rounded-full"
    >
        <View>{icon}</View>
        <Text className="text-xs font-medium text-[#434BEA]">
            {label}
        </Text>
    </TouchableOpacity>
);

const versions = [
    { id: 1, title: "Latest Version", date: "December 17, 2025", time: "09:00 am" },
    { id: 2, title: "V_04", date: "December 09, 2025", time: "06:35 pm" },
    { id: 3, title: "V_03", date: "December 09, 2025", time: "02:58 pm" },
    { id: 4, title: "V_02", date: "December 09, 2025", time: "11:03 am" },
    { id: 5, title: "V_01", date: "December 09, 2025", time: "07:45 am" },
];
const DocumentDetails = () => {
    return (
        <ScrollView className="flex-1 bg-white">
            <Image
                source={require('../../assets/images/bgDcos.png')}
                className="h-[140px] mb-6"
                resizeMode="cover"
            />

            <View className='px-6'>
                {/* Date */}
                <Text className="text-sm text-[#303030] mb-1">
                    December 17, 2025
                </Text>

                {/* File Name */}
                <Text className="text-xl font-semibold text-[#303030] mb-4">
                    Manoj Dessai.pdf
                </Text>

                {/* Action Buttons */}
                <View className="flex-row flex-wrap gap-3 mb-8">
                    <ActionButton icon={<Sparkles size={14} color='#434BEA' />} label="Analyze With AI" />
                    <ActionButton icon={<Share2 size={14} color='#434BEA' />} label="Share For Signing" />
                    <ActionButton icon={<User size={14} color='#434BEA' />} label="Share With Expert" />
                    <ActionButton icon={<Users size={14} color='#434BEA' />} label="Share With Officers" />
                </View>

                {/* Version History */}
                <Text className="text-base font-medium text-[#303030] mb-5">
                    Version History
                </Text>

                <View className="">
                    {versions.map((item, index) => (
                        <View key={item.id} className="flex-row">

                            {/* Timeline */}
                            <View className="items-center mr-4">
                                <View className="w-5 h-5 border border-[#C3C3C3] flex justify-center items-center bg-[#9443EA] rounded-full" />
                                {index !== versions.length - 1 && (
                                    <View className="w-[1px] flex-1 bg-purple-300" />
                                )}
                            </View>

                            {/* Content */}
                            <View className="flex-1 mb-5">
                                <Text className="text-sm font-medium text-[#212121]">
                                    {item.title}
                                </Text>
                                <Text className="text-xs text-[#5B5B5B]">
                                    {item.date} | {item.time}
                                </Text>
                            </View>

                            {/* Download */}
                            <TouchableOpacity className="w-9 h-9 rounded-full border border-gray-200 items-center justify-center">
                                <Download size={16} color="#4F46E5" />
                            </TouchableOpacity>

                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default DocumentDetails