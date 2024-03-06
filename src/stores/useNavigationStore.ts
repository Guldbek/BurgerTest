import { create } from "zustand";
import { DateTime } from "luxon";

export const STEPS = [
  "Date",
  "Tickets",
  "Activities",
  "Review",
  "Payment",
  "Confirmation",
];

type Step = (typeof STEPS)[number];

interface NavigationStore {
  step: Step;
  setStep: (step: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const useNavigationStore = create<NavigationStore>((set, get) => ({
  step: "Date",
  setStep: (step) => set({ step }),
  nextStep: () => {
    const { step } = get();
    const currentStepIndex = STEPS.indexOf(step);
    if (currentStepIndex < STEPS.length - 1) {
      set({ step: STEPS[currentStepIndex + 1] });
    }
  },
  prevStep: () => {
    const { step } = get();
    const currentStepIndex = STEPS.indexOf(step);
    if (currentStepIndex > 0) {
      set({ step: STEPS[currentStepIndex - 1] });
    }
  },
}));

export default useNavigationStore;
