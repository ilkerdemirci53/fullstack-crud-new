"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import AddPost from "./AddPost";

const PostList = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-full mx-auto grid gap-4">
      <AddPost fetchPosts={fetchPosts} />
      {posts.map((post) => (
        <Post key={post.id} post={post} fetchPosts={fetchPosts} />
      ))}
    </div>
  );
};

export default PostList;
