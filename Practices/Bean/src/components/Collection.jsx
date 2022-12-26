import CollectionItem from "./CollectionItem";

const Collection = () => {
  return (
    <div className=" text-center p-4">
      <div className=" ">
        <h3 className=" text-xl font-bold py-2">New Collection</h3>
        <p className=" text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </div>
      <div className=" my-5 grid grid-flow-col grid-rows-3 gap-5">
        <CollectionItem
          itemName={"Casual Trainers"}
          itemUrl={"/src/assets/photo-1618898909019-010e4e234c55.avif"}
        />
        <CollectionItem
          itemName={"Winter Jumpers"}
          itemUrl={"/src/assets/photo-1624623278313-a930126a11c3.avif"}
        />
        <CollectionItem
          itemName={"Skinny Jeans Blue"}
          itemUrl={"/src/assets/photo-1593795899768-947c4929449d.avif"}
        />
      </div>
    </div>
  );
};

export default Collection;
