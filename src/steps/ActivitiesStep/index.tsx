import Activity from "../../components/Activity";

const ActivitiesStep = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl p-5 border-b-[1px]">Activities</h1>
      <div className="p-5 grid grid-cols-5 gap-5 place-items-center border-b-[1px]">
        <p className="text-sm text-slate-400 place-self-start col-span-3">
          Activity
        </p>
        <p className="text-sm text-slate-400">Price</p>
      </div>
      <Activity name="Burger Workshop" price={299} type="activity" />
      <Activity name="Bungee Jump" price={299} type="activity" />
      <Activity name="Burger Throwing" price={299} type="activity" />
      <h1 className="text-2xl p-5 border-y-[1px]">Restaurants</h1>
      <div className="p-5 grid grid-cols-5 gap-5 place-items-center border-b-[1px]">
        <p className="text-sm text-slate-400 place-self-start col-span-3">
          Activity
        </p>
        <p className="text-sm text-slate-400">Price</p>
      </div>
      <Activity name="Burger Emporium" price={749} type="restaurant" />
    </div>
  );
};

export default ActivitiesStep;
