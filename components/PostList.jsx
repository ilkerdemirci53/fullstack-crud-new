"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import AddPost from "./AddPost";

const PostList = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
      setLoading(false); // Veriler yüklendiğinde loading durumunu false yapıyoruz
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false); // Hata durumunda da loading durumunu false yapıyoruz
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Veriler yüklenirken bir yükleniyor durumu göstermek
  if (loading) {
    return <div>Loading...</div>;
  }

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
