const CollectionItem = ({ itemUrl, itemName }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${itemUrl}")`,
      }}
      className={`text-white p-5 flex flex-row items-end aspect-square bg-center bg-cover w-full  `}
    >
      <div className="flex flex-col items-start ">
        <p className=" font-medium text-xl">{itemName}</p>
        <button className=" bg-black px-5 py-3 text-xs font-medium">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CollectionItem;
