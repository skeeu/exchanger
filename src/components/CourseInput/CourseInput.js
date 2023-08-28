import "./CourseInput.css";

export default function CourseInput({ inputValue, onChange }) {
  return (
    <input className="course_input" value={inputValue} onChange={onChange} />
  );
}
