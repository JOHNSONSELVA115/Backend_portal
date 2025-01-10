const mongoose = require('mongoose');

// Define the schema for PersonalInfo
const personalInfoSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  dob: { type: String, required: true },
  address: { type: String, required: true },
  technicalSkills: [String],
  hobbies: [String],
  languagesKnown: [String],
});

// Define the schema for EducationProject
const educationProjectSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  percentage: { type: Number },
  year: { type: String },
  course: { type: String },
  title: { type: String },
  tools: { type: String },
  language: { type: String },
  description: { type: String },
});

// Create the models from the schemas
const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema);
const EducationProject = mongoose.model('EducationProject', educationProjectSchema);

module.exports = { PersonalInfo, EducationProject };
