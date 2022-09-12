//@ts-nocheck
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AcademicCapIcon,
  UserGroupIcon,
  GlobeIcon,
  BookOpenIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import { Sidebar } from "./Sidebar";
import { CalendarIcon } from "@heroicons/react/solid";

export default function AboutNav({ children }: any) {
  const router = useRouter();

  const sections = [
    {
      label: "About PBCM",
      items: [
        {
          label: "Who We Are",
          href: "/about",
          trailingAccessory: null,
          isActive: router.asPath === "/about",
          icon: BookOpenIcon,
          isExternal: false,
        },
        {
          label: "President & Founder",
          href: "/founder",
          trailingAccessory: null,
          isActive: router.asPath === "/founder",
          icon: AcademicCapIcon,
          isExternal: false,
        },
        {
          label: "Board of Directors",
          href: "/board",
          trailingAccessory: null,
          isActive: router.asPath === "/board",
          icon: UserGroupIcon,
          isExternal: false,
        },
        {
          label: "Our Mission & Beliefs",
          href: "/mission",
          trailingAccessory: null,
          isActive: router.asPath === "/mission",
          icon: GlobeIcon,
          isExternal: false,
        },
        {
          label: "Calendar",
          href: "/calendar",
          trailingAccessory: null,
          isActive: router.asPath === "/calendar",
          icon: CalendarIcon,
          isExternal: false,
        },
        {
          label: "Events",
          href: "/events",
          trailingAccessory: null,
          isActive: router.asPath === "/events",
          icon: SpeakerphoneIcon,
        },
      ],
    },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar sections={sections} />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
