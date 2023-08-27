import useMobileStore from "../store";

const MobileMenu = () => {
  const { isActive } = useMobileStore((s) => s);

  return (
    <div
      className="rounded-2xl shadow-2xl w-[calc(100%-72px)] h-[233px] px-6 flex flex-col justify-around absolute bg-white top-[100px] z-20 text-center transition-opacity"
      style={
        isActive
          ? { zIndex: 20, opacity: 1 }
          : { zIndex: -20, opacity: 0, left: "-2000px" }
      }
    >
      <a href="#">product</a>
      <a href="#">features</a>
      <a href="#">pricing</a>
      <hr className="bg-grayish-blue" />
      <a href="#" className="text-grayish-blue after:bg-grayish-blue">
        login
      </a>
    </div>
  );
};

export default MobileMenu;
