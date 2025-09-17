import { Text } from "@/components/ui/text"
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Page() {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>{id} 1234</Text>
    </View>
  );
}