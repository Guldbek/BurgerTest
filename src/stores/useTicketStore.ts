import { DateTime } from "luxon";
import { create } from "zustand";

interface BookingDate {
  year: number;
  month: number;
  day: number;
}

interface TicketStore {
  adultTickets: number;
  childTickets: number;
  familyDiscount: boolean;
  bookingDate: BookingDate | null;
  setFamilyDiscount: (familyDiscount: boolean) => void;
  setBookingDate: (dateTime: DateTime) => void;
  increaseAdultTickets: () => void;
  increaseChildTickets: () => void;
  decreaseAdultTickets: () => void;
  decreaseChildTickets: () => void;
}

const useTicketStore = create<TicketStore>((set) => ({
  adultTickets: 0,
  childTickets: 0,
  familyDiscount: false,
  bookingDate: null,
  setBookingDate: (bookingDate: BookingDate) => set({ bookingDate }),
  increaseAdultTickets: () =>
    set((state) => ({ adultTickets: state.adultTickets + 1 })),
  increaseChildTickets: () =>
    set((state) => ({ childTickets: state.childTickets + 1 })),
  decreaseAdultTickets: () =>
    set((state) => ({ adultTickets: state.adultTickets - 1 })),
  decreaseChildTickets: () =>
    set((state) => ({ childTickets: state.childTickets - 1 })),
  setFamilyDiscount: (familyDiscount: boolean) => set({ familyDiscount }),
}));

export default useTicketStore;
