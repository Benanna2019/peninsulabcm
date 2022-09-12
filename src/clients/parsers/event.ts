import { z } from "zod";

export interface EventType {
  _id: string;
  _type: "event";
  endDate: string;
  eventBlurb: string;
  eventCategories: {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: "category";
    _updatedAt: string;
    title: string;
  }[];
  eventCity: string;
  eventImage: string;
  eventOnlineLink?: string | null;
  eventSpeakers: {
    bio: string;
    name: string;
    slug: string;
    speakerImage: string;
  }[];
  eventState: string;
  eventStreetAddress: string;
  eventZip: string;
  slug: string;
  startDate: string;
  title: string;
}

export const CalendarEvent = z.array(
  z.object({
    _id: z.string(),
    endDate: z.string(),
    startDate: z.string(),
    eventImage: z.string(),
    title: z.string(),
  })
);

export const Event = z.object({
  _id: z.string(),
  _type: z.literal("event"),
  endDate: z.string(),
  eventBlurb: z.string(),
  eventCategories: z.array(
    z.object({
      _createdAt: z.string(),
      _id: z.string(),
      _rev: z.string(),
      _type: z.literal("category"),
      _updatedAt: z.string(),
      title: z.string(),
    })
  ),
  eventCity: z.string(),
  eventImage: z.string(),
  eventOnlineLink: z.string().nullish(),
  eventSpeakers: z.array(
    z.object({
      bio: z.string(),
      name: z.string(),
      slug: z.string(),
      speakerImage: z.string(),
    })
  ),
  eventState: z.string(),
  eventStreetAddress: z.string(),
  eventZip: z.string(),
  slug: z.string(),
  startDate: z.string(),
  title: z.string(),
});

export const EventSchema = z.array(Event);
