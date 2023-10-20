import React from 'react'
import ".././smMenu/smMenu.scss"
import { Link } from "react-router-dom";
import { menu } from "../../data";
const SmMenu = () => {
  return (
    <div className='smMenue'>
        {menu.map((i) => (
        <div className="item" key={i.id}>

          {i.listItems.map((li) => (
            <Link className="listItem" to={li.url} key={li.id}>
              <img src={li.icon} alt="" />
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SmMenu