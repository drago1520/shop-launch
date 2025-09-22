import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import HomeTabs from '@/components/home-tabs';

export default function TabsLayout() {
  return (
    <SafeAreaView className="flex-1 justify-between">
      <View className="flex-1">
        <Stack screenOptions={{ headerShown: false }} />
      </View>
      <HomeTabs />
    </SafeAreaView>
  );
}
