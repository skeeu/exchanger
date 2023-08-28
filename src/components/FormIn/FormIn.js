import CourseForm from "../CourseForm/CourseForm";
import { useEffect } from "react";

export default function FormIn({
  currencies,
  courses,
  activeCourseOut,
  activeCourseIn,
  setActiveCourseIn,
  courseInputIn,
  setCourseInputIn,
  setCourseInputOut,
}) {
  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      setCourseInputOut(
        currencies[activeCourseIn][activeCourseOut] * courseInputIn
      );
    }
  }, [courseInputIn, activeCourseIn, activeCourseOut]);

  const onClick = (buttonValue) => {
    setActiveCourseIn(buttonValue);
  };

  const onChange = (e) => {
    setCourseInputIn(e.target.value);
  };

  return (
    <CourseForm
      buttonValues={courses}
      activeButton={activeCourseIn}
      onClick={onClick}
      inputValue={courseInputIn}
      onChange={onChange}
    />
  );
}
