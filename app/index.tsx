import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { Dimensions, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { Carousel } from 'react-native-flash-carousel';
import { Button } from '@/components/ui/button';
import { FlashList } from '@shopify/flash-list';
import { width } from '@/lib/utils';
// Card markup is inlined in FlashList renderItem

export default function Page() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Link href={'/full-index'}>
          <Text>Theme</Text>
        </Link>
        <View className="flex flex-row justify-between">
          <Text>Доставка до адрес</Text>
          <View className="flex flex-row">
            <Text>Profile</Text>
            <Text>Orders</Text>
          </View>
        </View>
        <View className="h-20 w-full bg-muted"></View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="py-8">
          <View className="mr-4 size-24 rounded-full bg-muted"></View>
          <View className="mr-4 size-24 rounded-full bg-muted"></View>
          <View className="mr-4 size-24 rounded-full bg-muted"></View>
          <View className="mr-4 size-24 rounded-full bg-muted"></View>
          <View className="size-24 rounded-full bg-muted"></View>
        </ScrollView>
        <View>
          <Text>Carousel with CRO elements - free shipping, support time, 30 day return, на изплащане, експресна доставка</Text>
        </View>
        <Carousel data={[1, 2, 3, 4, 5, 6]} renderItem={({ item }) => <View className="size-16 rounded bg-muted"></View>} />
        <Link href={'/flashlist-paginated'} asChild>
          <Button>
            <Text>Flashlist demo</Text>
          </Button>
        </Link>
        <View className="mt-6">
          <Text className="mb-2">Featured</Text>
          <FlashList
            horizontal
            data={Array.from({ length: 10 }, (_, i) => ({ id: `item-${i + 1}` }))}
            renderItem={({ item }) => (
              <View style={{ width: Math.round(width * 0.8), aspectRatio: 9 / 16 }} className="items-center justify-center overflow-hidden rounded-xl bg-muted">
                <Text>{item.id}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            contentContainerStyle={{ paddingHorizontal: 0 }}
            showsHorizontalScrollIndicator={false}
            decelerationRate="normal"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
