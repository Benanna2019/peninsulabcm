import type { NextPage } from "next";
import BlogLayout from "../../components/Layouts/BlogLayout";
import { trpc } from "../../utils/trpc";

const Blog: NextPage = () => {
  const posts = trpc.useQuery(["posts.allPosts"]);

  return (
    <>
      <BlogLayout posts={posts} />
    </>
  );
};

export default Blog;
