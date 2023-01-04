import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const createUserData = async (data) => {
  const { email, name, phoneNumber, role, password } = data;
  try {
    const newUser = prisma.user.create({
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

export const getUserData = async (id) => {
  try {
    const userData = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        phoneNumber: true,
        role: true,
      },
    });

    return { success: true, message: { ...userData } };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        success: false,
        message: "User doesn't exist",
      };
    }
    return { success: false, message: "Something went wrong" };
  }
};

export const updateUserData = async (data) => {
  const { id, email, name, phoneNumber, password } = data;
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        password: password,
      },
    });

    const filteredUser = {
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name,
      phoneNumber: updatedUser.phoneNumber,
    };

    return { success: true, message: { ...filteredUser } };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        success: false,
        message: "Couldn't update user due to invalid value",
      };
    }
    return { success: false, message: "Something went wrong" };
  }
};

export const deleteUserData = async (id) => {
  try {
    await prisma.user.delete({
      where: { id },
    });

    return { success: true, message: "User deleted successfully" };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        success: false,
        message: "Couldn't delete user due to database constraint",
      };
    }
    return { success: false, message: "Something went wrong" };
  }
};
