import "./CourseButton.css";

export default function CourseButton({ value, activeButton, onClick }) {
  return (
    <button
      data-value={value}
      className={`course__button ${activeButton === value ? "active" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
