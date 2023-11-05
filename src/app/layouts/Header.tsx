import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import "./layouts.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <a href="/">
          <FontAwesomeIcon icon={faBlog} className="logo-icon" />
        </a>
      </div>
      <nav className="header__menu">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contacts">Contacts</Link>
      </nav>
      <div className="header__right">
        <div className="header__search">
          <input type="search" placeholder="Что ищем?" />
        </div>
        <div className="header__login">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  );
};

export default Header;
