import useMobileStore from "../store";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { isActive, changeIsActive } = useMobileStore((s) => s);

  return (
    <header className="font-bold flex justify-between items-center max-w-[1110px] mx-auto mt-16 lg:mt-0">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex gap-10 text-lg items-center lg:hidden">
        <a href="#">product</a>
        <a href="#">features</a>
        <a href="#">pricing</a>
        <div className="w-1 h-1 rounded-full bg-grayish-blue" />
        <a href="#" className="text-grayish-blue after:bg-grayish-blue">
          login
        </a>
      </nav>
      {isActive ? (
        <img
          src="./icon-close.svg"
          alt="icon close"
          className="lg:block hidden"
          onClick={changeIsActive}
        />
      ) : (
        <img
          src="./icon-hamburger.svg"
          alt="icon hamburger"
          className="lg:block hidden"
          onClick={changeIsActive}
        />
      )}
      <MobileMenu />
    </header>
  );
};

export default Header;
