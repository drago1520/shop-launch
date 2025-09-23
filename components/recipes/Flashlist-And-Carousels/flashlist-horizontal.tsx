import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

export default function Page() {
  return (
    <View>
      <FlashList horizontal data={Array.from({ length: 10 }, (_, i) => ({ id: `item-${i + 1}` }))} renderItem={({ item }) => <View className="size-24 rounded-full bg-muted"></View>} keyExtractor={item => item.id} showsHorizontalScrollIndicator={false} ItemSeparatorComponent={() => <View className="size-4" />} decelerationRate={'normal'} />
    </View>
  );
}
