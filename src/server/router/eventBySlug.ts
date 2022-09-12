import { createRouter } from "./context";
import Sanity from "../../clients/sanity";
import { z } from "zod";

const sanity = Sanity();

export const eventBySlugRouter = createRouter().query("eventBySlug", {
  input: z
    .object({
      slug: z.string().nullish(),
    })
    .nullish(),
  async resolve({ input }) {
    return {
      event: await sanity.getEventBySlug(input?.slug as string),
    };
  },
});
