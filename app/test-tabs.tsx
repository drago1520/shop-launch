import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import BackButton from '@/components/ui/button-back';
import { ChevronLeft } from 'lucide-react-native';
import { ThemeToggle } from '@/components/theme-toggle';
import { Icon } from '@/components/ui/icon';

export default function Page() {
  return (
    <SafeAreaView className="flex-1 items-start justify-between">
      <View>
        <ThemeToggle />
        <BackButton />
      </View>
      <View className="flex-row justify-between">
        <Text>1234</Text>
        <Text>1234</Text>
        <Text>1234</Text>
        <Text>1234</Text>
        <Text>1234</Text>
      </View>
    </SafeAreaView>
  );
}
