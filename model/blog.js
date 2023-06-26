import mongoose from "mongoose";
const { Schema } = mongoose;
const blogSchema = new mongoose.Schema(
  {
    mainTitle: { type: String, require: true },
    mainTitleImg: { type: String, require: true },
    heading: { type: String, require: true },
    title1: { type: String, require: true },
    title2: { type: String, require: true },
    title3: { type: String, require: true },
    title4: { type: String, require: true },
    title5: { type: String, require: true },
    title1Content: { type: String, require: true },
    title2Content: { type: String, require: true },
    title3Content: { type: String, require: true },
    title4Content: { type: String, require: true },
    title5Content: { type: String, require: true },
    title1img: { type: String, require: true },
    title2img: { type: String, require: true },
    title3img: { type: String, require: true },
    title4img: { type: String, require: true },
    title5img: { type: String, require: true },
    readBy: { type: Number, default: 0 },
    keyTakeWays: [{ type: String }],
    // commentId: { type: Schema.Types.ObjectId, ref: "Comment" },
    duration: { type: String },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
