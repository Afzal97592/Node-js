import { getUser } from "../services/user.js";

const handleAuthCheck = (req, res, next) => {
  const sessionId = req.cookies.uid;
  if (!sessionId) {
    return res.status(401).json({ message: "Unauthorized access!" });
  }
  const user = getUser(sessionId);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized access!" });
  }
  req.user = user;
  next();
};

export { handleAuthCheck };
