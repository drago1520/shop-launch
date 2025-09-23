import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { width } from '@/lib/utils';
import { FlashList } from '@shopify/flash-list';

export default function Page() {
  return (
    <View>
      <FlashList
        horizontal
        data={Array.from({ length: 10 }, (_, i) => ({ id: `item-${i + 1}` }))}
        renderItem={({ item }) => (
          <View style={{ width: Math.round(width * 0.8), aspectRatio: 9 / 16 }} className="items-center justify-center overflow-hidden rounded-xl bg-muted">
            <Text>{item.id}</Text>
          </View>
        )}
        snapToInterval={Math.round(width * 0.8) + 12} //Card width + separator width
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      />
    </View>
  );
}
