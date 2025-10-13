import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { View, ScrollView } from 'react-native';
import { Button } from '@/components/ui/button';
import { trpc } from '@/server/client-trpc';
import { useState } from 'react';

export default function Page() {
  const [greeting, setGreeting] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testTRPC = async () => {
    setLoading(true);
    try {
      const result = await trpc.hello.query();
      setGreeting(result);
    } catch (error) {
      setGreeting(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 p-4">
        <Text variant="h2" className="mb-4">
          tRPC Test
        </Text>

        <Button onPress={testTRPC} disabled={loading}>
          <Text>{loading ? 'Loading...' : 'Test tRPC'}</Text>
        </Button>

        {greeting && (
          <View className="mt-4 rounded-lg border border-border p-4">
            <Text variant="large">{greeting}</Text>
          </View>
        )}
        <Text>{process.env.EXPO_PUBLIC_BASE_URL}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
