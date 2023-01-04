import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const createUserData = async (data) => {
  const { email, name, phoneNumber, role, password } = data;
  try {
    const newUser = prisma.article.create({
      email,
      name,
      phoneNumber,
      role,
      password,
    });

    const filteredUser = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      phoneNumber: newUser.phoneNumber,
      role: newUser.role,
    };

    return { success: true, message: { ...filteredUser } };
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
