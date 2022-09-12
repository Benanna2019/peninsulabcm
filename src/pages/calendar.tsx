import { NextPage } from "next";
import Calendar from "../components/Calendar";
import AboutLayout from "../components/Layouts/AboutLayout";
import { trpc } from "../utils/trpc";

const CalendarRoute: NextPage = () => {
  const calendarEvents = trpc.useQuery(["events.allCalendarEvents"]);

  return (
    <>
      <AboutLayout>
        <Calendar calendarEvents={calendarEvents} />
      </AboutLayout>
    </>
  );
};

export default CalendarRoute;
