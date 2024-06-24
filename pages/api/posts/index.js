import { getAllPosts, createPost } from "../../../services/serviceOperations";

const handler = async (req, res) => {
  // Yeni bir post olusturmak icin kullanilir.
  if (req.method === "POST") {
    try {
      const { title, description } = req.body;
      const newPost = await createPost(title, description);
      res.status(200).json(newPost);
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ message: "POST Error", error: error.message });
    }

    //Tum postlari getiren fonksiyon.
  } else if (req.method === "GET") {
    try {
      const posts = await getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "GET Error", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
