import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    blogId: { type: Schema.Types.ObjectId, ref: "Blog" },
    response: { type: String, required: true },
    status: { type: String, enum: ["active", "deActive"], default: "deActive" },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
