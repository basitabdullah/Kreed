import React from "react";
import "././posts.scss";
import { userPosts } from "../../data.js";
const Posts = () => {
  return (
    <div className="posts">
      <h1>Recent Posts</h1>
      <div className="container">
        {userPosts.posts.map((i) => (
          <div className="post" key={i.id}>
            <img src={i.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
