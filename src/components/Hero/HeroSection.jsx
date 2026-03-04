// Style
import "./HeroSection.css";
// Component
import NavBar from "../All/NavBar";

// Jsx //
const HeroSection = ({ HandleOpenDrawer }) => {
  return (
    <div className="hero-section text-white">
      {/* Header */}
      <NavBar HandleOpenDrawer={HandleOpenDrawer} />

      {/* Content Hero */}
      <div className="hero-content flex items-center justify-center gap-5 flex-col h-full text-center">
        <h1 className="hero-title text-[24px] md:text-[48px] font-medium">
          صمّم لوحتك الخشبية… أو اختر قطعة جاهزة
        </h1>
        <p className="text-[#D3CFCF] text-[16px] md:text-[32px] my-10">
          منصة متخصصة في البراويز واللوحات الخشبية الجاهزة والمصممة
          <br />
          حسب الطلب.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mg:gap-6">
          <button className="bg-[#8E741D] text-[15px] md:text-[22px] cursor-pointer text-white px-3 py-1 md:px-6 md:py-3 rounded-lg hover:bg-[#6B5A17] transition duration-300">
            تصفح المنتجات الجاهزة
          </button>
          <button className="bg-[#151314] text-[15px] md:text-[22px] cursor-pointer text-white px-3 py-1 md:px-6 md:py-3 rounded-lg hover:bg-[#000000] transition duration-300">
            صمم لوحتك بنفسك
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
