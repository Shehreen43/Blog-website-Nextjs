import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID, // This should match your Sanity project ID
    dataset: process.env.SANITY_DATASET,       // This should match your Sanity dataset (e.g., "production")
  },
  autoUpdates: true, // Optional: Enable auto-updates for studios
});
