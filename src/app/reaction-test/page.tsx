import Panel from "./Panel";

export default function Page() {
  return (
    <div className="body-wrapper h-screen w-screen bg-[var(--darkest-algi)] text-white flex flex-col justify-start items-start">
      <h1>Hello, Mom</h1>
      {/* <Header /> */}
      <div className="grow w-full max-w-6xl xl:max-w-7xl h-20 mx-auto flex flex-col justify-center items-center">
        <Panel />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
