import React from "react";

import { Detail } from "../ListDetail/Detail";
import { Compass } from "react-feather";

export function NoDataLayout({ no_data_heading, no_data_info, children }: any) {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  return (
    <Detail.Container ref={scrollContainerRef}>
      <Detail.ContentContainer>
        <Detail.Header className="text-center">
          <Detail.Title ref={titleRef}>{no_data_heading}</Detail.Title>
          <p className="text-tertiary text-xl pt-8">{no_data_info}</p>
          <div className="pt-10">{children}</div>
        </Detail.Header>
      </Detail.ContentContainer>
    </Detail.Container>
  );
}
