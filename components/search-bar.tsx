import { View } from 'react-native';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Icon } from './ui/icon';
import { Mic, Search } from 'lucide-react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';

export default function SearchBar() {
  // Local underline animation only for this search input
  const progress = useSharedValue(0); // 0 -> 1
  const underlineStyle = useAnimatedStyle(() => ({ width: `${progress.value * 100}%` }));

  return (
    <View className="relative h-14 flex-row items-center rounded border border-input bg-background shadow-sm dark:bg-input">
      <Input
        placeholder="Търси от 30 000 стоки..."
        className="h-full flex-1 border-0 leading-none"
        onFocus={() => {
          progress.value = withTiming(1, { duration: 220, easing: Easing.out(Easing.quad) });
        }}
        onBlur={() => {
          progress.value = withTiming(0, { duration: 170, easing: Easing.out(Easing.quad) });
        }}
      />
      <View className="flex flex-row items-center justify-end">
        <Button size={'icon'} className="pl-4 pr-4" variant={'ghost'}>
          <Icon as={Mic} className="text-secondary" />
        </Button>
        <Button size={'icon'} variant={'ghost'} className="pr-4">
          <Icon as={Search} className="text-secondary" />
        </Button>
      </View>
      <Animated.View
        className="pointer-events-none absolute -bottom-px left-0 h-0.5 bg-secondary"
        style={underlineStyle}
      />
    </View>
  );
}
