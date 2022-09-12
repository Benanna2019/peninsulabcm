import { createRouter } from "./context";
import Sanity from "../../clients/sanity";

const sanity = Sanity();

export const featuredEventRouter = createRouter().query("featuredEvent", {
  async resolve() {
    return {
      featuredEvent: await sanity.getFeaturedEvent(),
    };
  },
});
