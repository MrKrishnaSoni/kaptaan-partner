import React, { useState } from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Pressable,
    Modal,
} from "react-native";
import { ChevronRight, Clock4, ListFilter, Upload, X } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

/* ----------------------------------
   SERVICE CARD
---------------------------------- */

const ServiceCard = ({ title, image }) => {
    return (
        <LinearGradient
            colors={["#FFFFFF", "#E9EAFF"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            className="flex-1 rounded-2xl items-center py-6 gap-2"
            style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 4,
            }}
        >
            <View className="w-16 h-16 bg-white rounded-full border border-gray-300 items-center justify-center">
                <Image source={image} className="w-8 h-8" resizeMode="contain" />
            </View>

            <Text className="text-black text-sm text-center">{title}</Text>
        </LinearGradient>
    );
};

/* ----------------------------------
   LIST ROW (USED IN ALL TABS)
---------------------------------- */

const ListRow = ({ icon, title, subtitle, badge }) => {
    return (
        <TouchableOpacity className="flex-row items-center py-4 border-b border-[#EFEFEF]">
            <LinearGradient
                colors={["#FFFFFF", "#E9EAFF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0 }}
                className="w-10 h-10 rounded-lg  items-center justify-center mr-3"
                style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 4,
                }}
            >
                <Image source={icon} className="w-5 h-5" resizeMode="contain" />
            </LinearGradient>

            <View className="flex-1">
                {subtitle && (
                    <Text className="text-[11px] text-[#4C4C4C] mb-1">{subtitle}</Text>
                )}
                <Text className="text-sm font-medium text-[#212121]">{title}</Text>
            </View>

            {badge && (
                <View className="bg-[#F2F2F2] px-2 py-0.5 rounded-full mr-2">
                    <Text className="text-[10px] text-[#555]">{badge}</Text>
                </View>
            )}

            <ChevronRight size={16} color="#B0B0B0" />
        </TouchableOpacity>
    );
};

/* ----------------------------------
   TAB CONTENTS
---------------------------------- */

const ToolsTab = ({ onAnalysePress }) => (
    <View className="mt-4">
        <View className="mb-4 flex-row justify-between items-center">
            <Text className="text-lg font-medium text-[#212121]">Tools</Text>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={onAnalysePress}
                className="border border-[#434BEA] px-3 flex-row gap-2 py-3 rounded-full items-center"
            >
                <Image
                    source={require("../../assets/images/scan.png")}
                    className="w-5 h-5"
                />
                <Text className="text-[#434BEA] text-sm font-medium">
                    Analyse documents
                </Text>
            </TouchableOpacity>
        </View>
        <ListRow icon={require("../../assets/images/icon22.png")} title="Employee Agreement" subtitle="Staff" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="NDA" subtitle="Staff" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Service Agreement" subtitle="Client" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Purchase Agreement" subtitle="Client" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Warranty Agreement" subtitle="Client" />
    </View>
);

const ActivitiesTab = () => (
    <View className="mt-4">
        <View className="mb-4 flex-row justify-between items-center">
            <Text className="text-lg font-medium text-[#212121]">Activities</Text>
            <TouchableOpacity
                activeOpacity={0.85}
                className="border border-[#D2D2D2] px-3 flex-row gap-2 py-2 rounded-full items-center"
            >

                <ListFilter size={16} color='#212121' />
                <Text className="text-[#212121] text-sm font-medium">
                    Filter
                </Text>
            </TouchableOpacity>
        </View>
        <ListRow icon={require("../../assets/images/icon22.png")} title="Employee Agreement Created" subtitle="32 min ago" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Warranty Agreement Analyzed" subtitle="10 hours ago" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Non-disclosure Agreement Created" subtitle="02 days ago" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Purchase Agreement Analyzed" subtitle="03 hours ago" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Service Agreement Analyzed" subtitle="10 days ago" />
    </View>
);

const CollectionsTab = () => (
    <View className="mt-4">
        <View className="mb-4 flex-row justify-between items-center">
            <Text className="text-lg font-medium text-[#212121]">Collections</Text>
            <TouchableOpacity
                activeOpacity={0.85}
                className="bg-[#434BEA] px-3 flex-row gap-2 py-2 rounded-full items-center"
            >
                <Upload size={16} color='#fff' />
                <Text className="text-white text-sm font-medium ">
                    Add More
                </Text>
            </TouchableOpacity>
        </View>
        <ListRow icon={require("../../assets/images/icon22.png")} title="Employee Agreement" badge="19" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Non disclosure agreement" badge="21" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Service Agreement" badge="06" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Purchase Agreement" badge="05" />
        <ListRow icon={require("../../assets/images/icon22.png")} title="Warranty Agreement" badge="02" />
    </View>
);

/* ----------------------------------
   MAIN SCREEN
---------------------------------- */

