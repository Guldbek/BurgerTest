import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import "./index.css";
import useTicketStore from "../../stores/useTicketStore";

const DateStep = () => {
  const setBookingDate = useTicketStore((state) => state.setBookingDate);
  const bookingDate = useTicketStore((state) => state.bookingDate);

  return (
    <Calendar
      value={bookingDate}
      calendarClassName="bookingDate-calendar"
      onChange={setBookingDate}
    />
  );
};

export default DateStep;
