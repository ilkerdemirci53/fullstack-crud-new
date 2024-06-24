"use client";

import { RotatingLines } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="animate-pulse">Loading...</p>

      <RotatingLines
        strokeColor="grey"
        strokeWidth="2"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loading;
