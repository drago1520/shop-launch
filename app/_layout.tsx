import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack, useGlobalSearchParams, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { PostHogProvider, usePostHog } from 'posthog-react-native';
import { useEffect, StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export { ErrorBoundary } from 'expo-router';
const queryClient = new QueryClient();

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
      <QueryClientProvider client={queryClient}>
        <PostHogProvider
          apiKey="phc_rtWVkurqJiBqLjZxalfmh2oppe3kwtShfrC9BNqEmhP"
          options={{
            host: 'https://eu.i.posthog.com',
            enableSessionReplay: true,
            captureAppLifecycleEvents: true,
          }}
          autocapture={true}
        >
          <GestureHandlerRootView>
            <SafeAreaProvider>
              <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
                <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
                {/* <SafeAreaView className='flex flex-1'> */}
                <Stack screenOptions={{ headerShown: true }} />
                {/* </SafeAreaView> */}
                <PortalHost />
                <TrackPosthogPageView />
              </ThemeProvider>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </PostHogProvider>
      </QueryClientProvider>
  );
}

function TrackPosthogPageView() {
  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const posthog = usePostHog(); // use the usePostHog hook if using the PostHogProvider or your own custom posthog instance
  // Track the location in your analytics provider here.
  useEffect(() => {
    posthog.screen(pathname, params);
  }, [pathname, params, posthog]);
  return <></>;
}
