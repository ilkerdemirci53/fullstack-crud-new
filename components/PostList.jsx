"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostList = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    };

    fetchPosts();
  }, [posts]);

  return (
    <div className="max-w-full mx-auto grid gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
