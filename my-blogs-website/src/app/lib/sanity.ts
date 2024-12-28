import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01',
  useCdn: false,
});

// Configure the image URL builder
const builder = imageUrlBuilder(client);

// Utility function to generate image URLs
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}

export default client;
