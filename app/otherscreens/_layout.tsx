import { Stack } from 'expo-router'
import React from 'react'
import SecondHeader from '@/components/Layout/SecondHeader'
import { HStack } from '@/components/ui/hstack'
import { Bookmark, EllipsisVertical, Plus, Trash2, Upload } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { useRouter } from "expo-router";

const _layout = () => {

    const router = useRouter()

    return (
        <Stack>
            <Stack.Screen name="PaymentDetail"
                options={{
                    header: () => <SecondHeader title="Payments" />,
                }} />
            <Stack.Screen name="ChangePrice"
                options={{
                    header: () => <SecondHeader title="Change Prices" />,
                }} />
            <Stack.Screen name="ProgressHistory"
                options={{
                    header: () => <SecondHeader title="Progress History" />,
                }} />
            <Stack.Screen name="Benefits"
                options={{
                    header: () => <SecondHeader title="Referrals" />,
                }}
            />
            <Stack.Screen name="JobDetail"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Jobs"
                            rightElement={
                                <HStack className='gap-3'>
                                    <Bookmark color="#5B5B5B" strokeWidth={1.5} />
                                    <Upload color="#5B5B5B" strokeWidth={1.5} />
                                    <EllipsisVertical color="#5B5B5B" strokeWidth={1.5} />
                                </HStack>
                            }
                        />
                    ),
                }}
            />
            <Stack.Screen name="KnowledgeDetail"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Knowledge"
                            rightElement={
                                <HStack className='gap-3'>
                                    <Bookmark color="#5B5B5B" strokeWidth={1.5} />
                                    <Upload color="#5B5B5B" strokeWidth={1.5} />
                                    <EllipsisVertical color="#5B5B5B" strokeWidth={1.5} />
                                </HStack>
                            }
                        />
                    ),
                }} />

            <Stack.Screen name="Profile"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Profile"
                            rightElement={
                                <HStack className='gap-4 items-center'>
                                    <TouchableOpacity onPress={() => router.push("/otherscreens/EditProfile")}><Text className='text-[#434BEA] text-base underline font-semibold'>Edit Profile</Text></TouchableOpacity>
                                    <Upload color="#5B5B5B" strokeWidth={1.5} />
                                    <EllipsisVertical color="#5B5B5B" strokeWidth={1.5} />
                                </HStack>
                            }
                        />
                    ),
                }} />

            <Stack.Screen name="EditProfile"
                options={{
                    header: () => <SecondHeader title="Edit Profile" />,
                }}
            />

            <Stack.Screen name="PersonalInfo"
                options={{
                    header: () => <SecondHeader title="Personal Information" />,
                }}
            />

            <Stack.Screen name="ExperieneceHold"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Experience"
                            rightElement={
                                <TouchableOpacity onPress={() => router.push("/otherscreens/AddExperience")}>
                                    <View className='flex-row gap-1 items-center'>
                                        <Plus color="#434BEA" size={22} />
                                        <Text className='text-[#434BEA] text-base font-semibold underline'>Add New</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    ),
                }}
            />

            <Stack.Screen name="EditExperience"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Edit Experience"
                            rightElement={
                                <View className='flex-row gap-1 items-center'>
                                    <Trash2 color="#F34C5D" size={22} />
                                    <Text className='text-[#F34C5D] text-base font-semibold underline'>Remove</Text>
                                </View>
                            }
                        />
                    ),
                }}
            />

            <Stack.Screen name="AddExperience"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Add Experience"
                            rightElement={
                                <View className='flex-row gap-1 items-center'>
                                    <Text className='text-[#F34C5D] text-base font-semibold underline'>Cancel</Text>
                                </View>
                            }
                        />
                    ),
                }}
            />

            <Stack.Screen name="DocumentGrid"
                options={{
                    header: () => <SecondHeader title="Documents" />,
                }}
            />

            <Stack.Screen name="Availability"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Availability"
                            rightElement={
                                <TouchableOpacity onPress={() => router.push("/otherscreens/Appointments")}>
                                    <View className='flex-row gap-1 items-center'>
                                        <Text className='text-[#434BEA] text-base font-semibold underline'>View Appointments</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    ),
                }}
            />

            <Stack.Screen name="Appointments"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Appointments"
                            rightElement={
                                <TouchableOpacity>
                                    <View className='flex-row gap-1 items-center'>
                                        <Text className='text-[#434BEA] text-base font-semibold underline'>Sync with Callander</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    ),
                }}
            />

        </Stack>
    )
}

export default _layout