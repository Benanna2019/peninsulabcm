// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { allPostsRouter } from "./allPosts";
import { postBySlugRouter } from "./postBySlug";
import { allCalendarEventsRouter } from "./calendarEvents";
import { featuredArticleRouter } from "./featuredArticle";
import { allEventsRouter } from "./allEvents";
import { eventBySlugRouter } from "./eventBySlug";
import { featuredEventRouter } from "./featuredEvent";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("posts.", allPostsRouter)
  .merge("posts.", featuredArticleRouter)
  .merge("singlePost.", postBySlugRouter)
  .merge("events.", allCalendarEventsRouter)
  .merge("events.", allEventsRouter)
  .merge("events.", eventBySlugRouter)
  .merge("events.", featuredEventRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
