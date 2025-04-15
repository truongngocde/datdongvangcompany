import scheduleImage from "../assets/stats.webp";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import bgIntroducetion from '../assets/bg-introducetion.png'

const ScheduleSection = () => {
  return (
    <div style={{ background: `url(${bgIntroducetion}) center center / cover no-repeat` }}>
      <motion.section
      id="about"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 "
    >
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600">
          VỀ CHÚNG TÔI
        </motion.p>
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4"
        >
          TẬP ĐOÀN ARIA HOLDINGS
        </motion.h2>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left side - Image */}
        <motion.div variants={fadeIn("right", 0.3)} className="w-full md:w-1/2">
          <motion.img
            variants={fadeIn("up", 0.4)}
            src={scheduleImage}
            alt="Statistics dashboard"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div variants={fadeIn("left", 0.3)} className="w-full md:w-1/2">
          <motion.span
            variants={fadeIn("up", 0.4)}
            className="text-orange-500 font-semibold"
          >
            GIỚI THIỆU
          </motion.span>

          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6"
          >
            ARIA HOLDINGS CORP <br />
            Tập đoàn đa ngành sáng tạo & bền vững
          </motion.h2>

          <motion.p variants={fadeIn("up", 0.6)} className="text-gray-600 mb-8">
            ARIA HOLDINGS CORP là một tập đoàn đa ngành có trụ sở chính tại TP.
            Hồ Chí Minh, được thành lập vào ngày 20 tháng 4 năm 2018. Chúng tôi
            hoạt động trong các lĩnh vực Công nghiệp, Kỹ thuật, Công nghệ, Dịch
            vụ Kinh doanh, Giao dịch, Hàng Tiêu Dùng Nhanh (FMCG) và Chăm sóc
            Sức Khỏe.
            <br />
            <br />
            Với tầm nhìn trở thành tập đoàn dẫn đầu khu vực, ARIA HOLDINGS không
            ngừng đổi mới để mang đến các giải pháp sáng tạo và bền vững, nâng
            cao năng lực cạnh tranh bằng công nghệ hiện đại và chiến lược phát
            triển dài hạn.
          </motion.p>

          <motion.a
            variants={fadeIn("up", 0.7)}
            href="#about"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Tìm hiểu thêm về ARIA
            <motion.svg
              variants={fadeIn("left", 0.8)}
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

export default ScheduleSection;
