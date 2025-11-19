import { Search } from 'lucide-react-native'
import React from 'react'
import {
    Radio,
    RadioGroup,
    RadioIndicator,
    RadioIcon,
    RadioLabel,
} from '@/components/ui/radio';
import { CircleIcon } from '@/components/ui/icon';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

const WorkField = () => {
    return (
        <ScrollView className='flex-1 py-10 px-6'>
            <Text className='text-base font-semibold text-[#212121]'>Namaste Rajeev Ji </Text>
            <Text className='text-2xl font-medium text-[#3E3E3E]'>What field do you work in?</Text>
            <Text className='text-sm font-normal text-[#5B5B5B] mt-3'>Selecting one or more options would help us tailor your experience and suggest right clients to you</Text>

            {/* Search Bar */}
            <TouchableOpacity className="flex-row items-center justify-between bg-[#FFFFFF] border border-[#434BEA] rounded-[10px] px-4 py-4 mt-10" style={{ shadowColor: '#434BEA', shadowOpacity: 0.4, shadowRadius: 6, elevation: 6 }}>
                <TextInput
                    placeholder="Search department"
                    placeholderTextColor="#878787"
                    className="flex-1 text-[#3E3E3E] text-lg font-normal"
                />
                <Search size={20} color="#878787" />
            </TouchableOpacity>

            <RadioGroup className='flex-wrap gap-3 items-center mt-6 flex-row'>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Property Issue</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Family & Divorce</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Workplace Problem</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Senior Citizen</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Minor / Child Issue</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
                <View className='bg-[#F2F2F2] border border-[#DEDEDE] p-3 rounded-full '>
                    <Radio value="" size="md" isInvalid={false} isDisabled={false}>
                        <RadioIndicator>
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel>Consumer Law</RadioLabel>
                    </Radio>
                </View>
            </RadioGroup>
        </ScrollView>
    )
}

export default WorkField