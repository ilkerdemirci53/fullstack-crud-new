import AddPost from "../../components/AddPost";
import PostList from "../../components/PostList";
import { getAllPosts } from "../../services/serviceOperations";

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <div className="max-w-[1440px] mx-auto mt-4 p-4">
      <div className="my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Todo List Project</h1>
        <AddPost />
      </div>

      <PostList posts={posts} />
    </div>
  );
};

export default BlogPage;
