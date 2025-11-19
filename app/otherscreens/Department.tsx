import { Grid, GridItem } from '@/components/ui/grid'
import { Search } from 'lucide-react-native'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Department = () => {
    return (
        <View className='flex-1 py-10 px-6'>
            <Text className='text-base font-semibold text-[#212121]'>Namaste Rajeev Ji </Text>
            <Text className='text-2xl font-medium text-[#3E3E3E]'>Which last department {'\n'}did you worked for?</Text>
            <Text className='text-sm font-normal text-[#5B5B5B] mt-3'>Select the department you retired from</Text>

            {/* Search Bar */}
            <TouchableOpacity className="flex-row items-center justify-between bg-[#FFFFFF] border border-[#434BEA] rounded-[10px] px-4 py-4 mt-10"  style={{ shadowColor: '#434BEA', shadowOpacity: 0.4, shadowRadius: 6, elevation: 6 }}>
                <TextInput
                    placeholder="Search department"
                    placeholderTextColor="#878787"
                    className="flex-1 text-[#3E3E3E] text-lg font-normal"
                />
                <Search size={20} color="#878787" />
            </TouchableOpacity>

            <Grid className="gap-4 mt-10" _extra={{ className: 'grid-cols-4' }}>
                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/policeImg.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Police {'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/cbiImage.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Cyber {'\n'}Crime Cell</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/gstImg.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Income Tax {'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/offImge.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Labour{'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/policeImg.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Police {'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/cbiImage.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Cyber {'\n'}Crime Cell</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/gstImg.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Income Tax {'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/offImge.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Labour{'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/policeImg.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Police {'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/cbiImage.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Cyber {'\n'}Crime Cell</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/gstImg.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Income Tax {'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/offImge.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Labour{'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>
                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/policeImg.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Police {'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/cbiImage.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Cyber {'\n'}Crime Cell</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/gstImg.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Income Tax {'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>

                <GridItem _extra={{ className: "col-span-1" }}>
                    <TouchableOpacity>
                        <Image
                            source={require("@/assets/images/offImge.png")}
                            style={{ width: '100%', height: 45, borderRadius: 10, resizeMode: 'contain' }}
                        />
                        <Text className='text-center text-[10px] text-[#212121] '>Labour{'\n'}Department</Text>
                    </TouchableOpacity>
                </GridItem>
            </Grid>
        </View>
    )
}

export default Department