import * as React from "react";
import { useRouter } from "next/router";
import { ListContainer } from "../../ListDetail/ListContainer";
import { LoadingSpinner } from "../../LoadingSpinner";
import { PostListItem } from "./PostListItem";

// export const WritingContext = React.createContext({
//   filter: "published",
//   setFilter: (filter: string) => {},
// });

export function PostsList({ posts }: any) {
  let [scrollContainerRef, setScrollContainerRef] = React.useState(null);
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = posts;
  console.log("posts from allPosts tRPC query: ", data?.allPosts);

  if (error) {
    return (
      <ListContainer onRef={setScrollContainerRef}>
        <div />
      </ListContainer>
    );
  }

  if (isLoading && !data?.allPosts) {
    return (
      <ListContainer onRef={setScrollContainerRef}>
        <div className="flex flex-1 items-center justify-center">
          <LoadingSpinner />
        </div>
      </ListContainer>
    );
  }

  const { allPosts } = data;

  return (
    <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
      <div className="lg:space-y-1 lg:p-3">
        {allPosts?.map((post: any) => {
          const active = slug === post.slug; // use url query params or params?.slug

          return <PostListItem key={post.id} post={post} active={active} />;
        })}
      </div>
    </ListContainer>
  );
}
