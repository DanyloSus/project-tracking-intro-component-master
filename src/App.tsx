import Header from "./Elements/Header";
import Main from "./Elements/Main";

const App = () => {
  return (
    <main className="w-screen h-screen overflow-hidden px-8 lg:py-9 lg:overflow-y-auto">
      <div className="w-1/2 bg-light-grayish-blue h-1/2 absolute rounded-bl-[100px] right-0 top-0 -z-10" />
      <Header />
      <Main />
    </main>
  );
};

export default App;
