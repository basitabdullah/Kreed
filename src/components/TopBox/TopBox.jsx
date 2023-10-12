import React from "react";
import { users } from "../../data.js";
import "./topbox.scss";
const TopBox = () => {
  return (
    <div className="topbox">
      <h1>Users</h1>
      <div className="list">
        {users.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="usertexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <div className="followers">
              <span className="textFollower">Followers</span>
              <span className="amtfollowers">{user.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
