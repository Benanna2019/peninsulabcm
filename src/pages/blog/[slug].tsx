import type { NextPage } from "next";
import { useRouter } from "next/router";
import IndividualPostRenderer from "../../components/BlogRenderers/IndividualPostRenderer";
import { PostDetail } from "../../components/BlogRenderers/Writing/PostDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { trpc } from "../../utils/trpc";

const BlogPostPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const postInfo = trpc.useQuery([
    "singlePost.postBySlug",
    { slug: slug as string },
  ]);

  return (
    <>
      <Header />
      <PostDetail postInfo={postInfo} />
      <Footer />
    </>
  );
};

export default BlogPostPage;
