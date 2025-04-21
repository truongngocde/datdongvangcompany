import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import bgTnSm from "../assets/bgTnSm.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: "💡",
      title: "Nguồn nhân lực",
      description:
        "Với hơn 50 nhân sự. Đội ngũ lãnh đạo giàu kinh nghiệm, các bộ phận kinh doanh, kỹ thuật, sản xuất và hành chính chuyên nghiệp. Công ty chú trọng đào tạo định kỳ để nâng cao trình độ và sẵn sàng cho mọi thách thức.",
    },
    {
      icon: "🏭",
      title: "Nguồn lực vật chất",
      description:
        "Sở hữu cơ sở vật chất hiện đại với nhà xưởng, dây chuyền tự động và hệ thống logistics mạnh mẽ, cùng phần mềm quản lý minh bạch giúp đảm bảo nguồn lực ổn định và hiệu quả.",
    },
  ];

  return (
    <section
      style={{ background: `url(${bgTnSm}) center center / cover no-repeat` }}
      className="py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.2)}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h2 variants={textVariant(0.2)} className="text-4xl font-bold mb-6">
          NGUỒN LỰC DOANH NGHIỆP
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.3)}
          className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Công ty ĐẤT ĐỒNG VÀNG tự hào sở hữu đội ngũ cán bộ tâm huyết, trình độ cao và hệ thống vật chất hiện đại. Chúng tôi không ngừng hoàn thiện để đón đầu cơ hội và thách thức trong thời đại mới.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.4 + index * 0.2)}
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn("up", 0.8)} className="mt-14">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition"
          >
            Trở thành Đối tác
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
