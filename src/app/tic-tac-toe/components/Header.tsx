import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrap">
      <div className="header-inner">
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
    </div>
  );
}
