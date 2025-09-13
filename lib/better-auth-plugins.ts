import { BetterAuthPlugin } from 'better-auth';
import { expo } from '@better-auth/expo';
import { anonymous, magicLink as m, openAPI } from 'better-auth/plugins';
import { anonymousConfig } from './anonymous.config';
import { sendMagicLink } from './magic-link.config';

const magicLink =
  process.env.WITH_MAGIC_LINK === 'true'
    ? m({
        //? Works only if WITH_MAGIC_LINK == true
        sendMagicLink,
      })
    : undefined;

export const plugins: BetterAuthPlugin[] = [expo(), magicLink, openAPI(), anonymous(anonymousConfig)].filter(p => p !== undefined);
