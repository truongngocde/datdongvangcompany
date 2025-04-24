import React, { useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";

export default function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/news-posts");
        const publishedNews = res.data
          .filter((post) => post.is_published)
          .slice(-4) // 👈 chỉ lấy 4 bài cuối cùng
          .reverse(); // 👈 để bài mới nhất lên đầu
        setNews(publishedNews);
      } catch (err) {
        console.error("Lỗi khi lấy tin tức:", err);
      }
    };

    fetchNews();
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
              <motion.img
                src={`http://localhost:8000/${featured.thumbnail}`}
                alt={featured.title}
                className="rounded-xl w-full h-full object-cover"
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              />

              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  {featured.title}
                </h3>
                <p className="text-gray-600 mb-6 text-xl">{featured.summary}</p>
                <button className="bg-green-800 text-xl text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                  Tìm hiểu thêm →
                </button>
              </motion.div>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {other.map((post, i) => (
            <motion.div
              key={post._id}
              variants={fadeIn("up", 0.2 * (i + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative w-full rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={`http://localhost:8000/${post.thumbnail}`}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 left-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded-md flex items-center">
                <CalendarDays className="w-4 h-4 mr-1" />
                {new Date(post.created_at).toLocaleDateString("vi-VN")}
              </div>
              <div className="bg-green-800 text-white text-xlmfont-semibold px-3 py-2 rounded-b-md w-full overflow-hidden whitespace-nowrap text-ellipsis">
                {post.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
