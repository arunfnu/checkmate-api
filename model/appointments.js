import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const appointmentSchema = new mongoose.Schema(
  {
    service: [{ type: String }],
    phone: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    budget: { type: String },
    description: { type: String },
    doc: { type: String },
    date: { type: String },
    time: { type: String },
  },
  {
    timestamps: true,
  }
);

const Appointments = mongoose.model("Appointments", appointmentSchema);
export default Appointments;
