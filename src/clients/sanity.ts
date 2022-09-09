import * as dotenv from "dotenv";
dotenv.config();
import sanityClient, { SanityClient } from "@sanity/client";
import { z } from "zod";

export const ConfigSchema = z.object({
  dataset: z.string(),
  projectId: z.string(),
  token: z.string(),
  apiVersion: z.string(),
});

export function initializeClient() {
  const config = ConfigSchema.parse({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    apiVersion: "2021-10-21", // use current UTC date - see "specifying API version"!
  });
  return sanityClient({ ...config, useCdn: false });
}

const postFields = `
    _id,
    title,
    'date': _createdAt,
    excerpt,
    'slug': slug.current,
    'coverImage': mainImage.asset->url,
    'author': author->{name, 'picture': image.asset->url},
    'body': body,
    'readingTime': readingTime
  `;

export const getAllPosts = (client: SanityClient) => async () => {
  const allPostsQuery = `*[_type == "post"] | order(publishedAt desc){
    ${postFields}
  }`;
  return await fetchRecords(client, allPostsQuery);
};

export const getPostBySlug = (client: SanityClient) => async (slug: string) => {
  // Need to add in filtering by using the slug.
  const allPosts = await getAllPosts(client)();
  return allPosts.filter((post: any) => post.slug === slug);
};

export const getAllCalendarEvents = (client: SanityClient) => async () => {
  const eventsForCalendarQuery = `*[_type == 'event']{_id, title, 'eventImage': eventImage.asset->url, startDate, endDate}`;
  return await fetchRecords(client, eventsForCalendarQuery);
};

async function fetchRecords(client: SanityClient, query: string) {
  const records = await client.fetch(query);
  return records;
}

export default (client = initializeClient()) => ({
  getAllPosts: getAllPosts(client),
  getPostBySlug: getPostBySlug(client),
  getAllCalendarEvents: getAllCalendarEvents(client),
});
