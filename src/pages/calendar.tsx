import { NextPage } from "next";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { trpc } from "../utils/trpc";

const CalendarRoute: NextPage = () => {
  const calendarEvents = trpc.useQuery(["events.allEvents"]);

  return (
    <>
      <Header />
      <Calendar calendarEvents={calendarEvents} />
      <Footer />
    </>
  );
};

export default CalendarRoute;
