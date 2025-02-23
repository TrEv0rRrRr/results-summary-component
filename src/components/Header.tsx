const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center bg-linear-to-b from-lightSlateBlue to-light-royalBlue text-white pt-6 pb-10 rounded-bl-4xl rounded-br-4xl gap-5 md:rounded-4xl md:p-0 md:w-1/2 md:justify-normal md:py-8 md:h-full md:gap-7">
      <div className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-lightLavender text-xl">Your Result</h2>
        <div
          className=" flex flex-col justify-center rounded-[50%] bg-linear-to-b from-violetBlue to-light-persianBlue 
        w-[150px] h-[150px] md:w-[170px] md:h-[170px] gap-3 md:gap-2"
        >
          <strong className="text-6xl">76</strong>
          <span className="text-lightLavender">of 100</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        <h3 className="text-paleBlue text-2xl font-bold md:text-3xl">Great</h3>
        <p className="px-12 text-xl min-[428px]:px-20 md:px-10 leading-5">
          <small className="text-lightLavender">
            You scored higher than 65% of the people who have taken these tests.
          </small>
        </p>
      </div>
    </header>
  );
};

export default Header;
