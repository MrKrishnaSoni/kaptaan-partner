import { HStack } from '@/components/ui/hstack';
import { Heart, MessageCircle, SendHorizontal } from 'lucide-react-native';
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CommentCard = ({
    avatar,
    name,
    time,
    comment,
}: {
    avatar: any;
    name: string;
    time: string;
    comment: string;
}) => {
    return (
        <View className="flex-row items-start mb-5">
            {/* Profile Image */}
            <Image
                source={avatar}
                className="w-10 h-10 rounded-full mr-3"
                resizeMode="cover"
            />

            {/* Comment Content */}
            <View className="flex-1">
                {/* Name + Time */}
                <View className="flex-row items-center justify-start gap-2 mb-1">
                    <Text className="font-semibold text-[#1C1C1C] text-sm">
                        {name}
                    </Text>
                    <Text className="text-[#9E9E9E] text-xs">{time}</Text>
                </View>

                {/* Comment Text */}
                <Text className="text-[#3E3E3E] text-sm leading-5">{comment}</Text>
            </View>
        </View>
    );
};

const knowledgeDetail = () => {

    const commentCard = [
        {
            avatar: require("@/assets/images/ExpertImagw.png"),
            name: "Rakesh Singh",
            time: "5:23 pm",
            comment: "Maza aaya, aur ye maza mein sabko dena chahta hun",
        },
        {
            avatar: require("@/assets/images/ExpertImagw.png"),
            name: "Shikha Rajawat",
            time: "23 Sep 2025",
            comment:
                "This is an amazing article and it really helped me today. I have now filed an FIR without going to the police station",
        },
    ];

    const [comment, setComment] = useState("");

    const handleSend = () => {
        if (comment.trim()) {
            console.log("Comment sent:", comment);
            setComment("");
        }
    };


    return (
        <>
            <ScrollView className='p-6'>
                <Image
                    source={require('@/assets/images/Placeholder Image.png')}
                    className='aspect-square'
                    resizeMode='contain'
                    style={{ width: 350, height: 350 }}
                />

                <View className='mb-4 mt-3'>
                    <Text className='font-medium text-xl text-[#3E3E3E]'>
                       How to File an FIR Without Going to a Police Station
                    </Text>
                    <Text className='text-[#5B5B5B] text-xs font-normal p-1'>25th August 2025</Text>
                </View>

                <View className='flex-row items-center mb-4'>
                    <View className="flex-row -space-x-2">
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                            className="w-7 h-7 rounded-full border border-white"
                        />
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/women/45.jpg' }}
                            className="w-7 h-7 rounded-full border border-white absolute left-4"
                        />
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/12.jpg' }}
                            className="w-7 h-7 rounded-full border border-white absolute left-8"
                        />
                    </View>

                    {/* Responses */}
                    <TouchableOpacity className="ml-10">
                        <Text className="text-[#000000] text-xs font-normal">
                           and 4 others like this post
                        </Text>
                    </TouchableOpacity>
                </View>

                <HStack className='gap-4 items-center'>
                    <View>
                        <Heart strokeWidth={1.5} color='#212121' />
                        <Text className='text-[#212121] font-semibold text-xs'>200</Text>
                    </View>
                    <View className='text-center flex-col justify-center items-center'>
                        <MessageCircle strokeWidth={1.5} color='#212121' />
                        <Text className='text-[#212121] text-center font-semibold text-xs'>2</Text>
                    </View>
                </HStack>

                <View className='mt-5'>
                    <Text className='text-[#767676] font-normal text-sm mb-3'>
                        Filing a First Information Report (FIR) is often seen as a stressful, time-consuming task because people imagine long hours at the police station. However, with digital reforms in India, it’s now possible to file certain types of FIRs online—saving both time and effort.
                    </Text>
                    <Text className='text-[#767676] font-bold text-sm'>1. Online Police Portals</Text>
                    <Text className='text-[#767676] font-normal text-sm mt-3 mb-3'>
                        Most state police departments in India have official online portals where you can file an FIR. These usually cover non-cognizable offences (like theft of mobile phones, missing documents, cybercrime, etc.). You’ll need to:{'\n'}
                        <View className="space-y-2">
                            <View className="flex-row items-center">
                                <Text className="text-lg text-[#767676] mr-2">•</Text>
                                <Text className="text-[#767676] font-normal text-sm">
                                    Visit your state police’s official website.
                                </Text>
                            </View>

                            <View className="flex-row items-center">
                                <Text className="text-lg text-[#767676] mr-2">•</Text>
                                <Text className="text-[#767676] font-normal text-sm">
                                    Look for the “File a Complaint” or “Online FIR” option.
                                </Text>
                            </View>
                            <View className="flex-row items-center mt-1">
                                <Text className="text-lg text-[#767676] mr-2">•</Text>
                                <Text className="text-[#767676] font-normal text-sm">
                                    Fill in your name, address, contact number, and a clear description
                                    of the incident.
                                </Text>
                            </View>

                            <View className="flex-row items-start mt-1">
                                <Text className="text-lg text-[#767676] mr-2">•</Text>
                                <Text className="text-[#767676] font-normal text-sm">
                                    Upload supporting documents, if applicable. Once submitted, you’ll
                                    receive an acknowledgement or reference number to track your
                                    complaint.
                                </Text>
                            </View>
                        </View>
                    </Text>

                    <Text className='text-[#767676] font-bold text-sm'>2. National Cyber Crime Portal</Text>
                    <Text className='text-[#767676] font-normal text-sm mt-3 mb-3'>For cyber-related offences (such as online fraud, cyberbullying, or hacking), you can visit the National Cyber Crime Reporting Portal. This platform allows you to lodge complaints from anywhere in India, and cases are forwarded to the concerned police authorities.</Text>

                    <Text className='text-[#767676] font-bold text-sm'>3. Police Apps & Helplines</Text>
                    <Text className='text-[#767676] font-normal text-sm mt-3 mb-3'>Several states have mobile apps or WhatsApp helplines to simplify complaint filing. For example, Delhi Police has the Delhi Police One Touch Away app, while other states provide grievance redressal apps with FIR filing features.</Text>

                    <Text className='text-[#767676] font-bold text-sm'>4. E-mail or Helpline Numbers</Text>
                    <Text className='text-[#767676] font-normal text-sm mt-3 mb-3'>In urgent cases, some states accept written complaints via official police email IDs or helpline numbers. The complaint can then be registered as an FIR after verification.</Text>

                    <Text className='text-[#767676] font-bold text-sm'>Key Points to Remember</Text>
                    <View className="space-y-2">
                        <View className="flex-row items-start mt-1">
                            <Text className="text-lg text-[#767676] mr-2">•</Text>
                            <Text className="text-[#767676] font-normal text-sm">
                                Always use the official police or government websites/apps—never third-party portals.
                            </Text>
                        </View>

                        <View className="flex-row items-start">
                            <Text className="text-lg text-[#767676] mr-2">•</Text>
                            <Text className="text-[#767676] font-normal text-sm">
                                Online FIR is generally allowed for non-serious offences. For serious crimes (like murder, rape, or dacoity), you must still approach the police station directly.
                            </Text>
                        </View>
                        <View className="flex-row items-start mt-1">
                            <Text className="text-lg text-[#767676] mr-2">•</Text>
                            <Text className="text-[#767676] font-normal text-sm">
                                Keep copies of your acknowledgment number or digital receipt for future reference.
                            </Text>
                        </View>
                    </View>
                </View>

                <View className='my-7 w-full'>
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-[#212121] font-medium text-sm'>Comments</Text>
                        <Text className='border-b border-[#434BEA] text-[#434BEA] font-medium text-xs'>
                            View Likes
                        </Text>
                    </View>

                    <View className="bg-white px-5 py-4 rounded-2xl mt-5">
                        {commentCard.map((item, index) => (
                            <CommentCard
                                key={index}
                                avatar={item.avatar}
                                name={item.name}
                                time={item.time}
                                comment={item.comment}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            <View className="flex-row items-center border border-gray-300 rounded-full px-4 py-2 mx-6 mb-8 bg-white">
                {/* Text Input */}
                <TextInput
                    value={comment}
                    onChangeText={setComment}
                    placeholder="Write your comment here"
                    placeholderTextColor="#9E9E9E"
                    className="flex-1 text-[#3E3E3E] text-sm pr-2"
                />

                {/* Send Button */}
                <TouchableOpacity
                    onPress={handleSend}
                    className="bg-[#434BEA] w-8 h-8 rounded-full items-center justify-center"
                >
                    <SendHorizontal size={16} color="#fff" />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default knowledgeDetail