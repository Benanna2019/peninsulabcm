import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  UserGroupIcon,
  GlobeIcon,
  GlobeAltIcon,
  HeartIcon,
  XIcon,
  BookOpenIcon,
  //@ts-ignore
} from "@heroicons/react/outline";

const navigation = [
  {
    name: "Training",
    href: "/training",
    icon: AcademicCapIcon,
    current: false,
  },
  {
    name: "PBCM 2022 Vision",
    href: "/pbcm-2022-vision",
    icon: GlobeAltIcon,
    current: false,
  },
  {
    name: "Cancer Care Ministry",
    href: "/cancer-care",
    icon: HeartIcon,
    current: false,
  },
  {
    name: "Titus 2 - Women's Ministry",
    href: "/titus-2",
    icon: BookOpenIcon,
    current: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TrainingNav({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [current, setCurrent] = useState(false);

  function currentFocusedItem(item: any) {
    setCurrent(true);
  }

  return (
    <div className="h-screen flex overflow-hidden bg-warm-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-tyrianPurple-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-tyrianPurple-500">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => currentFocusedItem(item.current)}
                      className={classNames(
                        item.current
                          ? "bg-warm-gray-900 text-white"
                          : "text-warm-gray-300 hover:bg-warm-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-warm-gray-300"
                            : "text-warm-gray-400 group-hover:text-warm-gray-300",
                          "mr-4 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-tyrianPurple-500 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => currentFocusedItem(item.current)}
                    className={classNames(
                      item.current
                        ? "bg-tyrianPurple-900 text-white"
                        : "text-warm-gray-300 hover:bg-tyrianPurple-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-warm-gray-300"
                          : "text-warm-gray-400 group-hover:text-warm-gray-300",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              {/* Need to make this component the 'sidebar' on
                  layout page */}
              {/* /End replace */}
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
