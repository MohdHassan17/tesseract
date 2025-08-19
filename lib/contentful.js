import { createClient } from 'contentful';

export const client = createClient({
  space:  'lx27peodae3q'  ,  // from API Keys page
  accessToken: 'hLEMICcmNR57u41BPwNDZmClI1nsvIQDY6Rn32ZTCGM'// Delivery API token
});

export async function getBlogPosts() {
  const res = await client.getEntries({
    content_type: 'blogPosts', // your Contentful content type ID
    order: '-sys.createdAt',  // newest first
  });

  return res.items;
}