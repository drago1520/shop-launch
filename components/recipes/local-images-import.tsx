import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { width } from '@/lib/utils';

export default function Page() {
  return (
    <SafeAreaView>
      <Image
        source={require('@/assets/images/1.webp')}
        style={{ width: Math.round(width * 0.8), aspectRatio: 9 / 16, borderRadius: 4 }}
      />
    </SafeAreaView>
  );
}
