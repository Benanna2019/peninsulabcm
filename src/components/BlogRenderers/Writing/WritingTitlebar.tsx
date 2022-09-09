import * as React from "react";
import { TitleBar } from "../../ListDetail/TitleBar";

export function WritingTitlebar({ scrollContainerRef, children }: any) {
  return (
    <TitleBar title="Writing" scrollContainerRef={scrollContainerRef}>
      {children}
    </TitleBar>
  );
}
