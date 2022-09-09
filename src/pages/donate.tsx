// This should probably be a link to the correct place they can go to donate
// Check current website for this and how it operates

import type { NextPage } from "next";
import DonatePage from "../components/DonatePage";
import Footer from "../components/Footer";
import Header from "../components/Header";

/* This example requires Tailwind CSS v2.0+ */

const Donate: NextPage = () => {
  return (
    <>
      <Header />
      <DonatePage />
      <Footer />
    </>
  );
};

export default Donate;
