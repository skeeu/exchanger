import CourseInput from "../CourseInput/CourseInput";
import CourseButtonSwitch from "./../CourseButtonSwitch/CourseButtonSwitch";
import "./CourseForm.css";

export default function CourseForm({
  buttonValues,
  activeButton,
  onClick,
  inputValue,
  onChange,
}) {
  return (
    <div className="course_form__container">
      <CourseButtonSwitch
        buttonValues={buttonValues}
        activeButton={activeButton}
        onClick={onClick}
      />
      <CourseInput inputValue={inputValue} onChange={onChange} />
    </div>
  );
}
