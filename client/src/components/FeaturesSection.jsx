import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import bgTnSm from "../assets/bgTnSm.png";

const FeaturesSection = () => {
  const features = [
    // {
    //   icon: "🎯",
    //   title: "Tầm nhìn",
    //   description:
    //     "Trở thành tập đoàn dẫn đầu trong cung cấp giải pháp sáng tạo & bền vững cho khu vực.",
    // },
    {
      icon: "💡",
      title: "Nguồn nhân lực",
      description:
        "Với hơn 50 nhân sự. Đội ngũ lãnh đạo giàu kinh nghiệm, bộ phận kinh doanh – kế toán nhanh nhạy và chuyên môn tốt, bộ phận kỹ thuật – sản xuất – kho vận tận tâm và trách nhiệm cao, cùng nhân sự hành chính chuyên nghiệp. Công ty luôn chú trọng nâng cao trình độ nhân lực qua các khóa huấn luyện và đào tạo định kỳ để đảm bảo đội ngũ luôn sẵn sàng đón nhận những thách thức mới.",
    },
    {
      icon: "🌟",
      title: "Nguồn lực vật chất",
      description: "Công ty sở hữu cơ sở vật chất hiện đại với nhà xưởng sản xuất trang bị dây chuyền phối trộn và đóng gói năng suất cao, kho hàng rộng lớn cùng đội xe tải phục vụ giao hàng liên tỉnh. Hệ thống quản lý và phần mềm kế toán – bán hàng giúp kiểm soát quy trình và giao dịch minh bạch, đồng thời công ty duy trì mạng lưới nhà cung cấp uy tín trong và ngoài nước, đảm bảo nguồn nguyên liệu ổn định.",
    },
  ];

  return (
    <div
      style={{ background: `url(${bgTnSm}) center center / cover no-repeat` }}
    >
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl font-bold mb-4"
          >
            NGUỒN LỰC DOANH NGHIỆP
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600">
  Công ty Cổ phần ĐẤT ĐỒNG VÀNG tự hào sở hữu đội ngũ cán bộ, công nhân viên tâm huyết, chuyên môn cao và giàu kinh nghiệm trong nhiều lĩnh vực như: sản xuất thức ăn chăn nuôi, thương mại hàng hóa, vận hành kho bãi – logistics, kinh doanh vật tư và xây dựng. Chúng tôi không ngừng nâng cao trình độ nhân sự qua các khóa huấn luyện, đào tạo nội bộ định kỳ để đảm bảo đội ngũ luôn sẵn sàng đón nhận các thách thức và cơ hội mới.
</motion.p>

        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              className="flex flex-col items-center p-6"
            >
              {/* <motion.div
                variants={fadeIn("down", 0.4 * (index + 1))}
                className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
                style={{
                  backgroundColor:
                    index === 0
                      ? "#F1EFFD"
                      : index === 1
                      ? "#FFE7E7"
                      : "#FFF3E4",
                }}
              >
                <motion.div
                  variants={fadeIn("up", 0.5 * (index + 1))}
                  className="text-3xl"
                >
                  {feature.icon}
                </motion.div>
              </motion.div> */}
              <motion.h3
                variants={textVariant(0.3)}
                className="text-2xl font-medium mb-3"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.6 * (index + 1))}
                className="text-gray-500 text-center"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up", 0.7)} className="text-center mt-12">
          <motion.button
            variants={fadeIn("up", 0.8)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative"
          >
            Trở thành Đối tác
            <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default FeaturesSection;
