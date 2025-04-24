import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import scheduleImage from "../../assets/tamnhin.jpg";
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
        <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-amber-600 text-2xl font-medium mb-8"
          >
            VỀ CHÚNG TÔI
          </motion.p>
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
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
            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6"
            >
              <span className="font-semibold text-amber-600 text-2xl">
                Công ty Cổ phần Đất Đồng Vàng
              </span>{" "}
              <span className="text-xl">
                Bằng quyết tâm với tinh thần dám nghĩ dám làm, khả năng tìm tòi
                sáng tạo, mở rộng tìm kiếm thị trường, đầu tư hợp lý thiết bị,
                công nghệ nhằm nâng cao năng lực sản xuất, năng lực cạnh tranh.
                Từ đó, mở ra hướng đi mới cho doanh nghiệp Việt Nam nói chung và
                Công ty Đất Đồng Vàng nói riêng. Thời điểm năm 2018 đánh dấu
                bước tiến lớn lao khi thành lập Công Ty Cổ Phần Đất Đồng Vàng.
                với phương châm: “Vững nền móng – Bền niềm tin”. Chất lượng là
                mục tiêu hàng đầu và là chìa khoá của sự thành công và phát
                triển của Công Ty Cổ Phần Đất Đồng Vàng. Chúng tôi đặt việc xây
                dựng Chính sách chất lượng như là một trong những chiến lược sản
                xuất kinh doanh quan trọng nhất của Công ty, qua việc cung cấp
                và lắp đặt các sản phẩm đảm bảo chất lượng cao, giá cả hợp lý,
                đúng tiến độ và luôn luôn cải tiến, đổi mới trang thiết bị công
                nghệ và không ngừng nâng cao chất lượng sản phẩm nhằm thoả mãn
                nhu cầu của khách hàng.
              </span>
            </motion.p>

            <motion.a
              variants={fadeIn("up", 0.9)}
              href="/about"
              className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all hover:text-amber-700 text-xl"
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
