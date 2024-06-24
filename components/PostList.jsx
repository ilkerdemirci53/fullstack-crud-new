import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="max-w-full mx-auto grid gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;