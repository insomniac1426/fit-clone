import React, { useState } from "react";
import "./index.css";
import Timer from "./Timer/Timer";

const Body = () => {
  const [data, setData] = useState({
    animationTime: 8,
  });

  return (
    <div className="mg-top-100 app_body-container">
      <Timer animationTime={data.animationTime} />
    </div>
  );
};

export default Body;
