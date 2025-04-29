import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import monitorCardBg from "../../assets/sodocty.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const StructureSection = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div variants={fadeIn("right", 0.3)} className="w-full md:w-1/2">
          <motion.h2
            variants={textVariant(0.4)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5"
          >
            SƠ ĐỒ CƠ CẤU TỔ CHỨC
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-xl mb-8 md:w-4/5 leading-relaxed"
          >
            Công ty không ngừng nâng cao trình độ nhân sự qua các khóa huấn luyện, đào tạo nội bộ định kỳ và cập nhật kiến thức ngành nghề, kỹ năng mềm.
          </motion.p>

          <motion.a
            variants={fadeIn("up", 0.6)}
            href="#"
            className="text-amber-600 text-xl font-semibold flex items-center gap-2 hover:gap-4 transition-all mt-10"
          >
            Tìm hiểu thêm
            <motion.svg
              variants={fadeIn("left", 0.7)}
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

        {/* Right Image */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          className="w-full md:w-1/2 relative"
        >
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="p-4"
          >
            <motion.img
              variants={fadeIn("up", 0.5)}
              src={monitorCardBg}
              alt="Sơ đồ công ty"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StructureSection;
