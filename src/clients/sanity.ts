import * as dotenv from "dotenv";
dotenv.config();
import sanityClient, { SanityClient } from "@sanity/client";
import { z } from "zod";
import { PostSchema, PostType, Post } from "./parsers/post";
import { EventSchema, EventType } from "./parsers/event";

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

const removeDrafts = `!(_id in path('drafts.**'))`;

const postFields = `
    _id,
    title,
    'date': _createdAt,
    excerpt,
    'slug': slug.current,
    "categories": categories[]->,
    'coverImage': mainImage.asset->url,
    'author': author->{name, 'picture': image.asset->url},
    'body': body,
    'readingTime': readingTime,
    featuredArticle,
  `;

const eventFields = `
    _id,
    _type,
    title,
    "slug": slug.current,
    startDate,
    endDate,
    eventBlurb,
    eventStreetAddress,
    eventCity,
    eventState,
    eventZip,
    "eventCategories": eventCategories[]->,
    "eventSpeakers": speakers[]->{name, bio, "speakerImage": image.asset->url, "slug": slug.current},
    "eventImage": eventImage.asset->url,
`;

export const getAllPosts = (client: SanityClient) => async () => {
  const allPostsQuery = `*[_type == "post" && ${removeDrafts}] | order(_createdAt desc){
    ${postFields}
  }`;
  return await fetchRecords(client, allPostsQuery);
};

export const getPostBySlug = (client: SanityClient) => async (slug: string) => {
  // Need to add in filtering by using the slug.
  const allPosts = await getAllPosts(client)();
  return PostSchema.parse(
    allPosts.filter((post: PostType) => post.slug === slug)
  );
};

export const getFeaturedArticle = (client: SanityClient) => async () => {
  const featuredArticleSlugQuery = `*[_type == "featuredArticle" && ${removeDrafts}]{featuredArticle[]->{"slug": slug.current}}`;
  const data = await fetchRecords(client, featuredArticleSlugQuery);
  const featuredArticle = await getPostBySlug(client)(
    data[0].featuredArticle[0].slug
  );
  // write out Schema to parse the featured article
  return featuredArticle;
};

export const getAllCalendarEvents = (client: SanityClient) => async () => {
  const eventsForCalendarQuery = `*[_type == 'event' && ${removeDrafts}]{_id, title, 'eventImage': eventImage.asset->url, startDate, endDate}`;
  return await fetchRecords(client, eventsForCalendarQuery);
};

export const getAllEvents = (client: SanityClient) => async () => {
  const eventsQuery = `*[_type == 'event' && ${removeDrafts}] | order(_createdAt desc){${eventFields}}`;
  return await fetchRecords(client, eventsQuery);
};

export const getEventBySlug =
  (client: SanityClient) => async (slug: string) => {
    const allEvents = await getAllEvents(client)();
    return EventSchema.parse(
      allEvents.filter((event: EventType) => event.slug === slug)
    );
  };

export const getFeaturedEvent = (client: SanityClient) => async () => {
  const featuredEventSlugQuery = `*[_type == "featuredEvent" && ${removeDrafts}]{featuredEvent[]->{"slug": slug.current}}`;
  const data = await fetchRecords(client, featuredEventSlugQuery);
  const featuredEvent = await getEventBySlug(client)(
    data[0].featuredEvent[0].slug
  );
  // write out Schema to parse the featured event
  return featuredEvent;
};

async function fetchRecords(client: SanityClient, query: string) {
  const records = await client.fetch(query);
  return records;
}

export default (client = initializeClient()) => ({
  getAllPosts: getAllPosts(client),
  getPostBySlug: getPostBySlug(client),
  getAllCalendarEvents: getAllCalendarEvents(client),
  getFeaturedArticle: getFeaturedArticle(client),
  getAllEvents: getAllEvents(client),
  getEventBySlug: getEventBySlug(client),
  getFeaturedEvent: getFeaturedEvent(client),
});
