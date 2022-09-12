import * as React from "react";
import Link from "next/link";
import { LoadingSpinner } from "../LoadingSpinner";
import { NoDataLayout } from "../Layouts/NoDataLayout";
import { Compass } from "react-feather";
import { GhostButton } from "../Button";
import { EventType } from "../../clients/parsers/event";
import { MarkdownRenderer } from "../MarkdownRenderer";

export function EventDetail({ eventInfo }: any) {
  const { data, isLoading, isError } = eventInfo;

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center h-96">
        <LoadingSpinner />
      </div>
    );
  }

  if (!data?.event) {
    return (
      <NoDataLayout
        no_data_heading={"Events Coming Soon"}
        no_data_info={"Check back in the future for event info."}
      >
        <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
          <Compass className="text-secondary" size={32} />
          <Link href="/events">
            <a>
              <GhostButton>Back To Events</GhostButton>
            </a>
          </Link>
        </div>
      </NoDataLayout>
    );
  }

  const { event } = data;
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
                  src={event[0]?.eventImage}
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-indigo-200 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">{event[0].title}</span>
                  <span className="block text-2xl text-slate-100">
                    {event[0]?.eventBlurb}
                  </span>
                </h1>
              </div>
            </div>
            <Speakers speakers={event[0]?.eventSpeakers} />
          </div>
        </div>
      </main>
    </div>
  );
}

interface SpeakersInterface {
  speakers: EventType["eventSpeakers"];
}

const Speakers = ({ speakers }: SpeakersInterface) => {
  return (
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meet our speakers
        </h2>
        <ul
          role="list"
          className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
        >
          {speakers.map((speaker) => (
            <li key={speaker?.name}>
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                  <img
                    className="rounded-lg object-cover shadow-lg"
                    src={speaker?.speakerImage}
                    alt=""
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{speaker?.name}</h3>
                    </div>
                    <div className="text-lg">
                      <MarkdownRenderer children={speaker?.bio} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
