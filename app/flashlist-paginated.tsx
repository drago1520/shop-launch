import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Carousel } from 'react-native-flash-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { width } from '@/lib/utils';

const cardHeight = 350;

export default function App() {
  const data = Array(10).fill(0);

  return (
    <SafeAreaView className="flex-1 items-center justify-center py-4">
      <Carousel data={data} renderItem={({ index }) => <Card num={index + 1} />} pagination autoScroll />
    </SafeAreaView>
  );
}

const Card = ({ num }: { num: number }) => (
  <View style={[styles.card, { backgroundColor: randomColor() }]}>
    <Text className="text-7xl">{num}</Text>
  </View>
);

const randomNumber = () => Math.floor(Math.random() * 255);
const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  card: {
    width: width - 50 * 2,
    height: cardHeight,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  cardText: {
    fontSize: 100,
    color: 'white',
  },
});
