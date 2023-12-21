import { useState, FC } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <div className="flex items-center justify-evenly w-4/5 mx-auto">
      <Link
        to={"/"}
        className={`text-2xl ${
          activeLink === "/" 
        }`}
        onClick={() => handleLinkClick("/")}
      >
        Homepage
      </Link>
      <Link
        to={"/Fav"}
        className={`text-2xl ${
          activeLink === "/Fav" 
        }`}
        onClick={() => handleLinkClick("/Fav")}
      >
        Favourite
      </Link>
    </div>
  );
}

export default NavBar;

