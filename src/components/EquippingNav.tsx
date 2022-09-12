import { useRouter } from "next/router";
import { useState } from "react";
import {
  AcademicCapIcon,
  GlobeAltIcon,
  HeartIcon,
  BookOpenIcon,
  BookmarkAltIcon,
} from "@heroicons/react/outline";
import { Sidebar } from "./Sidebar";
import { WritingIcon } from "./Icon";

export default function TrainingNav({ children }: any) {
  const [current, setCurrent] = useState(false);
  const router = useRouter();

  const sections = [
    {
      label: "Equipping Links",
      items: [
        {
          label: "Equipping",
          href: "/equipping",
          trailingAccessory: null,
          isActive: router.asPath === "/equipping",
          icon: AcademicCapIcon,
          isExternal: false,
        },
        {
          label: "PBCM 2022 Vision",
          href: "/pbcm-2022-vision",
          trailingAccessory: null,
          isActive: router.asPath === "/pbcm-2022-vision",
          icon: GlobeAltIcon,
          isExternal: false,
        },
        {
          label: "Cancer Care Ministry",
          href: "/cancer-care",
          trailingAccessory: null,
          isActive: router.asPath === "/cancer-care",
          icon: HeartIcon,
          isExternal: false,
        },
        {
          label: "Women's Ministry",
          href: "/titus-2",
          trailingAccessory: null,
          isActive: router.asPath === "/titus-2",
          icon: BookOpenIcon,
          isExternal: false,
        },
        {
          label: "Blog",
          href: "/blog",
          trailingAccessory: null,
          isActive: router.asPath === "/blog",
          icon: WritingIcon,
          isExternal: false,
        },
      ],
    },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-warm-gray-100">
      <Sidebar sections={sections} />
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
