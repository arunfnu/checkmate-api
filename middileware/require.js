import jwt from "jsonwebtoken";
import Admin from "../model/admin.js";
import bcrypt from "bcryptjs";

class middile {
  static authenticate = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
      try {
        // Get Token from header
        token = authorization.split(" ")[1];
        // Verify Token
        const { userID } = jwt.verify(token, process.env.SECRET_KEY);
        // Get User from Token
        req.user = await Admin.findById(userID);
        next();
      } catch (error) {
        console.log(error);
        res
          .status(401)
          .send({ status: "failed", message: "Unauthorized User" });
      }
    }
    if (!token) {
      res
        .status(401)
        .send({ status: "failed", message: "Unauthorized User, No Token" });
    }
  };
}
export default middile;
