import { httpCreateUser, httpUpdateUser } from "./_user.controller";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      httpGetUser(req, res);
      break;
    case "POST":
      httpCreateUser(req, res);
      break;
    case "PATCH":
      httpUpdateUser(req, res);
      break;
    case "DELETE":
      httpDeleteUser(req, res);
      break;
    default:
      res.status(404).end();
      break;
  }
}
