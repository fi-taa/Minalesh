import { httpCreateUser } from "./_user.controller";

export default function handler(req, res) {
  if (req.method == "POST") {
    httpCreateUser(req, res);
  }
}
