import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import doitacchienluocImage from "../../assets/doitacchienluoc.jpg";
import bgIntroducetion from "../../assets/bg-introducetion.png";

const IntroduceSection = () => {
  return (
    <div
      style={{
        background: `url(${bgIntroducetion}) center center / cover no-repeat`,
      }}
    >
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
            variants={fadeIn("right", 0.3)}
            className="w-full md:w-1/2"
          >
            <motion.img
              variants={fadeIn("up", 0.4)}
              src={doitacchienluocImage} // Thay bằng ảnh nhà xưởng/kho hàng thực tế
              alt="Cơ sở vật chất Đất Đồng Vàng"
              className="w-full h-auto rounded-lg shadow-md border border-gray-200"
            />
          </motion.div>

          {/* Right side - Content */}
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
              ĐỐI TÁC CHIẾN LƯỢC
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6"
            >
              <span className="text-xl">
                Công Ty Đất Đồng Vàng góp phần tạo nên sự thành công, phát triển và
                tạo nên những dịch vụ chất lượng tốt nhất cho Quý khách hàng.
                Với phương châm “
Vững nền móng – Bền niềm tin”, Công ty Đại
                Dương chúng tôi luôn lắng nghe, tận tình tư vấn, chia sẻ kinh
                nghiệm làm việc cùng quý khách hàng. <br /> <br /> Đến với chúng tôi, Quý
                khách hàng sẽ thực sự hài lòng khi nhận được những lời tư vấn
                tận tình nhất của những chuyên gia, kỹ sư và đội ngũ công nhân
                thi công lành nghề, không những mang giá trị thẩm mĩ mà còn đảm
                bảo chất lượng kỹ thuật với giá cả hợp lý nhất.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default IntroduceSection;
