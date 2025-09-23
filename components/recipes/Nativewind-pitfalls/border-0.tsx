import { Input } from '@/components/ui/input';
import { View } from 'react-native';

//Must use border-0
export default function BorderNone_NotWorking() {
  return (
    <View>
      <Input className="border-0" />
    </View>
  );
}
