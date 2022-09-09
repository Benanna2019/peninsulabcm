import type { NextPage } from "next";
import CounselingPage from "../components/CounselingPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BiblicalCounseling: NextPage = () => {
  return (
    <>
      <Header />
      <CounselingPage />
      <Footer />
    </>
  );
};

export default BiblicalCounseling;
