export default function Header() {
  return (
    <div className="w-full max-w-6xl xl:max-w-7xl h-20 mx-auto flex justify-between items-center">
      <a
        href="#"
        className="p-4 text-white text-opacity-50 hover:text-opacity-100"
      >
        {" "}
        Pilot Projects{" "}
      </a>
      <button className="p-4 text-white text-opacity-50 hover:text-opacity-100">
        More about the projects
      </button>
    </div>
  );
}
