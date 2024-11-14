import Logo from "../../assets/icon.png";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 right-0 w-full h-24
        z-50 bg-black/15 backdrop-blur-sm py-3 px-12
        sm:py-3"
    >
      <div className="cont">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl ">
            <img className="w-20" src={Logo} alt="logo" />
            <span>GALAXY</span>
          </div>
          <div className="text-white">
            <ul
              className="flex items-center
                        gap-6 text-xl py-4 sm:py-0"
            >
              <li>
                <a href=".">About</a>
              </li>
              <li>
                <a href=".">About</a>
              </li>
              <li>
                <a href=".">About</a>
              </li>
              <li>
                <a href=".">About</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="text-white border-2 border-white px-3 py-1 rounded-md">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
