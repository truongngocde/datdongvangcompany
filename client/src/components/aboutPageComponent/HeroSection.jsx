import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import dkkdImage from "../../assets/giay-chung-nhan-dk-kinh-doanh.jpg"; // ảnh mới vừa tạo

const HeroSection = () => {
  return (
    <>
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mt-20">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-5xl font-bold mb-4 text-gray-800"
        >
          GIỚI THIỆU
        </motion.h2>
      </motion.div>
      <section
        id="home"
        className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 container mx-auto"
      >
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-8">
          <motion.h2
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight"
          >
            CÔNG TY CỔ PHẦN{" "}
            <span className="text-green-700 relative inline-block">
              ĐẤT ĐỒNG VÀNG{" "}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-300/60"></span>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-gray-700 text-xl"
          >
            Giám đốc: Nguyễn Thị Kim Dung <br /> <br /> Điện thoại: 0909.090.090
            <br /> <br />
            Email: datdongvang@gmail.com <br /> <br /> 1. Uy tín luôn được đặt
            lên hàng đầu. Cung cấp sản phẩm, dịch vụ, hậu mãi… đúng cam kết.{" "}
            <br /> <br /> 2. Sử dụng nguyên vật liệu đầu vào đảm bảo chất lượng,
            nguồn gốc từ những nhà cung cấp uy tín. <br /> <br /> 3. Tự động hóa
            tối đa dây chuyền sản xuất, với máy móc hiện đại nhất để tạo ra các
            sản phẩm có độ bền cao và đảm bảo an toàn lao động cao nhất hiệu quả
            trong quá trình sử dụng, đạt tiêu chuẩn của bộ xây dựng. <br />{" "}
            <br /> 4. Luôn làm thỏa mãn tối đa các yêu cầu thoả đáng của khách
            hàng. Với mục tiêu Hợp tác lâu dài, Đôi bên cùng có lợi, uy tín,
            chất lượng, cùng nhau phát triển.
          </motion.p>
        </div>

        {/* Right Column - Image */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
        >
          <div className="relative">
            <img
              src={dkkdImage}
              alt="Kho vật tư Đất Đồng Vàng"
              className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 shadow-xl"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
