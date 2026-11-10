import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// This site has no ISR or cache revalidation. Keep the adapter's native dummy
// cache/queue defaults: Preview service bindings would otherwise call production.
const config = defineCloudflareConfig({
  incrementalCache: 'dummy',
  tagCache: 'dummy',
  queue: 'dummy',
});

// Keep the adapter build separate from the Next-only command to avoid recursion.
config.buildCommand = 'npm run build:next';

export default config;
