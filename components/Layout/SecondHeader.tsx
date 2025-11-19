import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

type WalletHeaderProps = {
    title: string;
    rightElement?: React.ReactNode; // 👈 allows extra content
};

const SecondHeader: React.FC<WalletHeaderProps> = ({ title, rightElement }) => {
    const router = useRouter();
    return (
        <View className="px-3 py-4 flex-row items-center justify-between sticky mt-10 z-10 border-b border-[#ECECEC]">
            <View className='flex-row items-center gap-3'>
                <TouchableOpacity onPress={() => router.back()}>
                    <ArrowLeft size={22} stroke="#333" />
                </TouchableOpacity>

                <Text className="text-[15px] font-medium text-[#333]">{title}</Text>
            </View>

            {/* Show custom element if provided, else keep space */}
            <View>{rightElement || null}</View>
        </View>
    )
}

export default SecondHeader