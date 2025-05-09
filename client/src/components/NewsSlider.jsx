import React, { useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import axiosClient from "../../api/axiosClient";


export default function PopularNewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axiosClient.get("/api/news-posts");
        const publishedNews = res.data.filter(post => post.is_published);
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
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center mb-12"
        >
          TIN TỨC VỀ{" "}
          <span className="text-green-800">CÔNG TY CỔ PHẦN ĐẤT ĐỒNG VÀNG</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          {featured && (
            <>
              <motion.img
                src={`${import.meta.env.VITE_API_BASE_URL}/${featured.thumbnail}`}
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {featured.title}
                </h3>
                <p className="text-gray-600 mb-6">{featured.summary}</p>
                <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                  Tìm hiểu thêm →
                </button>
              </motion.div>
            </>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {other.map((post, i) => (
            <motion.div
              key={post._id}
              variants={fadeIn("up", 0.2 * (i + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-start gap-5"
            >
              <img
                src={`${import.meta.env.VITE_API_BASE_URL}/${post.thumbnail}`}
                alt={post.title}
                className="w-24 h-24 rounded-md object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="flex items-center text-sm text-gray-500 ml-4">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {new Date(post.created_at).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
