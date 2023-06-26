import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ContactUs = mongoose.model("ContactUs", ContactUsSchema);
export default ContactUs;
