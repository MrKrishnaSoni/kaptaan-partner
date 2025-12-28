import React, { memo, useRef, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Pressable,
    Modal,
    TouchableWithoutFeedback,
    Dimensions,
    Image,
} from "react-native";
import {
    Upload,
    Download,
    HelpCircle,
    MoreVertical,
} from "lucide-react-native";
import {
    PhoneCall,
    Info,
    Edit,
    Share2,
    Trash2,
} from "lucide-react-native";


/* ===============================
   Constants
================================= */
const DROPDOWN_WIDTH = 176; // same as w-44
const SCREEN_WIDTH = Dimensions.get("window").width;

/* ===============================
   Data
================================= */
const AGREEMENTS = [
    { id: 1, name: "Manoj Dessai.pdf", date: "December 17, 2025" },
    { id: 2, name: "Subhash Saini.pdf", date: "December 17, 2025" },
];

const helpOptions = [
    {
        label: "Analyze with AI",
        icon: <Image source={require("@/assets/images/dd2.png")}
            style={{ width: 16, height: 16, resizeMode: "contain" }}
        />,
    },
    {
        label: "Discuss with Officers",
        icon: <Image source={require("@/assets/images/dd3.png")}
            style={{ width: 18, height: 18, resizeMode: "contain" }}
        />,
    },
    {
        label: "Opinion from Expert",
        icon: <Image source={require("@/assets/images/dd4.png")}
            style={{ width: 16, height: 16, resizeMode: "contain" }}
        />,
    },
    {
        label: "Share for Signing",
        icon: <Image source={require("@/assets/images/dd5.png")}
            style={{ width: 16, height: 16, resizeMode: "contain" }}
        />,
    },
];

const moreOptions = [
    {
        label: "View Details",
        icon: <Image source={require("@/assets/images/dd1.png")}
            style={{ width: 16, height: 16, resizeMode: "contain" }}
        />,
    },
    {
        label: "Delete",
        icon: <Trash2 size={16} color="#EF4444" />,
    },
];


/* ===============================
   Modal Dropdown (Safe Position)
================================= */
const Dropdown = ({ visible, options, position, onClose, onSelect }: any) => {
    if (!visible) return null;

    return (
        <Modal transparent animationType="fade">
            <TouchableWithoutFeedback onPress={onClose}>
                <View className="flex-1">
                    <View
                        style={{
                            position: "absolute",
                            top: position.y,
                            left: position.x,
                        }}
                        className="w-48 rounded-lg border border-gray-200 bg-white shadow-lg"
                    >
                        {options.map((item: any) => (
                            <TouchableOpacity
                                key={item.label}
                                onPress={() => {
                                    onSelect(item.label);
                                    onClose();
                                }}
                                className="flex-row items-center gap-2 px-4 py-3"
                            >
                                {item.icon}
                                <Text
                                    className={`text-sm ${item.label === "Delete"
                                        ? "text-red-500"
                                        : "text-gray-700"
                                        }`}
                                >
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};


/* ===============================
   Action Button
================================= */
const ActionButton = memo(({ icon, label }: any) => (
    <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row items-center gap-2 border border-[#E2E2E2] px-3 py-1.5 rounded-full"
    >
        {icon}
        <Text className="text-sm text-[#434BEA]">{label}</Text>
    </TouchableOpacity>
));

/* ===============================
   Agreement Card
================================= */
const AgreementCard = memo(
    ({ name, date }: { name: string; date: string }) => {
        const helpRef = useRef<any>(null);
        const moreRef = useRef<any>(null);

        const [showHelp, setShowHelp] = useState(false);
        const [showMore, setShowMore] = useState(false);
        const [dropdownPos, setDropdownPos] = useState({ x: 0, y: 0 });

        const closeAll = () => {
            setShowHelp(false);
            setShowMore(false);
        };

        /* 🔥 Position-safe dropdown opener */
        const openDropdown = (ref: any, type: "help" | "more") => {
            ref.current?.measureInWindow(
                (x: number, y: number, w: number, h: number) => {
                    let finalX = x;

                    // Prevent right overflow
                    if (x + DROPDOWN_WIDTH > SCREEN_WIDTH) {
                        finalX = SCREEN_WIDTH - DROPDOWN_WIDTH - 12;
                    }

                    // Prevent left overflow
                    if (finalX < 12) {
                        finalX = 12;
                    }

                    setDropdownPos({
                        x: finalX,
                        y: y + h + 8,
                    });

                    type === "help" ? setShowHelp(true) : setShowMore(true);
                }
            );
        };

        return (
            <Pressable onPress={closeAll}>
                <View className="mb-4 rounded-xl bg-white border border-[#E9E7E7] p-4">
                    {/* Title */}
                    <View className="mb-4 flex-row justify-between">
                        <Text className="text-base font-medium text-[#212121]">
                            {name}
                        </Text>
                        <Text className="text-xs text-[#5B5B5B]">{date}</Text>
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

                        {/* Help Dropdown */}
                        <TouchableOpacity
                            ref={helpRef}
                            onPress={() => {
                                closeAll();
                                openDropdown(helpRef, "help");
                            }}
                            className="flex-row items-center border border-gray-200 px-3 py-1.5 rounded-full"
                        >
                            <HelpCircle size={16} color="#4F46E5" />
                            <Text className="ml-2 text-xs font-medium text-[#4F46E5]">
                                Help
                            </Text>
                        </TouchableOpacity>

                        {/* Three Dot Dropdown */}
                        <TouchableOpacity
                            ref={moreRef}
                            onPress={() => {
                                closeAll();
                                openDropdown(moreRef, "more");
                            }}
                            className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center"
                        >
                            <MoreVertical size={16} color="#6B7280" />
                        </TouchableOpacity>
                    </View>

                    {/* Dropdowns */}
                    <Dropdown
                        visible={showHelp}
                        position={dropdownPos}
                        options={helpOptions}
                        onSelect={(item: string) => console.log(item)}
                        onClose={closeAll}
                    />

                    <Dropdown
                        visible={showMore}
                        position={dropdownPos}
                        options={moreOptions}
                        onSelect={(item: string) => console.log(item)}
                        onClose={closeAll}
                    />
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
                    <View className="ml-2 rounded-full bg-gray-200 px-2 py-1">
                        <Text className="text-xs font-semibold text-[#212121]">
                            {AGREEMENTS.length}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity className="rounded-full border border-[#434BEA] px-4 py-2">
                    <Text className="text-sm text-[#434BEA]">Select</Text>
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