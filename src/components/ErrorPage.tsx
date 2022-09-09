/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";

//@ts-ignore
import { ChevronRightIcon } from "@heroicons/react/solid";
import {
  BookmarkAltIcon,
  BookOpenIcon,
  RssIcon,
  ViewListIcon,
  //@ts-ignore
} from "@heroicons/react/outline";

const links = [
  {
    title: "About PBCM",
    description: "Learn about our ministry.",
    href: "/about",
    icon: BookOpenIcon,
  },
  {
    title: "Resources",
    description: "View our ministry resources.",
    href: "/resources",
    icon: ViewListIcon,
  },
  {
    title: "Biblical Counseling",
    description: "Why Biblical Counseling? Read more here.",
    href: "/resources/biblical-counseling",
    icon: BookmarkAltIcon,
  },
  {
    title: "Blog",
    description: "Read our latest news and articles",
    href: "/posts",
    icon: RssIcon,
  },
];

export default function ErrorPage({ error }: any) {
  return (
    <div className="bg-white">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 pt-16">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
            alt="Workflow"
          />
        </div>
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            {error ? (
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                Error: {error.message}
              </p>
            ) : (
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                Internal Application Error
              </p>
            )}
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              The page you are looking for could not be found.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
              Popular pages
            </h2>
            <ul
              role="list"
              className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative py-6 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
                      <link.icon
                        className="h-6 w-6 text-indigo-700"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <Link href={link.href} className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </Link>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
