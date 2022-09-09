import EquippingNav from "../EquippingNav";
import Header from "../Header";
import Footer from "../Footer";

export default function EquippingLayout({ children }: any) {
  return (
    <>
      <Header />
      <EquippingNav>{children}</EquippingNav>
      <Footer />
    </>
  );
}
