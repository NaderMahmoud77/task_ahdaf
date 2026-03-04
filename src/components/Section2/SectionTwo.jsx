import React from "react";

// Icon
import { ArrowRight } from "lucide-react";

const SectionTwo = () => {
  return (
    <div className=" container mx-auto px-4 flex flex-col lg:flex-row items-center gap-5 my-20">
      {/* Card One */}
      <div className="h-68 w-full lg:h-138 lg:w-[384px] relative overflow-hidden rounded-[10px]">
        <img
          src="/assets/section_1/three.jpg"
          alt="Section 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        <div>
          <h1 className="absolute bottom-25 right-6 text-white text-[20px] md:text-[32px] font-semibold ">
            براويز خشبية
          </h1>
          <div className="absolute bottom-5 right-6 rounded-[10px]  cursor-pointer w-[180px] h-[49px]  md:w-[210px] md:h-[59px]">
            <p className=" relative text-white text-[20px] md:text-[24px] flex items-center  justify-center font-normal border-1 border-[#8E741D] w-full h-full text-center">
              عرض المنتجات
            </p>
            <button className="h-9 w-9 md:h-11.5 md:w-11.5 cursor-pointer bg-[#8E741D] rounded-full absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ArrowRight size={18} className="text-white rotate-180 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Card Two And Three */}
      <div className="flex flex-col items-center justify-center gap-5 flex-1 w-full lg:h-138">
        <div className="h-68 w-full relative overflow-hidden rounded-[10px]">
          <img
            src="/assets/section_1/one.jpg"
            alt="Section 1"
            className="h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute top-1/2 -right-10 transform -translate-x-1/2 ">
            <h1 className=" text-white text-[20px] mb-5 md:text-[32px] font-semibold">
              هدية لشخص مميز{" "}
            </h1>

            <div className="relative rounded-[10px] cursor-pointer w-[180px] h-[49px]  md:w-[210px] md:h-[59px] mt-3!">
              <p className=" text-white text-[20px] md:text-[24px] flex items-center  justify-center font-normal border-1 border-[#8E741D] w-full h-full text-center">
                عرض المنتجات
              </p>
              <button className="h-9 w-9 md:h-11.5 md:w-11.5 cursor-pointer bg-[#8E741D] rounded-full absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ArrowRight
                  size={18}
                  className="text-white rotate-180 mx-auto"
                />
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="h-68 w-full relative overflow-hidden rounded-[10px]">
          <img
            src="/assets/section_1/two.jpg"
            alt="Section 1"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute top-1/2 left-8">
            <h1 className=" text-white mb-5 text-[20px] md:text-[32px] font-semibold">
              لوحات خشبية جاهزة{" "}
            </h1>

            <div className="relative rounded-[10px] cursor-pointer w-[180px] h-[49px]  md:w-[210px] md:h-[59px] mt-3!">
              <p className="text-white text-[20px] md:text-[24px] flex items-center  justify-center font-normal border-1 border-[#8E741D] w-full h-full text-center">
                عرض المنتجات
              </p>
              <button className="h-9 w-9 md:h-11.5 md:w-11.5  cursor-pointer bg-[#8E741D] rounded-full absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ArrowRight
                  size={18}
                  className="text-white rotate-180 mx-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
