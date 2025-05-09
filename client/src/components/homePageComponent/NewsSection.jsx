import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import data from "../../data/news.news_posts.json"; // 👈 Lấy dữ liệu từ file JSON

export default function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      const publishedNews = data
        .filter((post) => post.is_published)
        .slice(-4) // 👈 Lấy 4 bài mới nhất
        .reverse(); // 👈 Mới nhất lên đầu
      setNews(publishedNews);
    } catch (err) {
      console.error("Lỗi khi xử lý dữ liệu tin tức:", err);
    }
  }, []);

  const featured = news[0];
  const other = news.slice(1);

  return (
    <div id="news" className="bg-blue-50 flex items-center justify-center">
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <motion.h2
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
        >
          TIN TỨC <span className="text-green-800">MỚI NHẤT</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mb-8 items-center">
          {featured && (
            <>
              <Link
                to={`/news/${featured.slug}`}
                className="block w-full h-full"
              >
                <motion.img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="rounded-xl w-full h-full object-cover"
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                />
              </Link>

              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Link to={`/news/${featured.slug}`} className="block">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                    {featured.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-xl">
                    {featured.summary}
                  </p>
                  <div className="bg-green-800 text-xl text-white px-6 py-2 rounded-md inline-block hover:bg-green-700 transition">
                    Tìm hiểu thêm →
                  </div>
                </Link>
              </motion.div>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {other.map((post, i) => (
            <Link to={`/news/${post.slug}`} key={post._id || post.id || i}>
              <motion.div
                variants={fadeIn("up", 0.2 * (i + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 left-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded-md flex items-center">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  {new Date(post.created_at.$date).toLocaleDateString("vi-VN", {
                    timeZone: "UTC",
                  })}
                </div>
                <div className="bg-green-800 text-white text-xl font-semibold px-3 py-2 rounded-b-md w-full overflow-hidden whitespace-nowrap text-ellipsis">
                  {post.title}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
