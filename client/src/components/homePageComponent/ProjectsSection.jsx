import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../../ultils/motion";
import imgProject1 from '../../assets/project1.jpg'
import imgProject2 from '../../assets/project2.jpg'
import imgProject3 from '../../assets/project3.png'

const projects = [
  {
    title: "Dự án điện Năng lượng mặt trời",
    image: imgProject1,
  },
  {
    title: "Cung cấp điện chiếu sáng quần đảo Trường Sa",
    image: imgProject2
  },
  {
    title: "Hệ thống PV Rooftop hộ gia đình",
    image: imgProject3,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <motion.div
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto text-center"
      >
        <motion.h4
          variants={textVariant(0.2)}
          className="text-yellow-600 font-semibold mb-6 text-xl"
        >
          Công ty Cổ phần Đất Đồng Vàng
        </motion.h4>
        <motion.h2
          variants={textVariant(0.4)}
          className="text-3xl md:text-4xl font-bold text-green-800 mb-20"
        >
          DỰ ÁN TIÊU BIỂU
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.2)}
              className="relative rounded-lg overflow-hidden group shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <button className="border border-white px-4 py-1 rounded hover:bg-white cursor-pointer hover:text-black transition">
                  Xem thêm
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
