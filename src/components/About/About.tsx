import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

const About = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="flex flex-col items-center">
      <button className="bg-purple-200 p-2 rounded mb-2" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && <ClimbingBoxLoader color="#36d7b7" speedMultiplier={3} />}
    </div>
  );
};

export default About;

