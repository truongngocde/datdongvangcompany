import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <HiLightBulb className="w-8 h-8 text-yellow-500" />,
      title: "Thức ăn chăn nuôi",
      description:
        "Cung cấp cám viên, cám đậm đặc, nguyên liệu thô cho heo, gà, cá... Sản xuất theo công thức cân đối dinh dưỡng, sử dụng nguyên liệu nhập khẩu từ Mỹ, Hà Lan, Argentina.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-500" />,
      title: "Kinh doanh chất đốt",
      description:
        "Phân phối than đá, củi trấu, viên nén gỗ, than tổ ong... phục vụ hộ gia đình, nhà hàng và công nghiệp. Hiệu suất cháy cao, giá ổn định và thân thiện với môi trường.",
      link: "#learn-more",
    },
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Vật tư cơ khí",
      description:
        "Cung cấp bulong, ốc vít, đá cắt mài, ty ren, dụng cụ cơ khí phục vụ nhà xưởng, nhà máy và các công trình công nghiệp.",
      link: "#learn-more",
    },
    {
      icon: <BsStack className="w-8 h-8 text-green-600" />,
      title: "Vật liệu xây dựng",
      description:
        "Phân phối sắt thép (H, I, U, V), xi măng, cát đá, tôn lợp, ống hộp kẽm... Đầy đủ CO/CQ, vận chuyển tận nơi, giá cạnh tranh.",
      link: "#learn-more",
    },
  ];
  
  return (
    <section
      id="services"
      className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24"
      >
        {/* Header */}
        <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
          >
            Sản phẩm & Dịch vụ của Đất Đồng Vàng
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-lg mb-4 md:w-4/5"
          >
            Giải pháp công nghệ, đầu tư dự án và phát triển thương hiệu toàn
            diện – giúp doanh nghiệp phát triển bền vững trong môi trường hiện
            đại.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            <motion.div
              variants={fadeIn("right", 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Sản xuất & Kinh doanh thức ăn chăn nuôi</span>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Kinh doanh thương mại chất đốt</span>
              
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Kinh doanh vật tư cơ khí</span>
              
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Kinh doanh vật liệu xây dựng (bao gồm sắt thép)</span>
              
            </motion.div>
          </motion.div>
          {/* <motion.button
            variants={fadeIn("up", 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors"
          >
            Tìm hiểu thêm
          </motion.button> */}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                variants={fadeIn("down", 0.4 * (index + 1))}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2"
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-gray-600 mb-4"
              >
                {service.description}
              </motion.p>
              <motion.a
                variants={fadeIn("up", 0.6 * (index + 1))}
                href={service.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                TÌM HIỂU THÊM
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ServicesSection;
