import AboutNav from "../AboutNav";
import Footer from "../Footer";
import Header from "../Header";

export default function AboutLayout({ children }: any) {
  return (
    <>
      <Header />
      <AboutNav>{children}</AboutNav>
      <Footer />
    </>
  );
}
