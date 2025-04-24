import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import nguonnhanlucImage from "../../assets/nguonnhanluc.jpg";
import bgIntroducetion from "../../assets/bg-introducetion.png";

const IntroduceSection = () => {
  return (
    <div
      style={{
        background: `url(${bgIntroducetion}) center center / cover no-repeat`,
      }}
    >
      <motion.section
        id="about"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto px-4 py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Left side - Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="w-full md:w-1/2"
          >
            <motion.img
              variants={fadeIn("up", 0.4)}
              src={nguonnhanlucImage} // Thay bằng ảnh nhà xưởng/kho hàng thực tế
              alt="Cơ sở vật chất Đất Đồng Vàng"
              className="w-full h-auto rounded-lg shadow-md border border-gray-200"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="w-full md:w-1/2"
          >
            <motion.span
              variants={fadeIn("up", 0.4)}
              className="text-amber-600 font-semibold text-xl"
            >
              CÔNG TY CỔ PHẦN ĐẤT ĐỒNG VÀNG
            </motion.span>

            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:text-4xl font-bold text-green-800 mt-6 mb-6"
            >
              NGUỒN NHÂN LỰC
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6"
            >
              <span className="text-xl font-semibold">
                Nguồn nhân lực là yếu tố tạo nên sức mạnh của Công Ty Đất Đồng
                Vàng với: <br />
              </span>{" "}
              <span className="text-xl">
                – Ban giám đốc và đội ngủ quản lý là những chuyên gia, kĩ sư có
                nhiều năm kinh nghiệm và có tâm huyết với nghề. <br /> – Đội ngủ
                nhân viên trẻ, năng động, sáng tạo, có trình độ chuyên môn cao.
                Đội ngủ nhân viên không ngừng trưởng thành, nhiều kinh nghiệm,
                bản lĩnh để đáp ứng mọi yêu cầu thử thách của các khách hàng khó
                tính nhất. <br />
                – Công Ty Đại Dương luôn chú trọng vào việc phát triển nguồn
                nhân lực, tạo môi trường làm việc thân thiện, chia sẻ và tôn
                trọng giá trị bản thân. Mỗi bản thân đều được phát huy đầy đủ
                những năng lực sẵn có của mình, phát triển thêm chuyên môn qua
                những khóa huấn luyện kỹ thuật chuyên môn, kỹ năng quản lý từ
                ban giám đốc. Nhân viên được đóng góp và được chia sẽ lợi ích từ
                sự phát triển của doanh nghiệp. <br />– Nâng cao đời sống văn
                hóa, tinh thần, cải thiện thu nhập cho người lao động luôn được
                Công Ty Đại Dương xem là vấn đề then chốt để phát triển nguồn
                nhân lực của công ty.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default IntroduceSection;
