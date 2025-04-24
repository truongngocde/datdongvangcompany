import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import heroImage from "../../assets/heroImg.jpg"; // ảnh mới vừa tạo

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 container mx-auto"
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          {/* Slogan badge */}
          <div className="flex items-center gap-2 bg-yellow-50 w-fit px-4 py-2 rounded-full hover:bg-yellow-100 transition-colors cursor-pointer group">
            <span className="text-green-600 group-hover:scale-110 transition-transform">
              🔰
            </span>
            <span className="text-xl font-medium">
              Vững nền móng – Bền niềm tin
            </span>
          </div>
        </motion.div>

        <motion.h2
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight"
        >
          Đơn vị đa ngành{" "}
          <span className="text-green-700 relative inline-block">
            tiên phong{" "}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-300/60"></span>
          </span>
          trong sản xuất & thương mại thiết yếu
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-700 text-xl"
        >
          CÔNG TY CỔ PHẦN ĐẤT ĐỒNG VÀNG được thành lập từ năm 2018 trên cơ sở
          tích lũy kinh nghiệm của các thành viên sáng lập, Đất Đồng Vàng đã trưởng
          thành nhanh chóng, trở thành doanh nghiệp uy tín trong lĩnh vực năng
          lượng và môi trường. Với phương châm “Vững nền móng – Bền niềm tin”
          công ty chúng tôi luôn lắng nghe, tận tình tư vấn, chia sẻ kinh nghiệm
          làm việc cùng quý khách hàng. Đến với chúng tôi, Quý khách hàng sẽ
          thực sự hài lòng khi nhận được những lời tư vấn tận tình nhất của
          những chuyên gia, kỹ sư và đội ngũ công nhân thi công lành nghề, không
          những mang giá trị thẩm mĩ mà còn đảm bảo chất lượng kỹ thuật với giá
          cả hợp lý nhất.
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
            src={heroImage}
            alt="Kho vật tư Đất Đồng Vàng"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
