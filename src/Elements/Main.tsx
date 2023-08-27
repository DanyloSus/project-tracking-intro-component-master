const Main = () => {
  return (
    <section className="w-[1110px] mx-auto relative mt-[124px] h-[464px] flex items-center">
      <div className="max-w-[600px] whitespace-break-spaces flex flex-col gap-5">
        <div className="tracking-[5px] text-dark-grayish-blue">
          <a className="pb-1 font-bold px-3 bg-very-dark-blue text-light-grayish-blue rounded-full mr-5 tracking-normal">
            NEW
          </a>
          Monograph Dashboard
        </div>
        <h1 className="text-7xl font-bold text-very-dark-blue -mt-5">
          Powerful insights into your team
        </h1>
        <p className="text-dark-grayish-blue w-[300px] text-lg">
          Project planning and time tracking for agile teams
        </p>
        <div className="text-grayish-blue tracking-[5px] mt-10">
          <button className="bg-red h-12 w-[184px] rounded-lg text-light-grayish-blue font-bold mr-5 tracking-normal hover:opacity-50 transition-opacity">
            Schedule a demo
          </button>{" "}
          to see a live preview
        </div>
      </div>
      <img
        src="./illustration-devices.svg"
        alt="illustration devices"
        className="absolute -right-[432px] overflow-x-hidden"
      />
    </section>
  );
};

export default Main;
