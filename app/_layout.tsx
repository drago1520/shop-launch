import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack, useGlobalSearchParams, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { PostHogProvider, usePostHog } from 'posthog-react-native';
import { useEffect } from 'react';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const posthog = usePostHog(); // use the usePostHog hook if using the PostHogProvider or your own custom posthog instance
  // Track the location in your analytics provider here.
  useEffect(() => {
    posthog.screen(pathname, params);
  }, [pathname, params, posthog]);

  return (
    <PostHogProvider
      apiKey="phc_rtWVkurqJiBqLjZxalfmh2oppe3kwtShfrC9BNqEmhP"
      options={{
        host: 'https://eu.i.posthog.com',
        enableSessionReplay: true,
        captureAppLifecycleEvents: true,
      }}
      autocapture={true}
    >
      <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <Stack />
        <PortalHost />
      </ThemeProvider>
    </PostHogProvider>
  );
}
