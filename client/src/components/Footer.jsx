import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import bgFooter from "../assets/bg-footer.png"

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };
  return (
    <div style={{ background: `url(${bgFooter}) center center / cover no-repeat` }}>
      <motion.footer
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className=""
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Column */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              className="lg:col-span-4"
            >
              <motion.div
                variants={fadeIn("right", 0.5)}
                className="flex gap-1 items-center mb-6"
              >
                <div className="flex flex-col items-center justify-center leading-none">
                  {/* Logo chữ "aria" với chấm đỏ trên chữ "i" */}
                  <div className="relative flex items-center font-bold text-2xl md:text-3xl tracking-tight text-gray-900">
                    <span>a</span>
                    <span>r</span>
                    <div className="relative">
                      <span>ı</span> {/* Chữ "i" không chấm */}
                      {/* Dấu chấm đỏ */}
                      <span className="absolute -top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></span>
                    </div>

                    <span>a</span>
                  </div>

                  {/* HOLDING chữ nhỏ bên dưới */}
                  <div className="text-[10px] md:text-xs tracking-widest text-gray-600 mt-0.5">
                    HOLDING
                  </div>
                </div>
                <span className="text-sm font-bold ml-1">
                  CÔNG TY CỔ PHẦN ARIA HOLDINGS
                </span>
              </motion.div>

              <p className="text-gray-600 mb-6 text-sm">
                Trụ Sở Chính : 162B Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3,
                Thành phố Hồ Chí Minh, Việt Nam <br /> <br />
                Hotline : 028 3810 7669 <br /> <br />
                Email : info@dongduongcorp.com.vn <br /> <br />
                Website : www.dongduongcorp.com.vn 
          
              </p>

              <div className="flex gap-4">
                <a
                  href=""
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-blue-400 hover:text-white transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-blue-700 hover:text-white transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(
                  ([category, links], categoryIndex) => (
                    <div key={category}>
                      <h3 className="text-lg font-medium mb-4">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h3>
                      <ul className="space-y-3">
                        {links.map((link, index) => (
                          <li key={index}>
                            <a
                              href={link.href}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                Copyright © {new Date().getFullYear()} codetutorbd.com
              </p>
              <p className="text-gray-600 text-sm">Created by Md Al Mamun</p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
