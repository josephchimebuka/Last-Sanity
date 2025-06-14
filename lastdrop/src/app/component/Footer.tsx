import Link from 'next/link';
import {  FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-transparent">
      <div className="flex items-center justify-center gap-8">
       
        <Link
          href="https://www.instagram.com/lastdrop_ng?igsh=MWRxZDYyNnJ0MHA5aA=="
          className="flex items-center justify-center w-16 h-16 rounded-full border border-white/40 bg-black/50 text-white"
        >
          <FaInstagram />
        </Link>
        <Link  href="https://www.tiktok.com/@lastdropng" className="flex items-center justify-center w-16 h-16 rounded-full border border-white/40 bg-black/50 text-white">
        <FaTiktok />
        </Link>
      </div>
      <footer className="text-center py-6 footerElement w-full">
        &copy;{new Date().getFullYear()} lastdrop
      </footer>
    </div>
  );
};

export default Footer;