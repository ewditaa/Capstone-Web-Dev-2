import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const addStudent = (e) => {
    e.preventDefault();

    if (!name || !score) return;

    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score)
    };

    setStudents([...students, newStudent]);

    setName("");
    setScore("");
  };

  const updateScore = (id, newScore) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    );

    setStudents(updated);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎓 Student Report Card</h1>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button>Add</button>
      </form>

      <table border="1" style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => {
            const isPass = s.score >= 40;

            return (
              <tr key={s.id}>
                <td>{s.name}</td>

                <td>
                  <input
                    type="number"
                    value={s.score}
                    onChange={(e) =>
                      updateScore(s.id, e.target.value)
                    }
                  />
                </td>

                <td style={{ color: isPass ? "green" : "red" }}>
                  {isPass ? "Pass" : "Fail"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
      name,
      score: Number(score)
    };

    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, score: Number(newScore) } : student
    );

    setStudents(updated);
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;