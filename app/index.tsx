import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { Carousel } from 'react-native-flash-carousel';
import { Button } from '@/components/ui/button';
import { FlashList } from '@shopify/flash-list';
import { width } from '@/lib/utils';
import { Image } from 'expo-image';
import { LightRedRibbon } from '@/components/ui/ribbon';
import { QuantityPicker } from '@/components/ui/quantity';

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
        <View className="mt-6">
          <View style={{ margin: -4 }}>
            <FlashList
              data={[1, 2, 3]}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={{ flex: 1, padding: 4 }}>
                  <Image source={{ uri: 'https://picsum.photos/800/800' }} style={{ width: '100%', aspectRatio: 1 }} contentFit="cover" cachePolicy="none" />
                  <View>
                    <Text numberOfLines={1} className="text-xs text-muted-foreground">
                      Наниз от стъклени мъниста топче 6 мм дупка 1 мм прозрачен галванизиран с AB покритие цвят черен дъга жълто-розов отенък ~66 броя
                    </Text>
                  </View>
                  <LightRedRibbon />
                  <View className="mt-2">
                    <QuantityPicker />
                  </View>
                </View>
              )}
              keyExtractor={item => String(item)}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/**
 * .light-red-ribbon {
    text-align: center;
    color: #fff;
    height: 36px;
    width: 153px;
    background: url('https://images.emart.eu/cite/light_red_ribbon.png') no-repeat center top;
    text-transform: uppercase;
    font-size: 11px;
    margin: 0px auto 5px;
    line-height: 12px;
    padding-top: 4px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
 */
