import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">LOGO</Link>
      <nav>
        <ul>
          <li>
            <link to="/about">About</link>
          </li>
          <li>
            <link to="/home">Home</link>
          </li>
          <li>
            <link to="/contacts">Contacts</link>
          </li>
          <li>
            <link to="/aboutPage">aboutPage</link>
          </li>
        </ul>
      </nav>
      <Link to="/">Login</Link>
    </div>
  );
};

export default Header;
