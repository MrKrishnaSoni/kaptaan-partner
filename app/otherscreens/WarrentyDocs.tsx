import React, { memo, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Pressable,
} from "react-native";
import {
    Upload,
    Download,
    HelpCircle,
    MoreVertical,
} from "lucide-react-native";

/* ===============================
   Data
================================= */
const AGREEMENTS = [
    { id: 1, name: "Manoj Dessai.pdf", date: "December 17, 2025" },
    { id: 2, name: "Subhash Saini.pdf", date: "December 17, 2025" },
];

/* ===============================
   Action Button
================================= */
const ActionButton = memo(({ icon, label }: any) => (
    <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row items-center gap-2 border border-[#E2E2E2] px-3 py-1.5 rounded-full"
    >
        <View>{icon}</View>
        <Text className="text-sm font-normal text-[#434BEA]">
            {label}
        </Text>
    </TouchableOpacity>
));

/* ===============================
   Agreement Card
================================= */
const AgreementCard = memo(
    ({ name, date }: { name: string; date: string }) => {
        const [showHelp, setShowHelp] = useState(false);
        const [showMore, setShowMore] = useState(false);

        const closeAll = () => {
            setShowHelp(false);
            setShowMore(false);
        };

        return (
            <Pressable onPress={closeAll}>
                <View className="mb-4 rounded-xl bg-white border border-[#e9e7e7] p-4">
                    {/* Title */}
                    <View className="mb-4 flex-row justify-between">
                        <Text className="text-base font-medium text-[#212121]">
                            {name}
                        </Text>
                        <Text className="text-xs text-[#5B5B5B]">
                            {date}
                        </Text>
                    </View>

                    {/* Actions */}
                    <View className="flex-row items-center justify-between">
                           <ActionButton
                                icon={<Upload size={16} color="#4F46E5" />}
                                label="Update"
                            />
                            <ActionButton
                                icon={<Download size={16} color="#4F46E5" />}
                                label="Download"
                            />

                            {/* Help Button */}
                            <View className="relative">
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        setShowHelp(!showHelp);
                                        setShowMore(false);
                                    }}
                                    className="flex-row items-center border border-gray-200 px-3 py-1.5 rounded-full"
                                >
                                    <HelpCircle size={16} color="#4F46E5" />
                                    <Text className="ml-2 text-xs font-medium text-[#4F46E5]">
                                        Help
                                    </Text>
                                </TouchableOpacity>

                                {showHelp && (
                                    <View className="absolute top-9 left-0 w-40 rounded-lg border border-gray-200 bg-white shadow-sm"
                                        style={{ elevation: 10, zIndex: 999 }}>
                                        {["View Help", "Contact Support", "FAQ"].map(
                                            (item) => (
                                                <TouchableOpacity
                                                    key={item}
                                                    onPress={closeAll}
                                                    className="px-4 py-2"
                                                >
                                                    <Text className="text-sm text-gray-700">
                                                        {item}
                                                    </Text>
                                                </TouchableOpacity>
                                            )
                                        )}
                                    </View>
                                )}
                            </View>

                        {/* More Options */}
                        <View className="relative">
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setShowMore(!showMore);
                                    setShowHelp(false);
                                }}
                                className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center"
                            >
                                <MoreVertical size={16} color="#6B7280" />
                            </TouchableOpacity>

                            {showMore && (
                                <View className="absolute right-0 top-9 z-10 w-36 rounded-lg border border-gray-200 bg-white shadow-sm">
                                    {["Rename", "Share", "Delete"].map((item) => (
                                        <TouchableOpacity
                                            key={item}
                                            onPress={closeAll}
                                            className="px-4 py-2"
                                        >
                                            <Text
                                                className={`text-sm ${item === "Delete"
                                                    ? "text-red-500"
                                                    : "text-gray-700"
                                                    }`}
                                            >
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    }
);

/* ===============================
   Main Screen
================================= */
const WarrentyDocs = () => {
    return (
        <ScrollView
            className="flex-1 bg-[#FAFAFA] px-5 pt-5"
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <View className="mb-5 flex-row items-center justify-between border-b border-[#ECECEC] pb-4">
                <View className="flex-row items-center">
                    <Text className="text-base font-medium text-[#303030]">
                        Agreement List
                    </Text>
                    <View className="ml-2 rounded-full bg-gray-200 px-2 py-1 items-center justify-center">
                        <Text className="text-xs font-semibold text-[#212121]">
                            {AGREEMENTS.length}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity className="rounded-full border border-[#434BEA] px-4 py-2">
                    <Text className="text-sm font-normal text-[#434BEA]">
                        Select
                    </Text>
                </TouchableOpacity>
            </View>

            {AGREEMENTS.map((item) => (
                <AgreementCard
                    key={item.id}
                    name={item.name}
                    date={item.date}
                />
            ))}
        </ScrollView>
    );
};

export default WarrentyDocs;
