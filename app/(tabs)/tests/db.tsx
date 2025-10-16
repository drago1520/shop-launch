import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { View, ScrollView } from 'react-native';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { API_ } from '@/server/client-trpc';

export default function Page() {
  const [greeting, setGreeting] = useState<string>('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const testTRPC = async () => {
    setLoading(true);
    try {
      const result = await API_.hello.query();
      setGreeting(result);
    } catch (error) {
      setError(`Error: ${error}`);
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
            <Text variant="large">{greeting || error || ''}</Text>
          </View>
        )}
        <Text>{process.env.EXPO_PUBLIC_BASE_URL}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
