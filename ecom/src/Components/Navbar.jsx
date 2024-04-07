import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
const Navbar = () => {
  const totalItems = useSelector((state) => state.totalQuantity);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart {totalItems}</Link>
          </li>
        </ul>
        <ul>
          <li>
            <MdOutlineMenu />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
