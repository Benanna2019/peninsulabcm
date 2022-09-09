import { NextPage } from "next";
import CovidResponse from "../components/CovidResponse";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Covid: NextPage = () => {
  return (
    <>
      <Header />
      <CovidResponse />
      <Footer />
    </>
  );
};

export default Covid;
