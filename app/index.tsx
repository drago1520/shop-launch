import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "@/components/ui/text"
import { ScrollView, View } from "react-native";
import { Link } from "expo-router";
import { Button } from "@/components/ui/button";

export default function Page() {
  
  return (
    <SafeAreaView>
      <Link href={'/full-index'}><Text>Theme</Text></Link>
      <View className="flex flex-row justify-between">
        <Text>Доставка до адрес</Text>
        <View className="flex flex-row">
          <Text>Profile</Text>
          <Text>Orders</Text>
        </View>
      </View>
      <View className="w-full h-20 bg-muted"></View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="py-8">
        <View className="size-24 bg-muted rounded-full mr-4"></View>
        <View className="size-24 bg-muted rounded-full mr-4"></View>
        <View className="size-24 bg-muted rounded-full mr-4"></View>
        <View className="size-24 bg-muted rounded-full mr-4"></View>
        <View className="size-24 bg-muted rounded-full"></View>
      </ScrollView>
      <View>
        <Text>Carousel with CRO elements - free shipping, support time, 30 day return, на изплащане, експресна доставка</Text>
      </View>
        <Link href={'/carousel-test'} asChild>
        <Button variant={'ghost'}>
          <Text>carousel</Text>
        </Button>
        </Link>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      </ScrollView>
    </SafeAreaView>
  );
}