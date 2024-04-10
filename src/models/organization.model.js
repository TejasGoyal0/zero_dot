import mongoose from "mongoose";

const { Schema } = mongoose;

const organizationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      primaryKey: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    leader: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    members: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    projects: [{
      type: Schema.Types.ObjectId,
      ref: 'Project'
    }],
    clients: [String], // Assuming clients are represented by their IDs or names
    plan: Schema.Types.Mixed // Assuming plan can be of any data type
  },
  {
    timestamps: true
  }
);

const Organization = mongoose.model("Organization", organizationSchema);

export default Organization;
