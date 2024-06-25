"use client";
import React, { useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";

const Post = ({ post }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState({
    title: post.title,
    description: post.description,
  });

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostToEdit((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/posts/${post.id}`, postToEdit);
      setModal(false);
      await router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePost = async () => {
    try {
      await axios.delete(`/api/posts/${post.id}`);
      setOpenModalDelete(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={post.id}
      className="bg-[#252525] border rounded-lg shadow-md p-4 my-1 flex items-center justify-between"
    >
      <div>
        <h1 className="text-xl font-bold uppercase md:text-2xl">
          {post.title}
        </h1>
        <p className="mt-2 text-lg font-light md:text-xl">{post.description}</p>
      </div>

      <div>
        <button
          onClick={() => setOpenModalDelete(true)}
          className="text-red-500 mr-5"
        >
          Delete
        </button>
        <Modal modal={modal} setModal={setModal}>
          <form className="w-full" onSubmit={handleEditSubmit}>
            <h1 className="text-2xl pb-3">Edit Post</h1>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="w-full p-4 rounded-md text-black"
              value={postToEdit.title}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              className="w-full p-4 rounded-md text-black my-8"
              value={postToEdit.description}
              onChange={handleChange}
            />

            <ButtonWrapper type="submit">Submit</ButtonWrapper>
          </form>
        </Modal>

        <ButtonWrapper onClick={() => setModal(true)}>Edit</ButtonWrapper>
      </div>

      <Modal modal={openModalDelete} setModal={setOpenModalDelete}>
        <div className="flex flex-col w-full items-center justify-center gap-4">
          <h1 className="text-2xl mb-1">Delete Post</h1>
          <p>Are you sure you want to delete this post?</p>
          <ButtonWrapper onClick={handleDeletePost} type="button">
            Delete
          </ButtonWrapper>
        </div>
      </Modal>
    </div>
  );
};

export default Post;
