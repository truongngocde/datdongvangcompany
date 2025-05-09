import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import { Link } from "react-router-dom";
import banner3 from "../../assets/banner3.jpg";
import data from "../../data/news.news_posts.json"; // Giả sử bạn có file data.json chứa dữ liệu bài viết

export default function NewsPage() {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Thay vì gọi API, lấy dữ liệu từ file JSON cục bộ
    setLoading(true);
    try {
      setPosts(data); // Giả sử data là dữ liệu bài viết trong file JSON
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <>
      <div
        className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner3})`, // 👈 Đổi path này thành đúng link ảnh
        }}
      >
        {/* Overlay làm mờ tối */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Nội dung slogan */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-amber-50 text-3xl md:text-5xl font-bold drop-shadow-lg">
            Vững nền móng – Bền niềm tin
          </h1>
          <p className="text-amber-50 mt-4 text-lg md:text-xl drop-shadow">
            Đồng hành cùng phát triển bền vững
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-50 to-white pb-20">
        {/* Tiêu đề TIN TUC */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={textVariant(0.2)}
          className="pt-20 text-center"
        >
          <h1 className="text-5xl font-bold text-green-800">TIN TỨC</h1>
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="h-1 w-20 bg-yellow-600 mx-auto mt-4 rounded-full"
          ></motion.div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
          {loading ? (
            <p className="text-center">Đang tải dữ liệu...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, visibleCount).map((post, index) => (
                <Link
                  to={`/news/${post.slug}`}
                  key={post._id || post.id || index}
                >
                  <motion.div
                    variants={fadeIn("up", index * 0.1)}
                    initial="hidden"
                    animate="show"
                    className="bg-white shadow rounded-2xl overflow-hidden"
                  >
                    <img
                      src={`${post.thumbnail}`} // Thay đổi đường dẫn hình ảnh
                      alt={post.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <span className="inline-block bg-yellow-600 text-white text-sm px-3 py-1 rounded-full mb-2">
                        📅{" "}
                        {new Date(post.created_at.$date).toLocaleDateString(
                          "vi-VN",
                          {
                            timeZone: "UTC",
                          }
                        )}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          {!loading && visibleCount < posts.length && (
            <div className="flex justify-center mt-8">
              <motion.button
                onClick={handleLoadMore}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-colors cursor-pointer"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
              >
                Xem thêm ({posts.length - visibleCount} Bài viết)
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
