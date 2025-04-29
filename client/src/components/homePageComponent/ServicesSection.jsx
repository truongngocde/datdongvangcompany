import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn, textVariant } from "../../ultils/motion";

import feedImg from "../../assets/feed.jpg";
import fuelImg from "../../assets/fuel.jpg";
import mechanicalImg from "../../assets/mechanical.jpg";
import buildingImg from "../../assets/building.jpg";

const ServicesSection = () => {
  const services = [
    {
      image: fuelImg,
      title: "Kinh doanh thương mại chất đốt",
      slug: "kinh-doanh-chat-dot", // thêm slug
      description:
        "Phân phối than đá, củi trấu, viên nén gỗ, than tổ ong... phục vụ hộ gia đình, nhà hàng và công nghiệp.",
    },
    {
      image: mechanicalImg,
      title: "Vật tư cơ khí và Năng lượng mặt trời",
      slug: "vat-tu-co-khi-nang-luong-mat-troi",
      description:
        "Cung cấp bulong, ốc vít, đá cắt mài, ty ren, dụng cụ cơ khí phục vụ nhà xưởng, nhà máy và các công trình công nghiệp.",
    },
    {
      image: buildingImg,
      title: "Kinh doanh và Sản xuất thiết bị Vật tư Lò hơi",
      slug: "thiet-bi-vat-tu-lo-hoi",
      description:
        "Phân phối sắt thép (H, I, U, V), xi măng, cát đá, tôn lợp, ống hộp kẽm... Đầy đủ CO/CQ, vận chuyển tận nơi, giá cạnh tranh.",
    },
    {
      image: feedImg,
      title: "Sản xuất và Kinh doanh thức ăn chăn nuôi",
      slug: "thuc-an-chan-nuoi",
      description:
        "Cung cấp cám viên, cám đậm đặc, nguyên liệu thô cho heo, gà, cá... Sản xuất theo công thức cân đối dinh dưỡng.",
    },
  ];

  return (
    <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        id="services"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeIn("up", 0.3)}
        className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-20"
      >
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          className="md:w-5/12 lg:w-1/2"
        >
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Sản phẩm & Dịch vụ của Đất Đồng Vàng
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-xl mb-4"
          >
            Giải pháp công nghệ, đầu tư dự án và phát triển thương hiệu toàn
            diện – giúp doanh nghiệp phát triển bền vững trong môi trường hiện
            đại.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn("right", 0.7 + i * 0.1)}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-800"></div>
                </div>
                <span className="text-gray-600 text-xl">{service.title}</span>
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
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="bg-white cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 block"
            >
              <motion.div
                variants={fadeIn("up", 0.3 * (index + 1))}
                whileHover={{ scale: 1.05 }}
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
                <motion.div variants={fadeIn("up", 0.6 * (index + 1))}>
                  <span className="text-amber-600 font-medium hover:text-yellow-600 transition-colors">
                    TÌM HIỂU THÊM
                  </span>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
