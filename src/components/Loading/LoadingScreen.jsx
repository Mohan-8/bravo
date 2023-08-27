import React from "react";
import { HashLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <HashLoader size={70} color={"#00FFFF"} loading={true} />
    </div>
  );
};

export default LoadingScreen;
