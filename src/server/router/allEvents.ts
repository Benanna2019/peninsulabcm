import { createRouter } from "./context";
import Sanity from "../../clients/sanity";

const sanity = Sanity();

export const allEventsRouter = createRouter().query("allEvents", {
  async resolve() {
    return {
      allEvents: await sanity.getAllEvents(),
    };
  },
});
