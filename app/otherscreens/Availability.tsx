import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Clock, Trash2, Plus, MoveRight } from "lucide-react-native";

const daysOfWeek = [
    { label: "Mon", value: "mon" },
    { label: "Tue", value: "tue" },
    { label: "Wed", value: "wed" },
    { label: "Thu", value: "thu" },
    { label: "Fri", value: "fri" },
    { label: "Sat", value: "sat" },
    { label: "Sun", value: "sun" },
];

const Availability = () => {
    const [selectedDays, setSelectedDays] = useState(["mon", "wed", "thu", "fri"]);
    const [offDutyList, setOffDutyList] = useState([
        { day: "Mon", date: "29 Sep 2025" },
        { day: "Tue", date: "30 Sep 2025" },
        { day: "Wed", date: "1 Oct 2025" },
    ]);

    const toggleDay = (day) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    const deleteOffDuty = (index) => {
        setOffDutyList((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <View className="flex-1 bg-white">

            <ScrollView className="flex-1 p-6">
                {/* Header Text */}
                <Text className="text-base text-black font-light mb-4">
                    This will allow people booking sessions from you in advance
                </Text>

                {/* Days Section */}
                <Text className="text-base font-medium text-black mb-3">Days</Text>

                <View className="flex-row flex-wrap gap-2 mb-5">
                    {daysOfWeek.map((day) => {
                        const active = selectedDays.includes(day.value);
                        return (
                            <TouchableOpacity
                                key={day.value}
                                onPress={() => toggleDay(day.value)}
                                className={`px-5 py-3 rounded-full border 
                ${active ? "border-[#2A72F8]" : "border-[#d6d6d6] bg-[#f5f5f5]"}`}
                            >
                                <Text className={active ? "text-[#2A72F8] font-medium" : "text-[#9B9B9B]"}>
                                    {day.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Timings */}
                <Text className="text-base font-medium text-black mb-2">Timings</Text>

                <View className="flex-row justify-between items-center mb-4">
                    {/* Start Time */}
                    <View className="flex items-center gap-1">
                        <Text>Start time</Text>
                        <TouchableOpacity className="w-[45%] border gap-5 border-[#CCCCCC] px-4 py-3 rounded-lg flex-row items-center justify-between">
                            <Text className="text-[#212121] font-medium">9:30 AM</Text>
                            <Clock size={20} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <MoveRight size={65} strokeWidth={1.10} color='#D5D5D5' style={{ marginTop: 20 }} />

                    {/* End Time */}
                    <View className="flex items-center gap-1">
                        <Text>End time</Text>
                        <TouchableOpacity className="w-[45%] border gap-5 border-[#CCCCCC] px-4 py-3 rounded-lg flex-row items-center justify-between">
                            <Text className="text-[#212121] font-medium">5:30 PM</Text>
                            <Clock size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Off Duty */}
                <Text className="text-base font-medium text-black mb-1">Off duty</Text>
                <Text className="text-sm text-[#212121] font-light mb-4">
                    Mark this calendar for the days you wish to be off duty
                </Text>

                {offDutyList.map((item, index) => (
                    <View key={index} className="flex-row justify-between items-center py-3">
                        <View className="flex-row items-center gap-5">
                            <Text className="text-[#A60000] font-medium">{item.day}</Text>
                            <Text className="text-[#F34C5D] text-sm font-light">{item.date}</Text>
                        </View>

                        <TouchableOpacity onPress={() => deleteOffDuty(index)}>
                            <Trash2 size={20} color="#F34C5D" />
                        </TouchableOpacity>
                    </View>
                ))}

                {/* Add off duty */}
                <TouchableOpacity className="mt-6 flex items-end">
                    <View className="flex-row items-center justify-center border border-[#434BEA] rounded-full py-3 w-[130px]" style={{ width: 130 }}>
                        <Plus size={20} color="#434BEA" />
                        <Text className="text-[#434BEA] ml-2 font-medium">Add off duty</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            {/* Save Button */}
            <TouchableOpacity className="bg-[#4C4FF8] py-4 mx-6 mb-6 rounded-full">
                <Text className="text-center text-white font-semibold text-[16px]">
                    Save
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Availability