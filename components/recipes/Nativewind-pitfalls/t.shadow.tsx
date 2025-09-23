import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react-native';
import { View } from 'react-native';
// import { t } from 'react-native-tailwindcss';
// style={[t.shadow]}
export default function MustUseReactNativeTailwindcssShadow() {
  return (
    <View className="mx-2 mt-4 h-16 flex-row items-center bg-background">
      <Input placeholder="Търси от 30 000 стоки..." className="h-full border-0" />
      <Icon as={Search} />
    </View>
  );
}
