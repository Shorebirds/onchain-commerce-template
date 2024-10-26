export const COINBASE_COMMERCE_API_KEY = "38d41058-2113-4986-a616-696cbd745774"
  process.env.NEXT_PUBLIC_COINBASE_COMMERCE_API_KEY || '';
// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://onchain-commerce-template.vercel.app';
export const NEXT_PUBLIC_CDP_API_KEY = "qAVfQloW6mgPMuA2AIfiwNyrlUr8imY9" process.env.NEXT_PUBLIC_CDP_API_KEY;
