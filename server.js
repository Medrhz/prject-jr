const express = require("express");

app = express();
const studnets = [
  {
    id: 1,
    fullName: "Ahmed Benali",
    age: 20,
    address: "12 Hassan II Street",
    city: "Casablanca",
    notes: "Excellent in mathematics",
    gender: "Male",
  },
  {
    id: 2,
    fullName: "Sara El Amrani",
    age: 22,
    address: "45 Mohammed V Avenue",
    city: "Rabat",
    notes: "Participates in robotics club",
    gender: "Female",
  },
  {
    id: 3,
    fullName: "Youssef Karim",
    age: 19,
    address: "78 Atlas Road",
    city: "Marrakech",
    notes: "Needs improvement in English",
    gender: "Male",
  },
  {
    id: 4,
    fullName: "Lina Tazi",
    age: 21,
    address: "9 Palmier Residence",
    city: "Tangier",
    notes: "Top performer in science",
    gender: "Female",
  },
];
app.get("/", (req, res) => {
  res.json({ message: "hello " });
});

app.get("/ibrahim", (req, res) => {
  res.json({ message: "hello ibrahim" });
});

app.get("/khanjar", (req, res) => {
  res.json({ message: "hello khanjar" });
});

app.get("/kawtar", (req, res) => {
  res.json({ message: "i'm kawtar " });
});

app.listen(3000, () => {
  console.log("server is running");
});
app.get("/students", (req, res) => {
  res.json(studnets);
});
app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = studnets.find((s) => s.id === studentId);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
});