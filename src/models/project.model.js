import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    team: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    leader: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    authority1: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    authority2: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    authority3: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: 'Organization'
    },
    tasksAllotted: [Schema.Types.Mixed] // Assuming tasksAllotted can be of any data type
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
