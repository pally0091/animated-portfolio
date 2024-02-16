import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <Sidebar />
      <div className="wrapper">
        <div>
          <img
            src="/logo/logo.png"
            alt=""
          />
        </div>
        <div className="social">
          <a href="">Facebook</a>
          <a href="">LinkedIn</a>
          <a href="">Github</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
