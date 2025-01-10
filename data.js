const express = require("express");
const { PersonalInfo, EducationProject } = require("../models/Data");
const router = express.Router();

// Insert data into the database
router.post("/insertData", async (req, res) => {
  try {
    // Insert personal info collection
    db.personalinfos.insertMany([
      {
        user_name: "Johnson SelvaKumar A",
        dob: "2002-03-08",
        address: "Dindigul",
        technicalSkills: [
          "Html & CSS",
          "ReactJS",
          "Angular",
          "Python",
          "Mongodb",
          "Ms-Office",
        ],
        hobbies: ["Playing Piano", "Video Editing"],
        languagesKnown: ["English", "Tamil"],
      },
    ]);

    // Insert education and project info
    db.educationprojects.insertMany([
      {
        category: "X - std",
        name: "St. Mary's Hr.Sec. School, Dindigul",
        percentage: 90,
        year: "2017",
      },
      {
        category: "XII - std",
        name: "St. Mary's Hr.Sec. School, Dindigul",
        percentage: 67,
        year: "2019",
      },
      {
        category: "UG",
        name: "St. Joseph's College (Autonomous), Tiruchirappalli.",
        course: "B.Sc Physics",
        percentage: 79,
        year: "2022",
      },
      {
        category: "PG",
        name: "St. Mary's Hr.Sec. School, Dindigul",
        course: "B.A",
        percentage: 83,
        year: "2024",
      },
      {
        category: "Self-Project",
        title: "Mind Reader (MOBILE APPLICATION)",
        tools: "Html, Css, React Native",
        language: "JavaScript",
        description:
          "Created an app that guesses the number you're thinking of from a list.",
      },
      {
        category: "College-Project",
        title:
          "Research Paper Publication Details Management System (WEB APPLICATION)",
        tools: "HTML, CSS, MySql",
        language: "Php",
        description:
          "Developed a web application for PhD scholars to submit research papers.",
      },
    ]);

    await EducationProject.insertMany(educationAndProjects);

    res.status(200).json({ message: "Data inserted successfully!" });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ message: "Error inserting data." });
  }
});

// Route to fetch data from the database
router.get("/data", async (req, res) => {
  try {
    const personalData = await PersonalInfo.find();
    const projectData = await EducationProject.find();

    res.json({
      personalData,
      projectData,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

module.exports = router;
