import BlogIndexPage from "../BlogIndexPage";
import Footer from "../Footer";
import Header from "../Header";

export default function BlogLayout({ posts }: any) {
  return (
    <>
      <Header />
      <BlogIndexPage posts={posts} />
      <Footer />
    </>
  );
}
