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
import { Icon } from '@/components/ui/icon';
import { ChevronDown, MapPin, Search, Truck } from 'lucide-react-native';
import { Input } from '@/components/ui/input';
// import {t} from "react-native-tailwindcss"

export default function Page() {
  return (
    <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
      <View className="mx-2 flex flex-row items-center justify-between">
        <View className="flex shrink flex-row items-center gap-0.5">
          <Text className="max-w-[60%] shrink" numberOfLines={2}>
            <Icon as={MapPin} className="size-4" /> Студентски Град блок 14 етаж 7 ап 53
          </Text>
          <Icon as={ChevronDown} className="size-5" />
        </View>
        <View className="flex flex-row items-start gap-4">
          {/* <Text>Хей, Драго!</Text> */}
          <View className="items-center">
            <Icon as={Truck} />
            <Text>Поръчки</Text>
          </View>
        </View>
      </View>
      <View className="mx-2 mt-4 h-16 flex-row items-center bg-background shadow dark:bg-input">
        {/* style={[t.shadow]} */}
        <Input placeholder="Търси от 30 000 стоки..." className="h-full border-0" />
        <View className="flex-row items-center">
          <Button size={'icon'} variant={'ghost'}>
            <Icon as={Search} />
          </Button>
        </View>
      </View>
      <FlashList
        horizontal
        data={Array.from({ length: 1000 }, (_, i) => ({ id: `item-${i + 1}` }))}
        renderItem={({ item }) => <View className="size-24 rounded-full bg-muted"></View>}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="size-4" />}
        decelerationRate={'normal'}
      />
      <View>
        <Text>
          Carousel with CRO elements - free shipping, support time, 30 day return, на изплащане, експресна доставка
        </Text>
      </View>
      <Carousel
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <View className="size-16 rounded bg-muted"></View>}
      />
      <View className="mt-6">
        <Text className="mb-2">Featured</Text>
        <FlashList
          horizontal
          data={Array.from({ length: 10 }, (_, i) => ({ id: `item-${i + 1}` }))}
          renderItem={({ item }) => (
            <View
              style={{ width: Math.round(width * 0.8), aspectRatio: 9 / 16 }}
              className="items-center justify-center overflow-hidden rounded-xl bg-muted"
            >
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
      <View className="mt-6">
        <View style={{ margin: -4 }}>
          <FlashList
            data={[1, 2, 3]}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={{ flex: 1, padding: 4 }}>
                <Image
                  source={{ uri: 'https://picsum.photos/800/800' }}
                  style={{ width: '100%', aspectRatio: 1 }}
                  contentFit="cover"
                  cachePolicy="none"
                />
                <View>
                  <Text numberOfLines={1} className="text-xs text-muted-foreground">
                    Наниз от стъклени мъниста топче 6 мм дупка 1 мм прозрачен галванизиран с AB покритие цвят черен дъга
                    жълто-розов отенък ~66 броя
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
