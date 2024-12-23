import Image from "next/image";

const NoCompareFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Compare Movies </h1>
      <Image
        src="/assets/vs.jpg"
        alt="/assets/vs.jpg"
        width={500}
        height={500}
        className="object-fill w-[600px] rounded-md"
      />
    </div>
  );
};

export default NoCompareFound;
