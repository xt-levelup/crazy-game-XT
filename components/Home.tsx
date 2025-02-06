export default function Home(): React.ReactElement {
  return (
    <div className="relative my-[1rem] rounded-[12px] shadow-[3px_3px_6px_3px_rgba(255,200,200,0.6)] max-w-[1280px] w-full mx-auto flex flex-row justify-center items-center text-blue-300">
      <div className="bg-blue-600 absolute w-full h-full z-[-1] rounded-[12px] opacity-60"></div>
      <div>
        <h2 className="text-[36px] mt-[3rem]">Home</h2>
      </div>
    </div>
  );
}
