import { NavLink } from "react-router-dom";

const NavLinkList = () => {
  return (
    <>
      <NavLink to={"/"} className="text-gray-500 focus:text-gray-800">
        Home
      </NavLink>
      <NavLink to={"/about"}  className="text-gray-500 focus:text-gray-800">
        About
      </NavLink>
      <NavLink to={"/events"} className={`text-gray-500 focus:text-gray-800`}>
        Events
      </NavLink>
      <NavLink to={"/projects"} className={`text-gray-500 focus:text-gray-800`}>
        Projects
      </NavLink>
      <NavLink to={"/community"} className={`text-gray-500 focus:text-gray-800`}>
        Community
      </NavLink>
      <NavLink to={"/dashboard"} className={`text-gray-500 focus:text-gray-800`}>
        Dashboard
      </NavLink>
    </>
  );
};

const NavBar = () => {
  return (
    <div className="sticky top-6 z-10 py-4 bg-white ">
      <div className="flex items-center justify-between px-14">
        <div className="flex gap-x-2 items-center">
          <img
            src="/vac_tech_jr_logo.jpg"
            alt="logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <p className="text-xl font-semibold text-gray-800">Vac Tech Jr</p>
        </div>

        <div className="flex items-center gap-14">
          <div className="flex gap-x-14  cursor-pointer">
            <NavLinkList />
          </div>

          <button className="cursor-pointer font-semibold text-primary border-2 object-content rounded-4xl px-4 py-2 border-primary-300 text-primary-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
