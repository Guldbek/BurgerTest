import { create } from "zustand";

export interface ActivityType {
  name: string;
  price: number;
  type: "activity" | "restaurant";
}

interface ActivitiesStore {
  activities: ActivityType[];
  addActivity: (activity: ActivityType) => void;
  removeActivity: (name: string) => void;
}

const useActivitiesStore = create<ActivitiesStore>((set) => ({
  activities: [],
  addActivity: (activity) =>
    set((state) => ({
      activities: [...state.activities, activity],
    })),
  removeActivity: (name) =>
    set((state) => ({
      activities: state.activities.filter((activity) => activity.name !== name),
    })),
}));

export default useActivitiesStore;
