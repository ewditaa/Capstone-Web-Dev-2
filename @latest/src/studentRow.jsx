function StudentRow({ student, updateScore }) {
  const handleChange = (e) => {
    updateScore(student.id, e.target.value);
  };

  const isPass = student.score >= 40;

  return (
    <tr>
      <td>
        {student.name.charAt(0).toUpperCase() + student.name.slice(1)}
      </td>

      <td>
        <input
          type="number"
          value={student.score}
          onChange={handleChange}
        />
      </td>

      <td className={isPass ? "pass" : "fail"}>
        {isPass ? "Pass" : "Fail"}
      </td>
    </tr>
  );
}

export default StudentRow;