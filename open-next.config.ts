import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// This site has no ISR or cache revalidation. Keep the adapter's native dummy
// cache/queue defaults: Preview service bindings would otherwise call production.
export default defineCloudflareConfig({
  incrementalCache: 'dummy',
  tagCache: 'dummy',
  queue: 'dummy',
});
