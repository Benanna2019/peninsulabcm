import { createRouter } from "./context";
import Sanity from "../../clients/sanity";

const sanity = Sanity();

export const allCalendarEventsRouter = createRouter().query("allEvents", {
  async resolve() {
    return {
      allCalendarEvents: await sanity.getAllCalendarEvents(),
    };
  },
});
