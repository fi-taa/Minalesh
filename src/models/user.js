import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const createUserData = async (data) => {
  const { email, name, phoneNumber, role, password } = data;
  try {
    const newArticle = prisma.article.create({
      email,
      name,
      phoneNumber,
      role,
      password,
    });

    const filteredArticle = {
      email: newArticle.email,
      name: newArticle.name,
      phoneNumber: newArticle.phoneNumber,
      role: newArticle.role,
    };

    return { success: true, message: { ...filteredArticle } };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        success: false,
        message: "Couldn't create user due to invalid value",
      };
    }

    return { success: false, message: "Something went wrong" };
  }
};
