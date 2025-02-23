import Results from "./Results/Results";

const Summary = () => {
  return (
    <main className="flex flex-col px-7 gap-5 md:rounded-tr-4xl md:rounded-br-4xl md:w-1/2 md:gap-5 md:py-8 bg-white h-full w-full">
      <h1
        className="text-start text-darkGrayBlue font-bold 
      text-[1.1rem] md:text-[1.4rem]"
      >
        Summary
      </h1>
      <Results />
      <button
        className="rounded-3xl bg-darkGrayBlue text-white 
      py-3 mt-5 mb-10 hover:bg-linear-to-b hover:from-lightSlateBlue hover:to-light-royalBlue transition duration-150 ease-in-out cursor-pointer"
      >
        Continue
      </button>
    </main>
  );
};

export default Summary;
