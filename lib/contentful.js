import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,       // from API Keys page
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Delivery API token
});

export async function getBlogPosts() {
  const res = await client.getEntries({
    content_type: 'blogPosts', // your Contentful content type ID
    order: '-sys.createdAt',  // newest first
  });

  return res.items;
}