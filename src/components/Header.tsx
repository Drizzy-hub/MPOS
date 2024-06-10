import { Link } from "react-router-dom";
import { LogoIcon } from "../assets";

const Header = () => {
  return (
    <>
      <div className="flex px-5 md:px-10 lg:px-20">
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
    </>
  );
};

export default Header;
