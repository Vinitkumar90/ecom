import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    if (token_decode.id !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "You are not an admin" });
    }

    next();
  } catch (error) {
    return res.json({ success: false, message: "Invalid or expired token" });
  }
};


export default adminAuth;