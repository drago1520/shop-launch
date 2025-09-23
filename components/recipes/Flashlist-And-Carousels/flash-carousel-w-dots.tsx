import React from 'react';
import { View } from 'react-native';
import { Carousel } from 'react-native-flash-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { width } from '@/lib/utils';

export default function FlashCarouselDots() {
  const data = Array(10).fill(0);

  return (
    // <SafeAreaView className="flex-1 items-center justify-center py-4">
    <Carousel data={data} renderItem={({ index }) => <Card num={index + 1} />} pagination autoScroll />
    // </SafeAreaView>
  );
}

const Card = ({ num }: { num: number }) => (
  <View
    className="items-center justify-center"
    style={{ width: width - 50 * 2, height: 350, marginHorizontal: 50, backgroundColor: randomColor() }}
  >
    <Text className="text-7xl">{num}</Text>
  </View>
);

const randomNumber = () => Math.floor(Math.random() * 255);
const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
