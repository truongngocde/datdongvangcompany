import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import scheduleImage from "../assets/tamnhin.jpg";
import bgIntroducetion from "../assets/bg-introducetion.png";

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
        <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-amber-600 font-medium"
          >
            VỀ CHÚNG TÔI
          </motion.p>
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl font-bold mb-4 text-gray-800"
          >
            CÔNG TY CỔ PHẦN ĐẤT ĐỒNG VÀNG
          </motion.h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Left side - Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="w-full md:w-1/2"
          >
            <motion.img
              variants={fadeIn("up", 0.4)}
              src={scheduleImage} // Thay bằng ảnh nhà xưởng/kho hàng thực tế
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
              className="text-amber-600 font-semibold"
            >
              TẦM NHÌN - SỨ MỆNH
            </motion.span>

            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4"
            >
              Vững nền móng - Bền niềm tin
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6"
            >
              <span className="font-semibold text-amber-600">
                Công ty Cổ phần Đất Đồng Vàng
              </span>{" "}
              được thành lập ngày 15/12/2022 với trụ sở tại Tân Phú, TP.HCM,
              chuyên cung cấp giải pháp toàn diện trong các lĩnh vực:
            </motion.p>

            <motion.ul variants={fadeIn("up", 0.7)} className="space-y-3 mb-4">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span className="font-medium">Thức ăn chăn nuôi:</span> Cám
                viên, nguyên liệu chất lượng cao cho heo, gà, cá
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span className="font-medium">Chất đốt công nghiệp:</span> Than
                đá, củi trấu, viên nén gỗ
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span className="font-medium">Vật tư cơ khí:</span> Bulong, ốc
                vít, dụng cụ công nghiệp
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span className="font-medium">Vật liệu xây dựng:</span> Sắt
                thép, xi măng, tôn lợp các loại
              </li>
            </motion.ul>

            <motion.p
              variants={fadeIn("up", 0.8)}
              className="text-gray-600 mb-4"
            >
              Với đội ngũ 50+ nhân sự chuyên nghiệp, hệ thống kho bãi rộng
              5,000m² và nguồn lực tài chính vững mạnh (vốn điều lệ 75 tỷ đồng),
              chúng tôi cam kết mang đến sản phẩm chất lượng với dịch vụ tận
              tâm.
            </motion.p>

            <motion.a
              variants={fadeIn("up", 0.9)}
              href="#products"
              className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all hover:text-amber-700"
            >
              Khám phá sản phẩm của chúng tôi
              <motion.svg
                variants={fadeIn("left", 1.0)}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default IntroduceSection;
