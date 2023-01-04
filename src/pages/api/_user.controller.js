import { createUserData, getUserData, updateUserData } from "../../models/user";

export async function httpCreateUser(req, res) {
  const data = req.body;
  const newUser = await createUserData(data);

  if (!newUser.success) {
    return res
      .status(409)
      .json({ success: newUser.success, message: newUser.message });
  }

  return res
    .status(200)
    .json({ success: newUser.success, message: newUser.message });
}

export async function httpGetUser(req, res) {
  const data = req.body;
  const userData = await getUserData(data.id);

  if (!userData.success) {
    return res
      .status(404)
      .json({ success: userData.success, message: userData.message });
  }

  return res
    .status(200)
    .json({ success: userData.success, message: { ...userData } });
}

export async function httpUpdateUser(req, res) {
  const data = req.body;
  const updatedUser = await updateUserData(data);

  if (!updateUserData.success) {
    return res
      .status(404)
      .json({ success: updatedUser.success, message: updatedUser.message });
  }

  return res
    .status(200)
    .json({ success: updateUserData.success, message: updateUserData.message });
}

export async function httpDeleteUser(req, res) {
  const data = req.body;
  const message = await deleteUserData(data.id);

  if (!message.success) {
    return res
      .status(404)
      .json({ success: message.success, message: message.message });
  }

  return res
    .status(200)
    .json({ success: message.success, message: message.message });
}
