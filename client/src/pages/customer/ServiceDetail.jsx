import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import services from "../../data/servicesData.json";
import bannerService from "../../assets/services/bannerLinhvuchoatdong.jpg";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Đất Đồng Vàng`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Không tìm thấy ngành nghề.
      </div>
    );
  }

  return (
    <>
      {/* Banner Header */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={bannerService}
          alt="Banner Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Xây chất lượng – Dựng niềm tin
          </h2>
        </div>
      </div>

      {/* Tiêu đề trang */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={textVariant(0.2)}
        className="pt-20 text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-green-800">
          LĨNH VỰC HOẠT ĐỘNG
        </h1>
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="h-1 w-20 bg-yellow-600 mx-auto mt-4 rounded-full"
        ></motion.div>
      </motion.div>

      <div className="py-8 text-center">
        <h1 className="text-green-700 text-3xl md:text-4xl font-bold">
          {service.title}
        </h1>
      </div>

      {/* Nội dung chi tiết */}
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
  {service.contentBlocks.map((block, index) => {
    if (block.type === "text") {
      return (
        <div key={index} className="space-y-4">
          {block.content.split("\n").map((paragraph, idx) => {
            // Nếu đoạn có ít hơn 20-25 chữ, khả năng cao là tiêu đề => cho bold
            const isTitle = paragraph.length > 0 && paragraph.length <= 50; // Bạn có thể chỉnh con số này
            return (
              <motion.p
                key={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn("up", 0.2 + (index + idx) * 0.05)}
                className={`text-lg leading-relaxed text-gray-700 text-justify ${isTitle ? "font-bold" : ""}`}
              >
                {paragraph}
              </motion.p>
            );
          })}
        </div>
      );
    }
    if (block.type === "image" && block.url) {
      return (
        <motion.img
          key={index}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.3 + index * 0.1)}
          src={block.url}
          alt={block.alt}
          className="w-full rounded-lg shadow-md"
        />
      );
    }
    return null;
  })}
</div>

    </>
  );
};

export default ServiceDetail;
