import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-white pb-20">
      {/* Tiêu đề LIÊN HỆ */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={textVariant(0.2)}
        className="pt-20 pb-12 text-center"
      >
        <h1 className="text-5xl font-bold text-gray-800">LIÊN HỆ</h1>
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="h-1 w-20 bg-green-600 mx-auto mt-4 rounded-full"
        ></motion.div>
      </motion.div>

      {/* Phần nội dung chính */}
      <section className="w-full min-h-fit pb-16 px-4 md:px-12 lg:px-24 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Image & Title */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative bg-green-100 flex flex-col justify-center items-center p-8 lg:p-12"
          >
            <motion.h2 
              variants={textVariant(0.4)}
              className="text-3xl font-bold text-green-800 mb-4 text-center"
            >
              Liên hệ với chúng tôi
            </motion.h2>
            <motion.p 
              variants={textVariant(0.6)}
              className="text-gray-700 text-center"
            >
              Chúng tôi luôn sẵn sàng lắng nghe bạn. Hãy để lại thông tin, đội
              ngũ của chúng tôi sẽ liên hệ sớm nhất.
            </motion.p>
            <motion.img
              variants={fadeIn("up", 0.8)}
              src="/contact-illustration.svg"
              alt="Contact Illustration"
              className="mt-6 w-3/4 lg:w-full max-h-72 object-contain"
            />
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 space-y-6"
          >
            <motion.form 
              variants={fadeIn("up", 0.5)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.input
                  variants={fadeIn("right", 0.6)}
                  type="text"
                  placeholder="Họ và tên"
                  className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <motion.input
                  variants={fadeIn("left", 0.6)}
                  type="email"
                  placeholder="Email"
                  className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <motion.input
                variants={fadeIn("up", 0.7)}
                type="tel"
                placeholder="Số điện thoại"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <motion.textarea
                variants={fadeIn("up", 0.8)}
                placeholder="Nội dung liên hệ..."
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              ></motion.textarea>
              <motion.button
                variants={fadeIn("up", 0.9)}
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Gửi liên hệ
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}