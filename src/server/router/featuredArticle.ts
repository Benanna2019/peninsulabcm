import { createRouter } from "./context";
import Sanity from "../../clients/sanity";

const sanity = Sanity();

export const featuredArticleRouter = createRouter().query("featuredArticle", {
  async resolve() {
    return {
      featuredArticle: await sanity.getFeaturedArticle(),
    };
  },
});
