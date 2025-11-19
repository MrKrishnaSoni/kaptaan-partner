import { View, Text, TouchableOpacity, Image } from "react-native";
import { UserSquare2 } from "lucide-react-native";
import { Grid, GridItem } from "@/components/ui/grid";

export default function DocumentGrid() {
    const items = [
        { title: "PAN Card" },
        { title: "ADHAAR" },
        { title: "Department ID" },
        { title: "PPO" },
    ];

    return (
        <View className="flex-1 justify-between bg-white px-6 py-8">

            {/* Grid layout */}
            <Grid
                className="gap-6 mt-2"
                _extra={{
                    className: "grid-cols-6", // 6-column grid
                }}
            >
                {items.map((item, index) => (
                    <GridItem
                        key={index}
                        _extra={{
                            className: "col-span-3",
                        }}
                    >
                        <View className="rounded-2xl border border-[#CCCCCC] items-center py-6">
                            <Image
                                source={require('@/assets/images/docu.png')}
                                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                            />
                        </View>
                        <Text className="mt-3 text-base text-[#212121] text-center font-medium">
                            {item.title}
                        </Text>
                    </GridItem>
                ))}
            </Grid>

            {/* Save Button */}
            <TouchableOpacity className="bg-[#4C4FF8] py-4 rounded-full">
                <Text className="text-center text-white font-semibold text-[16px]">
                    Add
                </Text>
            </TouchableOpacity>

        </View>
    );
}
