import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-transparent">
      <div className="flex items-center justify-center gap-8">
        <button className="flex items-center justify-center w-16 h-16 rounded-full border border-white/40 bg-black/50">
          <FaFacebookSquare />
        </button>
        <button className="flex items-center justify-center w-16 h-16 rounded-full border border-white/40 bg-black/50">
          <FaInstagram />
        </button>
        <button className="flex items-center justify-center w-16 h-16 rounded-full border border-white/40 bg-black/50">
          <FaTwitter />
        </button>
      </div>
      <footer className="text-center py-6 footerElement w-full">
      &copy;{new Date().getFullYear()} lastdrop
      </footer>
    </div>
  );
};

export default Footer;
