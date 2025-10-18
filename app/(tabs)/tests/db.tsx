import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { API_, BunTRPC } from '@/server/client-trpc';
import { useState } from 'react';
import { View } from 'react-native';

export default function Page() {
  const [latency, setLatency] = useState(0),
    [error, setError] = useState(''),
    [msg, setMsg] = useState('');
  const onPress = async (
    type:
      | 'trpcExpoAPI'
      | 'bunTrpcAdapter'
      | 'bunFetch'
      | 'bunFetchFastify'
      | 'bunTrpcMysqlDrizzle'
      | 'expoApiTrpcDrizzle',
  ) => {
    const start = performance.now();
    if (type === 'trpcExpoAPI') {
      const m = await API_.hello.query();
      setLatency(performance.now() - start);
      setMsg(m);
    }
    if (type === 'bunTrpcAdapter') {
      const m = await BunTRPC.hello.query();
      setLatency(performance.now() - start);
      setMsg(m);
    }
    if (type === 'bunFetch') {
      const r = await fetch('http://192.168.0.3:3005');
      const { m } = await r.json();
      setLatency(performance.now() - start);
      setMsg(m);
    }
    if (type === 'bunFetchFastify') {
      const r = await fetch('http://192.168.0.3:3006');
      const { m } = await r.json();
      setLatency(performance.now() - start);
      setMsg(m);
    }
    if (type === 'bunTrpcMysqlDrizzle') {
      const [{ ime: m }] = await BunTRPC.clientMySQL.query();
      setLatency(performance.now() - start);
      setMsg(m);
    }
    if (type === 'expoApiTrpcDrizzle') {
      const [{ ime: m }] = await API_.clientMySQL.query();
      setLatency(performance.now() - start);
      setMsg(m);
    }
  };
  return (
    <View>
      <Text>Message: {msg}</Text>
      <Text>Latency: {latency}</Text>
      <Text>{error}</Text>
      <View className="gap-4">
        <Button onPress={() => onPress('trpcExpoAPI')}>
          <Text>Trpc Expo API</Text>
        </Button>
        <Button onPress={() => onPress('bunTrpcAdapter')}>
          <Text>Bun Trpc Adapter</Text>
        </Button>
        <Button onPress={() => onPress('bunFetch')}>
          <Text>Bun fetch</Text>
        </Button>
        <Button onPress={() => onPress('bunFetchFastify')}>
          <Text>Bun Fastify fetch</Text>
        </Button>
        <Button onPress={() => onPress('bunTrpcMysqlDrizzle')}>
          <Text>Bun MYSQL Trpc Drizzle</Text>
        </Button>
        <Button onPress={() => onPress('expoApiTrpcDrizzle')}>
          <Text>Expo MYSQL Trpc Drizzle</Text>
        </Button>
      </View>
    </View>
  );
}
