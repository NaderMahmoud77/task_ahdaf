import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Jsx //
const DrawerContent = ({ setOpenDrawer }) => {
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
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onClick={() => setOpenDrawer(false)}
      className="bg-[#111] h-full flex flex-col items-center pt-8 gap-8 relative"
    >
      {/* CLOSE BUTTON */}
      <IconButton onClick={() => setOpenDrawer(false)} className=" absolute! left-1">
        <CloseIcon className="text-white" />
      </IconButton>
      {/* LOGO */}
      <div className="w-24">
        <img src="/assets/Header/logo.png" alt="Logo" />
      </div>

      {/* LINKS */}
      <nav className="flex flex-col items-center gap-6 text-lg">
        <a href="#home" className="font-bold inline-block text-[#8E741D]">
          الرئيسية
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
      </nav>
    </Box>
  );
};

export default function MobileDrawer({ openDrawer, setOpenDrawer }) {
  return (
    <>
      {/* MENU BUTTON */}
      <IconButton onClick={() => setOpenDrawer(true)}>
        <MenuIcon className="text-white" />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: "#111",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          },
        }}
      >
        <DrawerContent setOpenDrawer={setOpenDrawer} />
      </SwipeableDrawer>
    </>
  );
}
