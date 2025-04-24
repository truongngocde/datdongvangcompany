import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import bgFooter from "../assets/bg-footer.png";
import logoDDV from "../assets/logoDatdongvang.png";

const Footer = () => {
  return (
    <div
      style={{ background: `url(${bgFooter}) center center / cover no-repeat` }}
    >
      <motion.footer
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className=""
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
                  <div className="flex items-center space-x-2">
                    <img
                      src={logoDDV} // <-- đường dẫn tới logo
                      alt="Logo Đất Đồng Vàng"
                      className="h-25 md:h-25 w-auto"
                    />
                  </div>

                  {/* HOLDING chữ nhỏ bên dưới */}
                </div>
                <span className="text-xl font-bold ml-1">
                  CÔNG TY CỔ PHẦN ĐẤT ĐỒNG VÀNG
                </span>
              </motion.div>

              <p className="text-gray-600 mb-6 text-lg">
                Trụ Sở Chính : Số 1 Cộng Hòa 3, P. Tân Thành, Q. Tân Phú, TP.HCM
                <br /> <br />
                Hotline : 0909.090.090 <br /> <br />
                Email : Đang cập nhật <br /> <br />
                Website : Đang cập nhật
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
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {/* {Object.entries(footerLinks).map(
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
                )} */}
              
                <div className="container mx-auto text-center">
                  <h3 className="text-xl mb-4">Vị trí của chúng tôi</h3>
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.6346073805798!2d106.63319378194048!3d10.79068100752224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eab6bd4e543%3A0x2ad1372b04fec0c!2zMSBD4buZbmcgSMOyYSAzLCBUw6JuIFRow6BuaCwgVMOibiBQaMO6LCBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1744797459844!5m2!1svi!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.6346073805798!2d106.63319378194048!3d10.79068100752224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eab6bd4e543%3A0x2ad1372b04fec0c!2zMSBD4buZbmcgSMOyYSAzLCBUw6JuIFRow6BuaCwgVMOibiBQaMO6LCBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1744797459844!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                  </div>
                </div>
              
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-lg">
                Copyright © {new Date().getFullYear()} Công ty Cổ phần Đất Đồng
                Vàng
              </p>
              {/* <p className="text-gray-600 text-sm">Created by Md Al Mamun</p> */}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
