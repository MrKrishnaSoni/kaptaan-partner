import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { User, MapPin, Calendar, FileText, ChevronRight, Mars, } from "lucide-react-native";
import { useRouter } from "expo-router";

const EditProfile = () => {
    const router = useRouter();

    const items = [
        {
            icon: <User size={24} color="#212121" strokeWidth={1.5} />,
            title: "Personal Information",
            subtitle: "Name, Profile Picture",
            link: '/otherscreens/PersonalInfo',
        },
        {
            icon: <MapPin size={24} color="#212121" strokeWidth={1.5} />,
            title: "Location",
            subtitle: "Where do you currently reside",
        },
        {
            icon: <Calendar size={22} color="#212121" strokeWidth={1.5} />,
            title: "Age",
            subtitle: "Date of Birth",
        },
        {
            icon: <Mars size={24} color="#212121" strokeWidth={1.5} />,
            title: "Gender",
            subtitle: "Your biological sex",
        },
        {
            icon: <FileText size={24} color="#212121" strokeWidth={1.5} />,
            title: "Verified Documents",
            subtitle: "View your verified documents / Add more",
              link: '/otherscreens/DocumentGrid',
        },
    ];

    return (
        <ScrollView className="flex-1 bg-white p-6 pt-5">
            {items.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    className="flex-row items-center justify-between py-4"
                    activeOpacity={0.7}
                    onPress={() => router.push(item.link)}
                >
                    <View className="flex-row items-center gap-3">
                        {item.icon}
                        <View>
                            <Text className="text-sm font-normal text-[#212121]">{item.title}</Text>
                            <Text className="text-xs text-[#5B5B5B] texy-normal">{item.subtitle}</Text>
                        </View>
                    </View>

                    <ChevronRight size={22} strokeWidth={1.5} color="#868686" />
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default EditProfile