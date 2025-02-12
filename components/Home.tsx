import React from "react";
import HomeSvg from "@/public/svg/HomeSVG";

export default function Home(): React.ReactElement {
  return (
    <div className="div-layout" role="main">
      <div className="blur-background"></div>
      <div>
        <div className="flex flex-row gap-3 items-center mt-[3rem]">
          <HomeSvg
            className="w-[36px] h-[36px] shadow-[1px_1px_3px_3px_rgba(255,200,200,0.6)] rounded-[3px]"
            fill="rgb(8, 45, 139)"
          />
          <h2 className="text-[36px]">Home</h2>
        </div>
      </div>
    </div>
  );
}
