import { Text } from '@/components/ui/text';
import { ScrollView, View } from 'react-native';
import { Button } from '@/components/ui/button';
import { FlashList } from '@shopify/flash-list';
import { width } from '@/lib/utils';
import { Image } from 'expo-image';
import { Icon } from '@/components/ui/icon';
import { ChevronDown, MapPin, Truck } from 'lucide-react-native';
import CategoryCard from '@/components/category-card';
// import {t} from "react-native-tailwindcss"
import SearchBar from '@/components/search-bar';
import ProductCard from '@/components/cards/product-card';
import { sampleProducts } from '@/components/cards/product-data';

export default function Page() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="mx-2 flex flex-row items-center justify-between">
        <View className="flex shrink flex-row items-center gap-0.5">
          <Text className="w-fit max-w-[80%] shrink" numberOfLines={1}>
            <Icon as={MapPin} className="size-4" /> Студентски Град блок 14
          </Text>
          <Icon as={ChevronDown} className="size-5" />
        </View>
        {/* <Text>Хей, Драго!</Text> */}
        <Button variant={'ghost'} className="h-fit flex-col gap-0">
          <Icon className="text-secondary" as={Truck} />
          <Text className="text-secondary">Поръчки</Text>
        </Button>
      </View>
      <View className="mx-2 my-2 flex-1">
        <SearchBar />
      </View>
      <View className="relative mt-2">
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
      </View>
      {/* <View>
        <Text>
          Carousel with CRO elements - free shipping, support time, 30 day return, на изплащане, експресна доставка
        </Text>
      </View> */}
      <View className="mt-2">
        <FlashList
          horizontal
          data={[
            { id: '1', image: require('@/assets/images/1.webp') },
            { id: '2', image: require('@/assets/images/2.webp') },
            { id: '3', image: require('@/assets/images/1.webp') },
            { id: '4', image: require('@/assets/images/2.webp') },
            { id: '5', image: require('@/assets/images/1.webp') },
            { id: '6', image: require('@/assets/images/2.webp') },
            { id: '7', image: require('@/assets/images/1.webp') },
            { id: '8', image: require('@/assets/images/2.webp') },
          ]}
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{ width: Math.round(width * 0.8), aspectRatio: 9 / 16, borderRadius: 4 }}
            />
          )}
          // first item => 0 (flush left)
          // subsequent => i * (cardWidth + separator) - halfRemaining
          // halfRemaining = (width - cardWidth)/2 so that the card's center aligns with screen center
          snapToOffsets={Array.from({ length: 10 }, (_, i) =>
            i === 0 ? 0 : i * (Math.round(width * 0.8) + 12) - (width - Math.round(width * 0.8)) / 2,
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
        />
      </View>
      <View className="mt-2">
        <View>
          <FlashList
            data={sampleProducts}
            numColumns={2}
            masonry
            renderItem={({ item }) => (
              <View className="my-2 flex-1">
                <ProductCard data={item} />
              </View>
            )}
            keyExtractor={item => item.id}
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
