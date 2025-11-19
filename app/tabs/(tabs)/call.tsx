import { Search } from 'lucide-react-native'
import React from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'

const call = () => {

  const chatData = [
    {
      name: "Rakesh Singh",
      time: "5:23 pm",
      message: "Sab thik ho jayega. Aap ne documents share kar hi di hain.",
      amount: 50,
      duration: "5 mins",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Dr Swadesh Kumar",
      time: "Yesterday",
      message: "Sab thik ho jayega. Aap ne documents share kar hi di hain.",
      amount: 50,
      duration: "10 mins",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Raghu Nandan Bairva",
      time: "2 Sep",
      message: "Sab thik ho jayega. Aap ne documents share kar hi di hain.",
      amount: 50,
      duration: "23 mins",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "Sanjay Luthade",
      time: "25 Aug",
      message: "Sab thik ho jayega. Aap ne documents share kar hi di hain.",
      amount: 50,
      duration: "18 mins",
      image: "https://i.pravatar.cc/100?img=4",
    },
  ];

  const renderItem = ({ item }) => (
    <View className="flex-row items-start justify-between px-5 py-4">

      {/* LEFT SIDE */}
      <View className="flex-row">
        <Image
          source={{ uri: item.image }}
          className="w-12 h-12 rounded-full mr-3"
        />

        <View>
          <View className="flex-row items-center gap-2">
            <Text className="font-semibold text-[#212121] text-[13px]">{item.name}</Text>
            <Text className="text-[#959595] font-normal text-[11px]">{item.time}</Text>
          </View>

          <Text className="text-xs font-normal text-[#949494] w-52">
            {item.message}
          </Text>
        </View>
      </View>

      {/* RIGHT SIDE */}
      <View className="items-end">
        <Text className="text-black font-semibold">₹{item.amount}</Text>
        <Text className="text-green-600 text-sm">{item.duration}</Text>
      </View>
    </View>
  );


  return (
    <ScrollView className='bg-[FFFDFA] flex-1'>
      <View className='bg-white py-3 px-6 border-y border-[#E8E8E8]'>
        <Text className='font-medium text-lg text-[#3E3E3E]'>Chat History</Text>
      </View>

      <View className='mx-5 my-4 border border-[#DEDEDE] rounded-full p-4 bg-white flex-row items-center gap-2'>
        <Search size={20} color="#505050" strokeWidth={1.5} />
        <Text className='text-base font-normal text-[#A1A1A1]'>Search</Text>
      </View>

      <View className="flex-1">
        <FlatList
          data={chatData}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>

    </ScrollView>
  )
}

export default call