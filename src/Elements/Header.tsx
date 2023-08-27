const Header = () => {
  return (
    <header className="font-bold flex justify-between items-center max-w-[1110px] mx-auto mt-16">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex gap-10 text-lg items-center">
        <a href="#">product</a>
        <a href="#">features</a>
        <a href="#">pricing</a>
        <div className="w-1 h-1 rounded-full bg-grayish-blue" />
        <a href="#">login</a>
      </nav>
    </header>
  );
};

export default Header;
