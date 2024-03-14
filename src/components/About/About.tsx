import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
// rafce
const About = () => {
  const [showProgress, setShowProgress] = useState(false);
  return (
    <div className="flex flex-col items-center gap-10 pt-20 pb-5">
      <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
        About
      </h1>
      <button
        className="bg-gray-200 px-4 py-2 text-2xl rounded-lg shadow-lg hover:bg-gray-300"
        onClick={() => {
          setShowProgress(!showProgress);
        }}
      >
        Toggle Spinner
      </button>
      {/* conditional rendering: if (condition) show! */}
      {showProgress && (
        <ClimbingBoxLoader
          color="#36d7b7"
          speedMultiplier={3}
          style={{ margin: "auto", width: "40px" }}
        />
      )}
    </div>
  );
};

export default About;

