import { useThemeColors } from '@/lib/theme';
import { View } from 'react-native';
import { Rating } from 'react-native-ratings';

export default function Page() {
  const { foreground } = useThemeColors();

  return (
    <View>
      <Rating
        imageSize={24}
        startingValue={5}
        style={{ backgroundColor: '#00000' }}
        onFinishRating={(rating: number) => console.log(`rating: ${rating}`)}
      />
      <View className="size-24" style={{ backgroundColor: foreground }}></View>
    </View>
  );
}
