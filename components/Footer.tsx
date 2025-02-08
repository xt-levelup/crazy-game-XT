export default function Footer(): React.ReactElement {
  return (
    <div className="relative my-[1rem] rounded-[12px] shadow-[3px_3px_6px_3px_rgba(255,200,200,0.6)] max-w-[1280px] w-full mx-auto flex flex-row justify-center items-center">
      <div className="bg-blue-600 absolute w-full h-full z-[-1] rounded-[12px] opacity-60"></div>
      <div className="w-full grid grid-cols-3 gap-[1rem]">
        <div className="px-3  py-3 ">
          <h3 className="text-[18px] italic">Contact Information:</h3>
          <div className="pl-3 my-3 flex flex-col italic text-[15px] gap-1">
            <p>Email: xitrumvndn5@gmail.com</p>
            <p>Phone number: (84) 0379452850</p>
            <p>
              Address: Cẩm Toại Tây Village, Hòa Phong commune, Hòa Vang
              District, Đà Nẵng city, Việt Nam
            </p>
          </div>
        </div>
        <div className="px-3 py-3 ">
          <h3 className="text-[18px] italic">
            Help you play the games easier at:
          </h3>
          <div className="pl-3 my-3 flex flex-col italic text-[15px] gap-1">
            <p>Link #1</p>
            <p>Link #2</p>
            <p>Link #3</p>
          </div>
        </div>
        <div className="px-3  py-3 ">
          <h3 className="text-[18px] italic">Support me at:</h3>
          <div className="pl-3 my-3 flex flex-col italic text-[15px] gap-1">
            <p>Bank account: Public, Dong A, Vietcombank</p>
            <p>Coins: Bitcoin, Ethereum, </p>
            <p>Paypal: Paypal address </p>
          </div>
        </div>
      </div>
    </div>
  );
}
