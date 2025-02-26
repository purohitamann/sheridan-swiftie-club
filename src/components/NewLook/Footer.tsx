import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Mail, InboxIcon} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      {/* Top Sign */}
      <motion.div
        className="bg-[#c52f2f] text-white px-4 py-1 rounded-t-md border-2 border-white shadow-md z-10 text-sm font-bold uppercase tracking-wider font-futura"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        STOP & CONNECT
      </motion.div>
      
      {/* Main Footer Box */}
      <motion.div
        className="w-full max-w-3xl bg-white border-2 border-gray-300 shadow-lg -mt-1 p-6 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Posts Section */}
          <div className="border-2 border-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-bold uppercase mb-3 font-futura text-[#ECB22E]">Latest Posts</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#c52f2f] transition-colors font-sans text-gray-700">
                  🎤 Swiftie Karaoke Night – March 15th!
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#c52f2f] transition-colors font-sans text-gray-700">
                  💃 Swiftie Dance Party Recap!
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#c52f2f] transition-colors font-sans text-gray-700">
                  🎶 Album Listening Session – Join Us!
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="border-2 border-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-bold uppercase mb-3 font-futura text-[#2f8ca0]">Follow Us</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="hover:text-[#2f8ca0] transition-colors font-sans text-black">
                <p className="text-xs flex flex-row"> <InstagramLogoIcon  className="w-5 h-5 mr-1"/> sheridanswiftieclub</p>
                </Link>
              </li>
           
              <li>
                <Link href="#" className="hover:text-[#2f8ca0] transition-colors font-sans text-black ">
                 <p className="text-xs flex "> <InboxIcon className="text-black mr-1" /> sheridanswiftieclub@gmail.com</p>
                </Link> 
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="border-2 border-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-bold uppercase mb-3 font-futura text-[#279c6b]">Find Us</h3>
            <p className="text-sm font-sans text-black">
              Sheridan College, Trafalgar Campus
              <br /> 1430 Trafalgar Rd, Oakville, ON
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-600 mt-6 font-sans mb-20">
  &copy; 2024 Sheridan Swiftie Club. All rights reserved. 
  <br />
  Version new-romantics 0.1
      </div>
    </div>
  );
};

export default Footer;