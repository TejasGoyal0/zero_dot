import { Schema } from "mongoose";
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
    clients: [String],
    plan: Schema.Types.Mixed
  },
  {
    timestamps: true
  }
);

const organization = mongoose.model("Organization", organizationSchema);

export default organization;
