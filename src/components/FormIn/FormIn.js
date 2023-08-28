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
      const result = (
        currencies[activeCourseIn][activeCourseOut] * courseInputIn
      ).toFixed(2);
      setCourseInputOut(result);
    }
  }, [courseInputIn, activeCourseIn, activeCourseOut]);

  const onClick = (buttonValue) => {
    setActiveCourseIn(buttonValue);
  };

  const onChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value.length < 19) {
      if (e.target.value.length === 0) {
        setCourseInputIn(1);
        return;
      }
      setCourseInputIn(e.target.value);
    }
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
