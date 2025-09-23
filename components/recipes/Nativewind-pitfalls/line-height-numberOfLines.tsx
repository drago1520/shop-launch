import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { Icon } from '@/components/ui/icon';
import { MapPin } from 'lucide-react-native';

//Adding line-height by any means will not change it, when we have numberOfLines
export default function Leading_DontWorkOn_numberOfLines() {
  return (
    <View>
      <Text className="max-w-[60%] shrink leading-3" numberOfLines={2}>
        <Icon as={MapPin} className="size-4" /> Студентски Град блок 14 етаж 7 ап 53
      </Text>
    </View>
  );
}
