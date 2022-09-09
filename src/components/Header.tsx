/* This example requires Tailwind CSS v2.0+ */
import image from "/public/PBCM_Purple.png";
// import cross from "/public/Cross.png";
import PBCM_Logo from "/public/CrossWithSameFontPBCMLogo.png";
import Link from "next/link";
import Image from "next/future/image";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  BookmarkAltIcon,
  BookOpenIcon,
  UserGroupIcon,
  CalendarIcon,
  MenuIcon,
  ArchiveIcon,
  GlobeIcon,
  GlobeAltIcon,
  HeartIcon,
  SupportIcon,
  XIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const about = [
  {
    name: "Who We Are",
    description: "About Peninsula Biblical Counseling Ministries",
    href: "/about",
    icon: ArchiveIcon,
  },
  {
    name: "Our Founder & President",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/founder",
    icon: AcademicCapIcon,
  },
  {
    name: "Board of Directors",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/board",
    icon: UserGroupIcon,
  },
  {
    name: "Our Mission & Beliefs",
    description: "Your customers' data will be safe and secure.",
    href: "/mission",
    icon: GlobeIcon,
  },
  {
    name: "Calendar",
    description: "View Upcoming Events",
    href: "/calendar",
    icon: CalendarIcon,
  },
];

// const resources = [
//   {
//     name: "Biblical Counseling",
//     description:
//       "Get all of your questions answered in our forums or contact support.",
//     href: "/biblical-counseling",
//     icon: SupportIcon,
//   },
//   // {
//   //   name: "Answers",
//   //   description:
//   //     "Learn how to maximize our platform to get the most out of it.",
//   //   href: "/answers",
//   //   icon: BookmarkAltIcon,
//   // },
//   // {
//   //   name: "Event - ACBC Certified Celebration",
//   //   description:
//   //     "November 12 - 14: PBCM is ACBC Certified! Join us in celebrating!",
//   //   href: "/acbc-celebration",
//   //   icon: CalendarIcon,
//   // },
//   // {
//   //   name: "ACBC Conference and Award",
//   //   description:
//   //     "Dr. Janie D Wilson and PBCM has been awarded ACBC Certification",
//   //   href: "/acbc-conference",
//   //   icon: StarIcon,
//   // },
//   // {
//   //   name: "Speaking Schedule",
//   //   description: "Understand how we take your privacy seriously.",
//   //   href: "/schedule",
//   //   icon: SpeakerphoneIcon,
//   // },
// ];

const equipping = [
  {
    name: "Equipping",
    description: "Equipping in Biblical Counseling",
    href: "/equipping",
    icon: BookmarkAltIcon,
  },
  {
    name: "PBCM 2022 Vision",
    description:
      "Introducing, teaching, and establishing the ministry of biblical counseling",
    href: "/pbcm-2022-vision",
    icon: GlobeAltIcon,
  },
  {
    name: "Cancer Care Ministry",
    description: "Raise up cancer care ministries in our local churches.",
    href: "/cancer-care",
    icon: HeartIcon,
  },
  {
    name: "Titus 2 - Women's Ministry",
    description:
      "To teach and equip women of faith to live out their Christian faith.",
    href: "/titus-2",
    icon: BookOpenIcon,
  },
  {
    name: "Blog",
    description: "Articles and writings to help you live by faith.",
    href: "/blog",
    icon: NewspaperIcon,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <Image className="w-auto h-24" src={PBCM_Logo} alt="" />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              <Link href="/biblical-counseling">
                <a>
                  <span
                    className="text-gray-500
                      group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
                  >
                    Counseling
                  </span>
                </a>
              </Link>
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    )}
                  >
                    <span>About</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {about.map((item) => (
                            <Popover.Button
                              key={item.name}
                              className="inline-flex"
                            >
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 p-3 flex text-left items-start rounded-lg hover:bg-gray-50">
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-tyrianPurple-300"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </Popover.Button>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"></div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
                    )}
                  >
                    <span>Equipping</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {equipping.map((item) => (
                            <Popover.Button
                              key={item.name}
                              className="inline-flex"
                            >
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 p-3 flex text-left items-start rounded-lg hover:bg-gray-50">
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-tyrianPurple-300"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </Popover.Button>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover.Button className="inline-flex">
              <Link href="/contact">
                <a className="text-left font-medium text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </Link>
            </Popover.Button>
            <Popover.Button className="inline-flex">
              <Link href="/donate">
                <a className="text-left font-medium text-gray-500 hover:text-gray-900">
                  Donate
                </a>
              </Link>
            </Popover.Button>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src={image}
                    alt="PBCM Cross Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {about.map((item) => (
                    <Popover.Button key={item.name + "popover"}>
                      <Link key={item.name + "popoverlink"} href={item.href}>
                        <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-tyrianPurple-300 to-tyrianPurple-600 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      </Link>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Popover.Button className="inline-flex">
                  <Link href="/contact">
                    <a className="text-left font-medium text-gray-900 hover:text-gray-700">
                      Contact
                    </a>
                  </Link>
                </Popover.Button>
                <Popover.Button className="inline-flex">
                  <Link href="/donate">
                    <a className="text-left font-medium text-gray-900 hover:text-gray-700">
                      Donate
                    </a>
                  </Link>
                </Popover.Button>
                <Popover.Button className="inline-flex">
                  <Link href="/biblical-counseling">
                    <a className="text-left font-medium text-gray-900 hover:text-gray-700">
                      Counseling
                    </a>
                  </Link>
                </Popover.Button>
                {equipping.map((item) => (
                  <Popover.Button
                    key={item.name + "popover"}
                    className="inline-flex"
                  >
                    <Link key={item.name + "popoverlink"} href={item.href}>
                      <a className="text-left font-medium text-gray-900 hover:text-gray-700">
                        {item.name}
                      </a>
                    </Link>
                  </Popover.Button>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
