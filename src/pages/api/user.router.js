import { createUserData } from "../../models/user";

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
