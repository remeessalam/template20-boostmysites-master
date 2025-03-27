import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { companyDetails } from "../util/constant";

const WhatsAppIcon = () => {
  return (
    <Link
      className="fixed group bottom-[2.5rem] p-1 hover:-translate-y-1 z-30 border bg-green-500 border-white-500  rounded-full right-[1.5rem] transition-all duration-200"
      to={companyDetails.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <BsWhatsapp className="w-[2.5rem] scale-95 h-[2.5rem] sm:w-[3rem] sm:h-[3rem] p-1 fill-white group-hover:fill-white group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300" />
    </Link>
  );
};

export default WhatsAppIcon;
