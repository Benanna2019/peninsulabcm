import * as React from "react";
import Link from "next/link";
import { LoadingSpinner } from "../LoadingSpinner";
import { NoDataLayout } from "../Layouts/NoDataLayout";
import { Compass } from "react-feather";
import { GhostButton } from "../Button";
import { EventType } from "../../clients/parsers/event";
import { format, parseJSON } from "date-fns";
import { isEqual } from "lodash/fp";

export function EventLayout({ events, featuredEvent }: any) {
  const {
    data: allEventsData,
    isLoading: loadingAllEvents,
    isError: eventError,
  } = events;
  const { data: featuredEventData, isLoading: loadingFeaturedEvent } =
    featuredEvent;

  if (loadingAllEvents) {
    return (
      <div className="flex flex-1 items-center justify-center h-96">
        <LoadingSpinner />
      </div>
    );
  }

  if (
    !allEventsData?.allEvents ||
    allEventsData?.allEvents?.length === 0 ||
    eventError
  ) {
    return (
      <NoDataLayout
        no_data_heading={"Events Coming Soon"}
        no_data_info={"Check back in the future for event info."}
      >
        <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
          <Compass className="text-secondary" size={32} />
          <Link href="/">
            <a>
              <GhostButton>Back Home</GhostButton>
            </a>
          </Link>
        </div>
      </NoDataLayout>
    );
  }

  const { allEvents } = allEventsData;
  const mainEvent = featuredEventData?.featuredEvent[0];
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2" />
          <div className="max-w-screen ">
            <div className="relative shadow-xl sm:overflow-hidden ">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-indigo-200 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">PBCM Events</span>
                  <span className="block text-2xl text-slate-100">
                    Look at our future and past events below.
                  </span>
                </h1>
              </div>
            </div>
            {allEvents?.map((event: EventType) => (
              <Event
                key={event._id}
                event={event}
                mainEventTitle={mainEvent.title}
                mainEventSlug={mainEvent.slug}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

interface EventInterface {
  event: EventType;
  mainEventTitle: string;
  mainEventSlug: string;
}

const Event = ({ event, mainEventTitle, mainEventSlug }: EventInterface) => {
  const eventStartTime = parseJSON(event?.startDate);
  const eventEndTime = parseJSON(event?.endDate);
  const featuredTitle = isEqual(event?.title, mainEventTitle)
    ? "Featured Event"
    : null;
  return (
    <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <div key={event?.title}>
            {featuredTitle ? (
              <p className="text-sm font-medium text-green-700 pb-5">
                <Link href={`/events/${encodeURIComponent(mainEventSlug)}`}>
                  <a className="hover:underline">{featuredTitle}</a>
                </Link>
              </p>
            ) : null}
            <p className="text-sm text-gray-500">
              <time dateTime={event?.startDate}>
                {format(eventStartTime, "E, MMM dd")} -{" "}
                {format(eventEndTime, "E, MMM dd")}
              </time>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                {event?.title}
              </p>
              <p className="mt-3 text-base text-gray-500">
                {event?.eventBlurb}
              </p>
            </a>
            <div className="mt-3">
              <Link
                href={`/events/${encodeURIComponent(event?.slug)}`}
                className="flex"
              >
                <a className="text-base font-semibold text-blue-600 hover:text-indigo-500 hover:underline">
                  Read about this event
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