const CompanyStatusCard = () => {
    const tabs = ["Tools", "Recent Activities", "Collections"];
    const [activeTab, setActiveTab] = useState("Tools");
    const [showAnalyseModal, setShowAnalyseModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <ScrollView className="flex-1 bg-white" contentContainerStyle={{ paddingBottom: 40 }}>

                {/* Banner */}
                <Image
                    source={require("../../assets/images/Assets.png")}
                    className="w-full h-36"
                    resizeMode="cover"
                />

                {/* Company Info */}
                <View className="bg-white border border-[#E8E9FF] rounded-xl -mt-10 mx-4 px-4 py-4 flex-row gap-4 items-center">
                    <Image source={require("../../assets/images/mahi.png")} className="w-16 h-16" resizeMode="contain" />
                    <View>
                        <Text className="text-lg font-semibold">Mahindra & Mahindra</Text>
                        <Text className="text-sm text-gray-600">Tractor Manufacturer</Text>
                    </View>
                </View>

                <View className="px-6 pt-5">

                    {/* Status Card */}
                    <View className="bg-white rounded-xl border border-[#E8E9FF] px-4 py-4 shadow-sm">
                        <View className="flex-row gap-3">
                            <Image source={require("../../assets/images/bi_house.png")} className="w-12 h-12" resizeMode="contain" />

                            <View className="flex-1">
                                <Text className="text-sm font-medium text-[#212121]">Business, Bilkul Sorted!</Text>
                                <Text className="text-[10px] text-[#626262] mt-1 leading-4">
                                    Yeh checklist help karegi aapko har important requirement ko track aur complete karne mein.
                                </Text>
                            </View>

                            <TouchableOpacity className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center">
                                <ChevronRight size={16} color="#6B7280" />
                            </TouchableOpacity>
                        </View>

                        <View className="flex-row justify-between items-center mt-4">
                            <Text className="text-[#289C08] text-sm font-medium">75% to complete</Text>
                            <View className="flex-row items-center gap-1">
                                <Clock4 size={12} color="#8D8D8D" />
                                <Text className="text-[8px] text-[#8D8D8D]">39 min</Text>
                            </View>
                        </View>

                        <View className="mt-2">
                            <View className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                <View className="h-full w-[75%] bg-[#4F46E5] rounded-full flex-row justify-between items-center px-2">
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <View key={i} className="w-1.5 h-1.5 bg-white rounded-full opacity-80" />
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Services */}
                    <View className="flex-row gap-4 mt-5">
                        <ServiceCard title="Legal Experts" image={require("../../assets/images/icon22.png")} />
                        <ServiceCard title="Govt. Officer" image={require("../../assets/images/iocn2.png")} />
                        <ServiceCard title="Kappy Ai" image={require("../../assets/images/icon3.png")} />
                    </View>

                    {/* Tabs */}
                    <View className="flex-row border-b border-[#DEDEDE] mt-8">
                        {tabs.map(tab => (
                            <Pressable key={tab} onPress={() => setActiveTab(tab)} className="flex-1 items-center">
                                <Text className={`text-sm font-medium ${activeTab === tab ? "text-blue-600" : "text-gray-500"}`}>
                                    {tab}
                                </Text>
                                {activeTab === tab && <View className="h-0.5 w-full bg-blue-600 mt-2" />}
                            </Pressable>
                        ))}
                    </View>

                    {/* Tab Content */}
                    {activeTab === "Tools" && (
                        <ToolsTab onAnalysePress={() => setShowAnalyseModal(true)} />
                    )}

                    {activeTab === "Recent Activities" && <ActivitiesTab />}
                    {activeTab === "Collections" && <CollectionsTab />}

                </View>
            </ScrollView>

            <Modal
                visible={showAnalyseModal}
                transparent
                animationType="slide"
                onRequestClose={() => setShowAnalyseModal(false)}
            >
                <Pressable
                    onPress={() => setShowAnalyseModal(false)}
                    className="flex-1 bg-black/40 justify-end"
                >
                    <Pressable className="bg-white rounded-t-2xl">

                        {/* Header */}
                        <View className="flex-row justify-between items-center mb-4 border-b border-[#DDDDDD] px-4 py-4">
                            <Text className="text-base font-semibold text-[#5B5B5B]">
                                Ab sabhi documents ek jagah par
                            </Text>
                            <TouchableOpacity onPress={() => setShowAnalyseModal(false)}>
                                <X size={20} />
                            </TouchableOpacity>
                        </View>

                        <View className="px-4 py-1">
                            {/* Option 1 */}
                            <TouchableOpacity className="border border-[#E6E6E6] rounded-xl p-4 flex-row gap-2 justify-center items-center mb-3"
                                onPressIn={() => setIsHovered(true)}
                                onPressOut={() => setIsHovered(false)}
                                style={[
                                    isHovered && {
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 4 },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 4,
                                        elevation: 4,
                                    },
                                ]}>
                                <Image
                                    source={require("../../assets/images/bi_house (1).png")}
                                    className="w-8 h-8"
                                />
                                <View>
                                    <Text className="text-sm font-medium text-[#212121]">
                                        Generate Document with AI {'\n'} ₹20/-
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {/* Option 2 */}
                            <TouchableOpacity className="border border-[#E6E6E6] rounded-xl p-4 flex-row gap-2 justify-center items-center mb-3">
                                <Image
                                    source={require("../../assets/images/bi_house (4).png")}
                                    className="w-8 h-8"
                                />
                                <Text className="text-sm font-medium text-[#212121]">
                                    Already have this document?
                                </Text>
                            </TouchableOpacity>

                            {/* Option 3 */}
                            <TouchableOpacity className="border border-[#E6E6E6] rounded-xl p-4 flex-row gap-2 justify-center items-center">
                                <Image
                                    source={require("../../assets/images/bi_house (3).png")}
                                    className="w-8 h-8"
                                />
                                <Text className="text-sm font-medium text-[#212121]">
                                    Download Sample Template
                                </Text>
                            </TouchableOpacity>

                            <Text className="text-[10px] text-center text-[#9CA3AF] mt-4 mb-5">
                                Ab sab aapke haathon me
                            </Text>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>

        </>
    );
};

export default CompanyStatusCard;
