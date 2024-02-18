import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: 'yi9r5xl6',
    dataset: 'production',
    useCdn: true, // Set to false if you want to fetch data from the source, not the CDN
    apiVersion: '2022-03-07',
    token: process.env.NEXT_PUBLIC_TOKEN
});