import React from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((i) => (
        <div className="item" key={i.id}>
          <span className="title">{i.title}</span>

          {i.listItems.map((li) => (
            <Link className="listItem" to={li.url} key={li.id}>
              <img src={li.icon} alt="" />
              <span className="listItemTitle">{li.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu


