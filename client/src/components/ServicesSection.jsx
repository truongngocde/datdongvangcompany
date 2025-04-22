import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

import feedImg from "../assets/feed.jpg";
import fuelImg from "../assets/fuel.jpg";
import mechanicalImg from "../assets/mechanical.jpg";
import buildingImg from "../assets/building.jpg";

const ServicesSection = () => {
  const services = [
    {
      image: feedImg,
      title: "Thức ăn chăn nuôi",
      description:
        "Cung cấp cám viên, cám đậm đặc, nguyên liệu thô cho heo, gà, cá... Sản xuất theo công thức cân đối dinh dưỡng, sử dụng nguyên liệu nhập khẩu từ Mỹ, Hà Lan, Argentina.",
      link: "#learn-more",
    },
    {
      image: fuelImg,
      title: "Kinh doanh chất đốt",
      description:
        "Phân phối than đá, củi trấu, viên nén gỗ, than tổ ong... phục vụ hộ gia đình, nhà hàng và công nghiệp. Hiệu suất cháy cao, giá ổn định và thân thiện với môi trường.",
      link: "#learn-more",
    },
    {
      image: mechanicalImg,
      title: "Vật tư cơ khí",
      description:
        "Cung cấp bulong, ốc vít, đá cắt mài, ty ren, dụng cụ cơ khí phục vụ nhà xưởng, nhà máy và các công trình công nghiệp.",
      link: "#learn-more",
    },
    {
      image: buildingImg,
      title: "Vật liệu xây dựng",
      description:
        "Phân phối sắt thép (H, I, U, V), xi măng, cát đá, tôn lợp, ống hộp kẽm... Đầy đủ CO/CQ, vận chuyển tận nơi, giá cạnh tranh.",
      link: "#learn-more",
    },
  ];

  return (
    <section  className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        id="services"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeIn("up", 0.3)}
        className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-20"
      >
        {/* LEFT SIDE */}
        <motion.div variants={fadeIn("right", 0.4)} className="md:w-5/12 lg:w-1/2">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Sản phẩm & Dịch vụ của Đất Đồng Vàng
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-lg mb-4"
          >
            Giải pháp công nghệ, đầu tư dự án và phát triển thương hiệu toàn diện – giúp doanh nghiệp phát triển bền vững trong môi trường hiện đại.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            {[
              "Sản xuất & Kinh doanh thức ăn chăn nuôi",
              "Kinh doanh thương mại chất đốt",
              "Kinh doanh vật tư cơ khí",
              "Kinh doanh vật liệu xây dựng (bao gồm sắt thép)",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeIn("right", 0.7 + i * 0.1)}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-600">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - SERVICES GRID */}    
        <motion.div
          variants={fadeIn("left", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-7/12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                variants={fadeIn("down", 0.4 * (index + 1))}
                className="mb-4"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-xl shadow-md"
                />
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
