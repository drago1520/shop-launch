import { Text } from "@/components/ui/text"
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const {id} = useLocalSearchParams()
  return (
    <SafeAreaView>
      <Text>{id} 1234</Text>
    </SafeAreaView>
  );
}