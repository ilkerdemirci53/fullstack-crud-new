import prisma from "../../lib/prisma/index.js";

// Veritabanından tüm gönderileri getiren fonksiyon
export const getAllPosts = async () => {
  return await prisma.post.findMany();
};

// Yeni bir gönderi oluşturan fonksiyon
export const createPost = async (title, description) => {
  return await prisma.post.create({
    data: {
      title,
      description,
    },
  });
};

// Belirli bir gönderiyi ID ile getiren fonksiyon
export const getPostById = async (id) => {
  return await prisma.post.findUnique({
    where: { id },
  });
};

// Belirli bir gönderiyi güncelleyen fonksiyon
export const updatePostById = async (id, data) => {
  return await prisma.post.update({
    where: { id },
    data,
  });
};

// Belirli bir gönderiyi silen fonksiyon
export const deletePostById = async (id) => {
  return await prisma.post.delete({
    where: { id },
  });
};
