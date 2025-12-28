import { Stack } from 'expo-router'
import React from 'react'
import SecondHeader from '@/components/Layout/SecondHeader'
import { HStack } from '@/components/ui/hstack'
import { Bookmark, EllipsisVertical, Pencil, Plus, Trash2, Upload } from 'lucide-react-native'
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

            <Stack.Screen name="ProfilesAdd"
                options={{
                    header: () => <SecondHeader title="Profiles" />,
                }}
            />

            <Stack.Screen name="ProfileDetails"
                options={{
                    header: () => <SecondHeader title="House" />,
                }}
            />

            <Stack.Screen name="AddedCategory"
                options={{
                    header: () => <SecondHeader title="Businesses" />,
                }}
            />

            <Stack.Screen name="UploadDocs"
                options={{
                    header: () => <SecondHeader title="Upload Documents" />,
                }}
            />

            <Stack.Screen name="AnalyzeDocs"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Analyze Documents"
                            rightElement={
                                <TouchableOpacity onPress={() => router.push("/")}>
                                    <View className='bg-[#434BEA] px-4 py-2 rounded-full'>
                                        <Text className='text-white text-base font-semibold'>Save</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    ),
                }}
            />

            <Stack.Screen name="UploadCheckDocs"
                options={{
                    header: () => <SecondHeader title="Upload Document" />,
                }}
            />

            <Stack.Screen name="DocumentDetails"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Document Details"
                            rightElement={
                                <View className='flex-row gap-3 items-center justify-center'>
                                    <TouchableOpacity onPress={() => router.push("/")} className='border border-[#E2E2E2] px-4 py-2 rounded-full flex-row items-center justify-center gap-2'>
                                        <Upload color='#434BEA' size={18} />
                                        <Text className='text-[#434BEA] text-base font-normal'>Update</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => router.push("/")} className='border border-[#E2E2E2] p-2 rounded-full flex-row items-center justify-center gap-2'>
                                        <Trash2 color='#B3261E' size={18} />
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    ),
                }}
            />

            <Stack.Screen name="WarrentyDocs"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Warranty Agreement"
                            rightElement={
                                <TouchableOpacity onPress={() => router.push("/")} className='bg-[#434BEA] px-4 py-2 rounded-full flex-row items-center justify-center gap-2'>
                                    <Upload color='#fff' size={18} />
                                    <Text className='text-white text-base font-semibold'>Add More</Text>
                                </TouchableOpacity>
                            }
                        />
                    ),
                }}
            />

            <Stack.Screen name="CompanyStatusCard"
                options={{
                    header: () => (
                        <SecondHeader
                            title="Profile"
                            rightElement={
                                <View className='flex-row gap-3 items-center justify-center'>
                                    <TouchableOpacity onPress={() => router.push("/")} className='border border-[#006CB7] px-4 py-2 rounded-full flex-row items-center justify-center gap-2'>
                                        <Pencil color='#434BEA' size={18} />
                                        <Text className='text-[#434BEA] text-base font-normal'>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => router.push("/")} className='border border-[#F5000E] p-2 rounded-full flex-row items-center justify-center gap-2'>
                                        <Trash2 color='#F5000E' size={18} />
                                        <Text className='text-[#F5000E] text-base font-normal'>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    ),
                }}
            />

        </Stack>
    )
}

export default _layout