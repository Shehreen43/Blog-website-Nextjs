import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Use the values from the `.env.local` file
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false, // `false` means you'll get the latest data
});
 
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return (
        builder.image(source)
    )
}





export default client;



