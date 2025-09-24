import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { Image } from 'expo-image';

export default function CategoryCard({
  width = 88,
  name = ' Прежди и шнурове за мартеници',
  uri = 'https://images.emart.eu/picmenu/darvo-i-biren-karton_1532007661644.jpg',
}: {
  width?: number;
  name: string;
  uri: string;
}) {
  return (
    <View className="items-center" style={{ maxWidth: width + 20 }}>
      <Image source={{ uri }} style={{ width, aspectRatio: 1, borderRadius: 2000 }} />
      <Text numberOfLines={2} className="shrink text-center">
        {name}
      </Text>
    </View>
  );
}
