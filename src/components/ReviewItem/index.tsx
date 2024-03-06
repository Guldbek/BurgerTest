const ReviewItem = ({
  label,
  value,
  price,
}: {
  label: string;
  value: string | number;
  price?: number;
}) => {
  return (
    <div className="px-5 py-2 grid grid-cols-3 items-center place-items-center">
      <h1 className="text-gray-500 place-self-start">{label}</h1>
      <p>{value}</p>
      {price && <p>{price},-</p>}
    </div>
  );
};

export default ReviewItem;
