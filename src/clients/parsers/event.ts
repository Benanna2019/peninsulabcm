import { z } from "zod";

export interface EventType {
  _id?: string | null;
  _type?: "event" | null;
  endDate?: string | null;
  eventBlurb?: string | null;
  eventCategories?:
    | {
        _createdAt?: string | null;
        _id?: string | null;
        _rev?: string | null;
        _type?: "category" | null;
        _updatedAt?: string | null;
        title?: string | null;
      }[]
    | null;
  eventCity?: string | null;
  eventImage?: string | null;
  eventOnlineLink?: string | null;
  eventSpeakers?:
    | {
        bio?: string | null;
        name?: string | null;
        slug?: string | null;
        speakerImage?: string | null;
      }[]
    | null;
  eventState?: string | null;
  eventStreetAddress?: string | null;
  eventZip?: string | null;
  slug?: string | null;
  startDate?: string | null;
  title?: string | null;
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

export const Event = z
  .object({
    _id: z.string().nullish(),
    _type: z.literal("event").nullish(),
    endDate: z.string().nullish(),
    eventBlurb: z.string().nullish(),
    eventCategories: z
      .array(
        z
          .object({
            _createdAt: z.string().nullish(),
            _id: z.string().nullish(),
            _rev: z.string().nullish(),
            _type: z.literal("category").nullish(),
            _updatedAt: z.string().nullish(),
            title: z.string().nullish(),
          })
          .nullish()
      )
      .nullish(),
    eventCity: z.string().nullish(),
    eventImage: z.string().nullish(),
    eventOnlineLink: z.string().nullish(),
    eventSpeakers: z
      .array(
        z
          .object({
            bio: z.string().optional(),
            name: z.string().optional(),
            slug: z.string().optional(),
            speakerImage: z.string().optional(),
          })
          .nullish()
      )
      .nullish(),
    eventState: z.string().nullish(),
    eventStreetAddress: z.string().nullish(),
    eventZip: z.string().nullish(),
    slug: z.string().nullish(),
    startDate: z.string().nullish(),
    title: z.string().nullish(),
  })
  .nullish();

export const EventSchema = z.array(Event);
