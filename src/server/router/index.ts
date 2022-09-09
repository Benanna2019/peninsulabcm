// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { allPostsRouter } from "./allPosts";
import { postBySlugRouter } from "./postBySlug";
import { allCalendarEventsRouter } from "./calendarEvents";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("posts.", allPostsRouter)
  .merge("singlePost.", postBySlugRouter)
  .merge("events.", allCalendarEventsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
