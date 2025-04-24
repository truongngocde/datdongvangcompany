import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import giatrcotloiImage from "../../assets/giatricotloi.jpg";


const IntroduceSection = () => {
  return (
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
              GIÁ TRỊ CỐT LÕI
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6"
            >
              <span className="text-xl">
                Trí tuệ, sáng tạo là nền móng vững chắc của Công ty. <br /> Chất lượng
                sản phẩm và dịch vụ quyết định sự tồn tại của doanh nghiệp. <br />
                Nguồn nhân lực là nền tảng để phát triển, Công ty Đại Dương chú
                trọng đầu tư vào nguồn nhân lực, có chính sách tuyển dụng, đào
                tạo và đãi ngộ đối với công nhân viên có trình độ và kinh
                nghiệm, sẵn sàng thu nhận các chuyên gia có nhiều kinh nghiệm,
                có trình độ chuyên môn và trình độ quản lý cao. <br /> Duy trì và nâng
                cao chất lượng hoạt động chăm sóc Khách hàng, tiếp nhận và xử lý
                các thông tin phản hồi từ phía Khách hàng nhằm đảm bảo tốt các
                chế độ hậu mãi, đem lại sự hài lòng và tin tưởng của Khách hàng
                đối với từng dự án, sản phẩm, dịch vụ của Công ty Đất Đồng Vàng.  <br />
                Công Ty Đất Đồng Vàng coi trọng sự hợp tác của các nhà sản xuất, nhà
                cung cấp, các đơn vị dịch vụ đã, đang và sẽ cùng Công ty xây
                dựng nên những dự án chất lượng cao, kiên quyết loại bỏ và không
                để xảy ra các dự án, sản phẩm không đạt yêu cầu về chất lượng.
              </span>
            </motion.p>
          </motion.div>

          {/* Right side - Content */}

          <motion.div
            variants={fadeIn("right", 0.3)}
            className="w-full md:w-1/2"
          >
            <motion.img
              variants={fadeIn("up", 0.4)}
              src={giatrcotloiImage} // Thay bằng ảnh nhà xưởng/kho hàng thực tế
              alt="Cơ sở vật chất Đất Đồng Vàng"
              className="w-full h-auto rounded-lg shadow-md border border-gray-200"
            />
          </motion.div>
        </div>
      </motion.section>
    
  );
};

export default IntroduceSection;
