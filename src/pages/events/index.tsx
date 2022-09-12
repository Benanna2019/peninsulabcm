import type { NextPage } from "next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { EventLayout } from "../../components/Events/EventLayout";
import { trpc } from "../../utils/trpc";

const Event: NextPage = () => {
  const events = trpc.useQuery(["events.allEvents"]);
  const featuredEvent = trpc.useQuery(["events.featuredEvent"]);

  return (
    <>
      <Header />
      <EventLayout events={events} featuredEvent={featuredEvent} />
      <Footer />
    </>
  );
};

export default Event;
