import * as React from "react";

import { timestampToCleanTime } from "../../../utils/transformers";
import { Detail } from "../../ListDetail/Detail";
import { MarkdownRenderer } from "../../MarkdownRenderer";
import { PostSEO } from "./PostSEO";

export function PostDetail({ postInfo }: any) {
  console.log("incoming post info: ", postInfo);
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const { data, isError, isLoading } = postInfo;
  console.log("single post info: ", data);

  if (isLoading) {
    return <Detail.Loading />;
  }

  if (!data?.post[0] || isError) {
    return <Detail.Null />;
  }
  const { post } = data;
  const publishedAt = timestampToCleanTime({ timestamp: post[0].date });
  return (
    <>
      <PostSEO post={post[0]} />
      <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
        <Detail.ContentContainer>
          <Detail.Header className="text-center">
            <Detail.Title ref={titleRef}>{post[0].title}</Detail.Title>
            <span
              title={publishedAt.raw}
              className="text-tertiary inline-block leading-snug pt-6"
            >
              {publishedAt.formatted}
            </span>
          </Detail.Header>

          <MarkdownRenderer children={post[0].body} className="prose mt-8" />

          {/* bottom padding to give space between post content and comments */}
          <div className="py-6" />
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  );
}
