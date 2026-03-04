// import icons
import { User, ShoppingCart, Globe, Menu } from "lucide-react";

// Jsx /
const NavBar = ({ HandleOpenDrawer }) => {
  // Links
  const links = [
    { label: "الاقسام", href: "about" },
    { label: "استوديو التصميم", href: "services" },
    { label: " طلبات الشركات", href: "contact" },
    { label: "العروض", href: "offers" },
    { label: "من نحن", href: "about-us" },
    { label: "تواصل معنا", href: "contact" },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* ======== Mobile ========  */}
      <div className="w-full flex items-center justify-between lg:hidden">
        {/* Logo */}
        <div className="w-37 h-28">
          <img src="/assets/Header/logo.png" alt="Logo" className="h-full" />
        </div>

        {/* Toggle bar */}
        <div onClick={HandleOpenDrawer}>
          <Menu className=" cursor-pointer hover:text-[#D3CFCF] duration-100" />
        </div>
      </div>
      {/* ======== Desktop ======== */}
      <div className="hidden relative h-22 mt-4 border-x border-amber-50 rounded-[50px] lg:flex items-center justify-between py-2 px-6 bg-[#15131433] overflow-hidden text-white">
        {/* Logo */}
        <div className="w-37 h-37">
          <img src="/assets/Header/logo.png" alt="Logo" />
        </div>
        {/* Links */}
        <div className="flex gap-3 2xl:gap-8 text-md 2xl:text-lg">
          <a
            href="#home"
            className="font-bold relative inline-block text-[#8E741D]"
          >
            الرئيسية
            <span className="absolute left-1/2 -bottom-7.5 transform -translate-x-1/2 w-full h-2 rounded-4xl bg-[#8E741D]"></span>
            <span
              className="absolute left-1/2 transform -bottom-6 w-0 h-0 
                   border-l-8 border-l-transparent 
                   border-r-8 border-r-transparent 
                   border-b-8 border-b-[#8E741D] 
                   -translate-x-1/2 rounded-2xl!"
            ></span>
          </a>
          {links.map((link) => {
            return (
              <a
                key={link.label}
                href={`#${link.href}`}
                className="text-[#D3CFCF] hover:text-[#8E741D] hover:font-bold duration-100"
              >
                {link.label}
              </a>
            );
          })}
        </div>
        {/* Icons */}
        <div className="flex gap-4 ml-6">
          <div className="w-11.5 h-11.5 rounded-full bg-[#8E741D29] flex items-center justify-center cursor-pointer hover:scale-105 duration-150">
            <ShoppingCart size={20} className="text-white" />
          </div>
          <div className="w-11.5 h-11.5 rounded-full bg-[#8E741D29] flex items-center justify-center cursor-pointer hover:scale-105 duration-150">
            <Globe size={20} className="text-white" />
          </div>
          <div className="w-11.5 h-11.5 rounded-full bg-[#8E741D29] flex items-center justify-center cursor-pointer hover:scale-105 duration-150">
            <User size={20} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
