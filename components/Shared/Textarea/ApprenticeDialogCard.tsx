import { useState } from "react";
import { BsThreeDotsVertical, BsXLg } from "react-icons/bs";

function ApprenticeDialogCard() {
  const [isModel, setIsModel] = useState(true);
  return (
    <div
      className="rounded h-[270px] w-full text-center overflow-hidden bg-white flex flex-col items-center justify-start relative"
      style={{
        boxShadow: "inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
      }}
    >
      {isModel ? (
        <div
          className="absolute top-[40px]  right-[57px] cursor-pointer ml-6"
          onClick={() => {
            setIsModel(!isModel);
          }}
        >
          <BsThreeDotsVertical
            color="#AFAFAF"
            size={26}
            style={{ marginLeft: "10px" }}
          />
        </div>
      ) : (
        <div
          className="absolute top-[32px] right-[57px] cursor-pointer"
          onClick={() => {
            setIsModel(!isModel);
          }}
        >
          <BsXLg color="#AFAFAF" size={26} />
        </div>
      )}

      <div className="w-[100px] h-[100px] shrink-0 rounded-full overflow-hidden bg-slate-200 mt-[27px]">
        <img src="/img/women.png" alt="women" />
      </div>
      <h2 className="text-primary font-black text-[25px] leading-[28px] mt-1">
        Dorothy J. Fast
      </h2>

      {/* w-172 h-93 */}
      {isModel ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-[#8F9198]">Software Developer</p>
          <button className="bg-primary text-white rounded-full px-6 py-1 mt-5 ">
            Onboard
          </button>
        </div>
      ) : (
        <div className=" w-[172px] h-[93px] flex flex-col items-center justify-start pt-[14px]">
          <button className=" w-full h-[25px] text-[#959595] text-[10px] font-medium capitalize border-[1px] rounded-[13px] border-[#707070] mb-[6px]">
            manage
          </button>
          <button className=" w-full h-[25px] text-[#959595] text-[10px] font-medium capitalize border-[1px] rounded-[13px] border-[#707070] mb-[6px]">
            view profile
          </button>
          <button className=" w-full h-[25px] text-[#959595] text-[10px] font-medium capitalize border-[1px] rounded-[13px] border-[#EC4E6E]">
            remove apprentice
          </button>
        </div>
      )}
    </div>
  );
}

export default ApprenticeDialogCard;
