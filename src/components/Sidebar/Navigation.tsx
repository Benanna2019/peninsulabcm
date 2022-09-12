import * as React from "react";

import { NavigationLink } from "./NavigationLink";

export function SidebarNavigation({ sections }: any) {
  return (
    <div className="flex-1 px-3 py-3 space-y-1">
      {sections.map((section: any, i: number) => {
        return (
          <ul key={i} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="px-2 pt-5 pb-2 text-sm font-semibold text-gray-900 text-opacity-90 "
              >
                {section.label}
              </h4>
            )}
            {section.items.map((item: any, j: number) => (
              <NavigationLink key={i} link={item} />
            ))}
          </ul>
        );
      })}
    </div>
  );
}
