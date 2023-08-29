import "./CourseButton.css";

export default function CourseButton({ value, activeButton, onClick }) {
  return (
    <button
      className={`course__button ${activeButton === value ? "active" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
