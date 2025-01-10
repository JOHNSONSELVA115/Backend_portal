const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors'); 
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/portal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define personal info schema
const PersonalInfoSchema = new mongoose.Schema({
  user_name: String,
  dob: String,
  address: String,
  technicalSkills: [String],
  hobbies: [String],
  languagesKnown: [String],
});

const PersonalInfo = mongoose.model("PersonalInfo", PersonalInfoSchema);

// Define education and project schema
const EducationProjectSchema = new mongoose.Schema({
  category: String,
  name: String,
  percentage: Number,
  course: String,
  year: String,
  title: String,
  tools: String,
  language: String,
  description: String,
});

const EducationProject = mongoose.model(
  "EducationProject",
  EducationProjectSchema
);

// API endpoint to fetch data
app.get("/api/data", async (req, res) => {
  try {
    // Fetch personal info
    const personalData = await PersonalInfo.find();
    console.log("Personal Data:", personalData); // Log personal data

    // Fetch education and project data
    const projectData = await EducationProject.find();
    console.log("Project Data:", projectData); // Log project data

    // Filter school and college data from education and project data
    const schoolData = projectData.filter(
      (item) => item.category === "X - std" || item.category === "XII - std"
    );
    const collegeData = projectData.filter(
      (item) => item.category === "UG" || item.category === "PG"
    );
    const projectDetailsData = projectData.filter(
        (item) => item.category === "Self-Project" || item.category === "College-Project"
      );

    // Log the final data
    console.log("School Data:", schoolData);
    console.log("College Data:", collegeData);
    console.log("projectDetailsData:", projectDetailsData);

    // Send the response
    res.json({
      personalData, // Personal info data
      schoolData, // School data
      collegeData, // College data
      projectDetailsData, // Project data
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
