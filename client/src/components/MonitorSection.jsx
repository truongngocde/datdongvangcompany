import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import "swiper/css";
import "swiper/css/navigation";
import monitorCardBg from "../assets/sodocty.png";

const MonitorSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Content */}
        <motion.div variants={fadeIn("right", 0.3)} className="w-full md:w-1/2">
          {/* <motion.span 
            variants={fadeIn('up', 0.4)}
            className="text-emerald-500 font-semibold"
          >
            MONITOR
          </motion.span> */}
          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5"
          >
            SƠ ĐỒ CƠ CẤU TỔ CHỨC
          </motion.h2>
          {/* <motion.div
            variants={fadeIn("right", 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
            </div>
            <span className="text-gray-600">Thực hiện nhiều dự án kỹ thuật, công nghiệp quy mô lớn.</span>
          </motion.div>
          <br /> */}
          {/* <motion.div
            variants={fadeIn("right", 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
            </div>
            <span className="text-gray-600">Cung cấp giải pháp công nghệ cho các tổ chức lớn trong khu vực.</span>
          </motion.div>
          <br />
          <motion.div
            variants={fadeIn("right", 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
            </div>
            <span className="text-gray-600">Phát triển hệ thống phân phối hàng tiêu dùng nhanh rộng khắp.</span>
          </motion.div>
          <br />
          <motion.div
            variants={fadeIn("right", 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
            </div>
            <span className="text-gray-600">Hợp tác với các đối tác lớn trong lĩnh vực chăm sóc sức khỏe.</span>
          </motion.div> */}
          <motion.p
            variants={fadeIn("up", 0.6)}
            className="text-gray-600 mb-8 md:w-4/5"
          >
            Công ty không ngừng nâng cao trình độ nhân sự qua các khóa huấn luyện, đào tạo nội bộ định kỳ và cập nhật kiến thức ngành nghề, kỹ năng mềm.
          </motion.p>
          <motion.a
            variants={fadeIn("up", 0.7)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all mt-10"
          >
            Tìm hiểu thêm
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

        {/* Right side - Swiper with background */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          className="w-full md:w-1/2 relative"
        >
          <motion.div variants={fadeIn("up", 0.4)} className="p-4">
            <motion.img
              variants={fadeIn("up", 0.5)}
              src={monitorCardBg}
              alt="Dashboard statistics"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;
