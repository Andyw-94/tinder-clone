import React from "react";
import "./Header.css";
import ForumIcon from "@material-ui/icons/Forum";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  return (
    <div className="header">
      <Link to="/">
        <IconButton>
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/TinderIcon-2017.svg"
          />
        </IconButton>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" font-size="large" />
        </IconButton>
      </Link>
      <IconButton>
        <PersonIcon className="header__icon" font-size="large" />
      </IconButton>
    </div>
  );
}

export default Header;
