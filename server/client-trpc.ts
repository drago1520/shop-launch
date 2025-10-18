import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '.';

export const API_ = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.EXPO_PUBLIC_BASE_URL}/api/trpc`,
    }),
  ],
});

export const BunTRPC = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `http://192.168.0.3:3004`,
    }),
  ],
});
