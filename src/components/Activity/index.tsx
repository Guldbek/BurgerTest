import useActivitiesStore, {
  ActivityType,
} from "../../stores/useActivityStore";

const Activity = ({
  name,
  price,
  type,
}: {
  name: string;
  price: number;
  type: ActivityType["type"];
}) => {
  const activities = useActivitiesStore((state) => state.activities);
  const addActivity = useActivitiesStore((state) => state.addActivity);
  const removeActivity = useActivitiesStore((state) => state.removeActivity);

  return (
    <div className="p-5 grid grid-cols-5 gap-5 place-items-center">
      <h1 className="text-xl col-span-3 place-self-start">{name}</h1>
      <p className="text-gray-500">{price},-</p>
      <div className="place-self-end">
        {activities.some((activity) => activity.name === name) ? (
          <button
            onClick={() => {
              removeActivity(name);
            }}
            aria-label={"Remove activity " + name}
            className="bg-red-400 text-white rounded-full p-2 w-10 h-10"
          >
            -
          </button>
        ) : (
          <button
            onClick={() => {
              addActivity({ name, price, type });
            }}
            aria-label={"Add activity " + name}
            className="bg-green-400 text-white rounded-full p-2 w-10 h-10"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Activity;
