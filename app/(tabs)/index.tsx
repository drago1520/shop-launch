import { Text } from '@/components/ui/text';
import { ScrollView, View } from 'react-native';
import { Button } from '@/components/ui/button';
import { FlashList } from '@shopify/flash-list';
import { width } from '@/lib/utils';
import { Image } from 'expo-image';
import { LightRedRibbon } from '@/components/ui/ribbon';
import { Icon } from '@/components/ui/icon';
import { Check, ChevronDown, MapPin, Mic, Search, Truck } from 'lucide-react-native';
import { Input } from '@/components/ui/input';
import CategoryCard from '@/components/category-card';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeColors } from '@/lib/theme';
// import {t} from "react-native-tailwindcss"
import { Rating } from 'react-native-ratings';
import { ShoppingCartAdd } from '@/components/ui/icon-custom';

type Product = {
  id: string; //cat_no
  url: string;
  rating: number;
  image: string;
  image2?: string;
  title: string;
  p1: number; //price
  p2: number;
  p3: number;
  q1: number; //quantity
  q2: number;
  q3: number;
  unitLabel: 'бр.' | 'пак.' | 'броя' | string; //мярка - бр. пак. каш.
  brand?: string;
  currSign: string; //лв. $
  pickup: boolean;
  sameDay: boolean; //delivery
  delivery: boolean;
  unitsPerPack: number;
};

export default function Page() {
  const { background } = useThemeColors();

  return (
    <ScrollView className="mt-1" showsVerticalScrollIndicator={false}>
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
      <View className="mx-2 my-4 h-16 flex-row items-center rounded bg-background shadow-sm dark:bg-input">
        {/* style={[t.shadow]} */}
        <Input placeholder="Търси от 30 000 стоки..." className="h-full border-0 text-xl leading-none" />
        <View className="flex-row items-center">
          <Button size={'icon'} className="pr-4" variant={'ghost'}>
            <Icon as={Mic} />
          </Button>
          <Button size={'icon'} variant={'ghost'} className="pr-4">
            <Icon as={Search} />
          </Button>
        </View>
      </View>
      <View className="relative">
        <FlashList
          horizontal
          data={Array.from({ length: 1000 }, (_, i) => ({
            id: `item-${i + 1}`,
            uri:
              i % 2 === 0
                ? 'https://images.emart.eu/picmenu/darvo-i-biren-karton_1532007661644.jpg'
                : 'https://images.emart.eu/picmenu/martenici-em-art_1531572867422.jpg',
            name: i % 2 === 0 ? 'Прежди и шнурове за мартеници' : 'Мартеници Ем Арт',
          }))}
          renderItem={({ item }) => <CategoryCard name={item.name} uri={item.uri} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="size-2" />}
          decelerationRate={'normal'}
        />
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', background]} //NEVER use 'transparent'
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 40, pointerEvents: 'none' }}
        />
      </View>
      {/* <View>
        <Text>
          Carousel with CRO elements - free shipping, support time, 30 day return, на изплащане, експресна доставка
        </Text>
      </View> */}
      <View className="mt-6">
        <FlashList
          horizontal
          data={Array.from({ length: 10 }, (_, i) => ({ id: `банер 9:16 (${i + 1})` }))}
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
        <View>
          <FlashList
            data={[1, 2, 3]}
            numColumns={2}
            renderItem={({ item }) => (
              <View className="flex-1 items-start p-1 py-4">
                <Image
                  source={{ uri: 'https://picsum.photos/800/800' }}
                  style={{ width: '100%', aspectRatio: 1 }}
                  contentFit="cover"
                  cachePolicy="none"
                />
                <Rating
                  readonly
                  imageSize={20}
                  startingValue={5}
                  ratingBackgroundColor={background}
                  onFinishRating={(rating: number) => console.log(`rating: ${rating}`)}
                  style={{ backgroundColor: background, marginTop: 6 }}
                />
                <Text className="text-sm text-muted-foreground" ellipsizeMode="middle" numberOfLines={3}>
                  Декоративни карфици 55 мм цветни сърца -30 броя
                </Text>
                <Text className="my-0.5 text-lg font-semibold">
                  1.37 лв. <Text className="text-muted-foreground">/</Text> 0.70 €
                </Text>
                {/* <Text className="text-sm text-muted-foreground">(0.65 лв / 0.32 € бр.)</Text> */}
                <View className="gap-1">
                  <View className="w-full flex-row items-start justify-between">
                    <Text className="text-sm text-brand-blue-foreground">10-19 пак.</Text>
                    <View className="items-end">
                      <Text className="text-sm font-semibold text-brand-blue-foreground">
                        1.10 лв. <Text className="font-normal text-muted-foreground">/</Text> 0.56 €
                      </Text>
                      <Text className="text-sm font-semibold text-brand-blue-foreground">
                        ({Math.round(((1.37 - 1.1) / 1.37) * 100)} %)
                      </Text>
                      {/* <Text className='text-sm font-light text-brand-blue-foreground'>{(1.10/30).toFixed(2)} лв. / {(0.7/30).toFixed(2)} € бр.</Text> */}
                    </View>
                  </View>
                  <View className="w-full flex-row items-start justify-between">
                    <Text className="text-sm text-brand-blue-foreground">20 пак. +</Text>
                    <View className="items-end">
                      <Text className="text-sm font-semibold text-brand-blue-foreground">
                        0.96 лв. <Text className="font-normal text-muted-foreground">/</Text> 0.49 €
                      </Text>
                      <Text className="text-sm font-semibold text-brand-blue-foreground">
                        ({Math.round(((1.37 - 0.96) / 1.37) * 100)} %)
                      </Text>
                      {/* <Text className='text-sm font-light text-brand-blue-foreground'>{(1.10/30).toFixed(2)} лв. / {(0.7/30).toFixed(2)} € бр.</Text> */}
                    </View>
                  </View>
                </View>
                <View>
                  <View className="shrink flex-row items-center gap-0.5">
                    <Icon as={Check} className="text-brand-green-foreground" size={16} />
                    <Text className="text-sm text-brand-green-foreground">Вземане от магазин</Text>
                  </View>
                  <View className="shrink flex-row items-center gap-0.5">
                    <Icon as={Check} className="text-brand-green-foreground" size={16} />
                    <Text className="text-sm text-brand-green-foreground">Доставка същия ден</Text>
                  </View>
                  <View className="shrink flex-row items-center gap-0.5">
                    <Icon as={Check} className="text-brand-green-foreground" size={16} />
                    <Text className="text-sm text-brand-green-foreground">Доставка</Text>
                  </View>
                </View>
                <View className="self-end">
                  <Button size={'icon'} variant={'outline'} className="border-foreground">
                    <ShoppingCartAdd style={{ marginRight: 4 }} />
                  </Button>
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
