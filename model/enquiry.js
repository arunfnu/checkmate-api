import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    service: [{ type: String }],
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);
export default Enquiry;
