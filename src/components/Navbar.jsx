import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="flex flex-wrap gap-5 justify-center bg-black p-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
