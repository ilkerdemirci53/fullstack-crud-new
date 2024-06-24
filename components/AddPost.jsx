"use client";
import Modal from "./Modal";
import ButtonWrapper from "./ButtonWrapper";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const AddPost = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/api/posts", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        setModal(false);
        router.refresh();
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <div>
      <ButtonWrapper onClick={() => setModal(true)}>Add New Post</ButtonWrapper>

      <Modal modal={modal} setModal={setModal}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl pb-3">Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-4 rounded-md text-black"
            value={inputs.title || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            className="w-full p-4 rounded-md text-black my-8"
            value={inputs.description || ""}
            onChange={handleChange}
          />

          <ButtonWrapper type={"submit"}>Submit</ButtonWrapper>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
