import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdLanguage } from "react-icons/md"; // Import Global Icon

export default function Footer() {
  return (
    <footer className="bg-[#043873] text-white py-10 px-6 md:px-20">
  
      <div className="text-center mb-10">
        <h2 className="text-6xl font-bold mb-3">
          Try Whitepace <br /> today
        </h2>
        <p className="text-lg mb-4">
          Get started for free. <br /> Add your whole team as your needs grow.
        </p>
        <button className="bg-[#4f9df8] text-white px-6 py-3 rounded-lg font-semibold mb-4">
          Try Taskey free →
        </button>
        <p className="text-lg mt-2">
          On a big team?{" "}
          <Link href="#" className="underline">
            Contact sales
          </Link>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Image src="/footer-logo1.png" alt="Apple" width={60} height={60} className="w-[50px] h-[50px]" />
          <Image src="/footer-logo2.png" alt="Windows" width={60} height={60} className="w-[50px] h-[50px]" />
          <Image src="/footer-logo3.png" alt="Android" width={60} height={60} className="w-[50px] h-[50px]" />
        </div>
      </div>

  
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
    
        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Image src="/Group.svg" alt="" height={21} width={30} className="h-[20px] w-[28px] lg:h-[29px] lg:w-[37px]" />
            Whitepace
          </h3>
          <p className="text-sm leading-relaxed">
            Whitespace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

   
        <div>
          <h4 className="font-bold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#FFE492]">Overview</li>
            <li className="hover:text-[#FFE492]">Pricing</li>
            <li className="hover:text-[#FFE492]">Customer stories</li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-bold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#FFE492]">Blog</li>
            <li className="hover:text-[#FFE492]">Guides & tutorials</li>
            <li className="hover:text-[#FFE492]">Help center</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#FFE492]">About us</li>
            <li className="hover:text-[#FFE492]">Careers</li>
            <li className="hover:text-[#FFE492]">Media kit</li>
          </ul>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6 text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <MdLanguage className="w-5 h-5" />
            <select className="bg-[#043873] text-white border-none focus:outline-none">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <span className="hover:text-[#FFE492]">Terms & privacy</span>
          <span className="hover:text-[#FFE492]">Security</span>
          <span className="hover:text-[#FFE492]">Status</span>
          <p className="mt-4 md:mt-0">© 2021 Whitespace LLC.</p>
        </div>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#">
            <FaTwitter className="w-5 h-5 text-white hover:text-[#4f9df8]" />
          </Link>
          <Link href="#">
            <FaFacebookF className="w-5 h-5 text-white hover:text-[#4f9df8]" />
          </Link>
          <Link href="#">
            <FaLinkedinIn className="w-5 h-5 text-white hover:text-[#4f9df8]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
