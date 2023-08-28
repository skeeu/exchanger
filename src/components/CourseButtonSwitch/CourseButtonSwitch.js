import CourseButton from "../CourseButton/CourseButton";
import { useState } from "react";
import "./CourseButtonSwitch.css";

export default function CourseButtonSwitch({
  buttonValues,
  onClick,
  activeButton,
}) {
  return (
    <div className="course_button_switch__container">
      {buttonValues.map((buttonValue) => {
        return (
          <CourseButton
            key={buttonValue}
            onClick={() => onClick(buttonValue)}
            value={buttonValue}
            activeButton={activeButton}
          />
        );
      })}
    </div>
  );
}
