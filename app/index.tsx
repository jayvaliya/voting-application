import { View, Text, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold text-black">
          Welcome to your new app!
        </Text>
      </View>
    </ScrollView>
  );
}