import "./global.css";
import "./reset.css";
import { useState, useEffect } from "react";
import { fetchCourseData } from "./lib/fetchCourseData";
import FormIn from "./components/FormIn/FormIn";
import FormOut from "./components/FormOut/FormOut";

export default function App() {
  const [currencies, setCurrencies] = useState({});
  const [courses, setCourses] = useState([]);
  const [courseInputIn, setCourseInputIn] = useState("");
  const [courseInputOut, setCourseInputOut] = useState("");

  const [activeCourseIn, setActiveCourseIn] = useState(courses[0]);
  const [activeCourseOut, setActiveCourseOut] = useState(courses[0]);

  useEffect(() => {
    setActiveCourseIn(courses[0]);
    setActiveCourseOut(courses[0]);
  }, [courses]);

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await fetchCourseData();
      const newCourses = Object.keys(courseData.rates).slice(0, 4);
      const newCurrencies = {};
      for (const course of newCourses) {
        newCurrencies[course] = {};
        for (const subCourse of newCourses.filter((c) => c !== course)) {
          newCurrencies[course][subCourse] = courseData.rates[subCourse];
        }
        newCurrencies[course][course] = 1;
      }
      setCourses(newCourses);
      setCurrencies(newCurrencies);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App__inner">
        <FormIn
          currencies={currencies}
          courses={courses}
          activeCourseOut={activeCourseOut}
          activeCourseIn={activeCourseIn}
          setActiveCourseIn={setActiveCourseIn}
          courseInputIn={courseInputIn}
          setCourseInputIn={setCourseInputIn}
          setCourseInputOut={setCourseInputOut}
        />
        <FormOut
          currencies={currencies}
          courses={courses}
          activeCourseOut={activeCourseOut}
          setActiveCourseOut={setActiveCourseOut}
          courseInputOut={courseInputOut}
        />
      </div>
    </div>
  );
}
