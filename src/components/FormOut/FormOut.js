import CourseForm from "../CourseForm/CourseForm";

export default function FormOut({
  courses,
  activeCourseOut,
  setActiveCourseOut,
  courseInputOut,
}) {
  const onClick = (buttonValue) => {
    setActiveCourseOut(buttonValue);
  };

  return (
    <CourseForm
      buttonValues={courses}
      activeButton={activeCourseOut}
      onClick={onClick}
      inputValue={courseInputOut}
      onChange={() => {}}
    />
  );
}
