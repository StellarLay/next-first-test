import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import "./layouts.scss";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <a href="/">
          <FontAwesomeIcon icon={faBlog} className="logo-icon" />
        </a>
      </div>
      <div className="header__search">
        <input type="search" placeholder="Что ищем?" />
      </div>
      <div className="header__login">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
};

export default Header;
