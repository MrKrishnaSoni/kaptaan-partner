import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import JobBoard from "@/components/common/JobBoard";

// Sample data (could be dynamic in future)
const jobDetails = {
  title: "Ancestral Property Dispute",
  location: "Rajasthan",
  posted: "2 weeks ago",
  budget: "₹5,000/-",
  badge: "Immediate",
  description:
    "I am looking for an experienced Property and Family Lawyer who can assist me with:",
  bullets: [
    "Drafting and preparing all necessary legal documents related to the dispute",
    "Guiding me through the filing process in court",
    "Offering strategic legal advice to protect my rights",
    "Handling complete court representation and proceedings on my behalf",
    "Ensuring timely updates and professional communication throughout the case",
  ],
  responses: 7,
  avatars: [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/33.jpg",
    "https://randomuser.me/api/portraits/men/34.jpg",
  ],
};

// ✅ Badge Component
const Badge = ({ text }) => (
  <View className="border border-[#434BEA] px-2 py-[2px] rounded-full">
    <Text className="text-[#4F46E5] text-[10px] font-medium uppercase">
      {text}
    </Text>
  </View>
);

// ✅ Avatar Group Component
const AvatarGroup = ({ avatars }) => (
  <View className="flex-row items-center">
    <View className="flex-row">
      {avatars.map((uri, index) => (
        <Image
          key={index}
          source={{ uri }}
          className={`w-7 h-7 rounded-full border-2 border-white ${
            index !== 0 ? "-ml-3" : ""
          }`}
        />
      ))}
    </View>
  </View>
);

// ✅ Bullet List Component
const BulletList = ({ items }) => (
  <View className="mt-2 ml-2">
    {items.map((item, index) => (
      <View key={index} className="flex-row mt-1">
        <Text className="text-[#767676] mr-2">{`\u2022`}</Text>
        <Text className="flex-1 text-sm text-[#767676] leading-5">{item}</Text>
      </View>
    ))}
  </View>
);

const JobDetail = () => {
  return (
    <View className="flex-1 bg-[#FFFDFA]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-5 mb-4">
          {/* --- Header --- */}
          <View className="flex-row justify-between items-start">
            <Text className="text-base font-medium text-[#3E3E3E] flex-1">
              {jobDetails.title}
            </Text>
            <Badge text={jobDetails.badge} />
          </View>

          {/* --- Sub Info --- */}
          <View className="flex-row items-center mt-2">
            <Text className="text-gray-500 text-[13px]">
              {jobDetails.location}
            </Text>
            <Text className="text-gray-500 text-[13px] mx-1">|</Text>
            <Text className="text-gray-500 text-[13px]">{jobDetails.posted}</Text>
          </View>

          {/* --- Responses and Budget --- */}
          <View className="flex-row justify-between items-center mt-4">
            <View className="flex-row items-center">
              <AvatarGroup avatars={jobDetails.avatars} />
              <TouchableOpacity>
                <Text className="text-[#4F46E5] text-sm ml-2">
                  {jobDetails.responses} Responses
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="text-[#646464] font-medium text-base">
              Budget{" "}
              <Text className="font-semibold text-[#212121]">
                {jobDetails.budget}
              </Text>
            </Text>
          </View>

          {/* Divider */}
          <View className="h-[1px] bg-gray-200 my-4" />

          {/* --- Description --- */}
          <Text className="text-base font-medium text-[#3E3E3E] mb-2">
            Job Description
          </Text>
          <Text className="text-sm text-[#767676] leading-5">
            {jobDetails.description}
          </Text>

          <BulletList items={jobDetails.bullets} />
        </View>

        {/* Extra Component (if needed) */}
        <JobBoard />
      </ScrollView>

      {/* --- Bottom Button --- */}
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-[#434BEA] py-4 rounded-full m-4 items-center"
      >
        <Text className="text-white text-base font-medium">Update Prices</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobDetail;