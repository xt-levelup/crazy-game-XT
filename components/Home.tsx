import HomeSvg from "@/public/svg/HomeSVG";

export default function Home(): React.ReactElement {
  return (
    <div className="relative my-[1rem] mx-auto rounded-[12px] shadow-[3px_3px_6px_3px_rgba(255,200,200,0.6)] max-w-[1280px] w-full flex flex-row justify-center items-center">
      <div className="bg-blue-600 absolute w-full h-full z-[-1] rounded-[12px] opacity-60"></div>
      <div>
        <div className="flex flex-row gap-3 items-center mt-[3rem]">
          {/* <HomeSvg className="w-[24px] h-[24px] mr-2" /> */}
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
