import type { NextPage } from "next";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { EventDetail } from "../../components/Events/EventDetail";
import { trpc } from "../../utils/trpc";

const IndividualEventPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const eventInfo = trpc.useQuery([
    "events.eventBySlug",
    { slug: slug as string },
  ]);

  return (
    <>
      <Header />
      <EventDetail eventInfo={eventInfo} />
      <Footer />
    </>
  );
};

export default IndividualEventPage;
