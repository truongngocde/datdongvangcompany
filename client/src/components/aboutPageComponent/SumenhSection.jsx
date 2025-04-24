import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import sumenhImage from "../../assets/sumenh.jpg";


const IntroduceSection = () => {
  return (
      <motion.section
        id="about"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto px-4 py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Left side - Image */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="w-full md:w-1/2"
          >
            <motion.span
              variants={fadeIn("up", 0.4)}
              className="text-amber-600 font-semibold text-xl"
            >
              CÔNG TY CỔ PHẦN ĐẤT ĐỒNG VÀNG
            </motion.span>

            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:text-4xl font-bold text-green-800 mt-6 mb-6"
            >
              SỨ MỆNH
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6"
            >
              <span className="text-xl">
                Đối với khách hàng: luôn đặt lợi ích của khách hàng lên hàng
                đầu, cung cấp các sản phẩm chất lượng. Thay đổi không ngừng
                phong cách phục vụ nhằm đáp ứng nhu cầu của khách hàng ngày một
                tốt hơn. <br /> Đối với nhân viên: luôn xây dựng môi trường làm
                việc chuyên nghiệp, năng động, sáng tạo và nhân văn tạo điều
                kiện thu nhập cao và cơ hội phát triển công bằng cho tất cả nhân
                viên. <br />
                Đối với cổ đông và đối tác: luôn gia tăng các giá trị đầu tư hấp
                dẫn và bền vững đối với xã hội: luôn đóng góp tích cực cho cộng
                đồng
              </span>
            </motion.p>
          </motion.div>

          {/* Right side - Content */}

          <motion.div
            variants={fadeIn("right", 0.3)}
            className="w-full md:w-1/2"
          >
            <motion.img
              variants={fadeIn("up", 0.4)}
              src={sumenhImage} // Thay bằng ảnh nhà xưởng/kho hàng thực tế
              alt="Cơ sở vật chất Đất Đồng Vàng"
              className="w-full h-auto rounded-lg shadow-md border border-gray-200"
            />
          </motion.div>
        </div>
      </motion.section>
    
  );
};

export default IntroduceSection;
