import {
  getPostById,
  updatePostById,
  deletePostById,
} from "../../../../services/serviceOperations";

const handler = async (req, res) => {
  const { id } = req.query; // URL'den ID'yi al

  if (req.method === "GET") {
    // GET isteğini işleme
    try {
      const post = await getPostById(id);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).json({ message: "GET Error", error: error.message });
    }
  } else if (req.method === "PATCH") {
    // PUT isteğini işleme
    try {
      const data = req.body;
      const updatedPost = await updatePostById(id, data);
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ message: "PUT Error", error: error.message });
    }
  } else if (req.method === "DELETE") {
    // DELETE isteğini işleme
    try {
      const deletePost = await deletePostById(id);
      res
        .status(200)
        .json({ message: "Post deleted successfully", deletePost });
    } catch (error) {
      console.error("Error deleting post:", error);
      res.status(500).json({ message: "DELETE Error", error: error.message });
    }
  } else {
    // GET, PUT ve DELETE dışındaki isteklerde 405 "Method Not Allowed" hatası ver
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
