import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Header = () => {
    const router = useRouter()
    const [isOnline, setIsOnline] = useState(false);

    return (
        <View className="bg-[#FFFFFF] px-5 pb-3 pt-9">

            {/* Top Header */}
            <View className="flex-row items-center justify-between mt-6">

                {/* Logo & Title */}
                <View className="flex-row items-center">
                    <Image
                        source={require("@/assets/images/kapLogo.png")}
                        resizeMode="contain"
                        style={{ width: 140, height: 40 }}
                    />
                </View>

                <View className='flex-row gap-3'>
                    <TouchableOpacity
                        onPress={() => setIsOnline(!isOnline)}
                        className={`flex-row items-center px-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-400'
                            }`}
                    >
                        <View
                            className={`w-4 h-4 rounded-full mr-2 bg-white ${isOnline ? 'ml-0' : ''
                                }`}
                        />
                        <Text className="text-white font-medium">
                            {isOnline ? 'Online' : 'Offline'}
                        </Text>
                    </TouchableOpacity>

                    {/* Profile Icon */}
                    <TouchableOpacity
                        onPress={() => router.push('/otherscreens/Profile')}
                    >
                        <Image
                            source={require('@/assets/images/profile.png')}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push('/otherscreens/ProfilesAdd')}
                    >
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Header