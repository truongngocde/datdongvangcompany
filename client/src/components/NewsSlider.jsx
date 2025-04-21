import React, { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion"; // Giữ lại animation đã định nghĩa

const mockData = [
  {
    _id: "1",
    title: "Tiến sĩ Nguyễn Thanh Quang tham dự hội nghị khoa học với chủ đề...",
    summary:
      "Tiến sĩ Nguyễn Thanh Quang tham dự hội nghị khoa học với chủ đề: Công nghệ Nhiệt – Lạnh hướng tới phát triển bền vững (TETSD2017).",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    created_at: "2024-11-05T00:00:00Z",
    author: "Amelia Clark",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    _id: "2",
    title:
      "CTCP Đầu tư công nghiệp xuất nhập khẩu Đông Dương (DDG): Thông báo...",
    summary: "Thông báo thay đổi nội dung đăng ký doanh nghiệp.",
    thumbnail: "https://randomuser.me/api/portraits/women/44.jpg",
    created_at: "2024-10-29T00:00:00Z",
    author: "Benjamin Evans",
    authorImage: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    _id: "3",
    title:
      "CTCP Đầu tư công nghiệp xuất nhập khẩu Đông Dương (DDG): Thông báo...",
    summary: "Thông báo thay đổi nội dung đăng ký doanh nghiệp.",
    thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    created_at: "2024-10-29T00:00:00Z",
    author: "Benjamin Evans",
    authorImage: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    _id: "4",
    title:
      "CTCP Đầu tư công nghiệp xuất nhập khẩu Đông Dương (DDG): Thông báo...",
    summary: "Thông báo thay đổi nội dung đăng ký doanh nghiệp.",
    thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    created_at: "2024-10-29T00:00:00Z",
    author: "Benjamin Evans",
    authorImage: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export default function PopularNewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(mockData);
  }, []);

  const featured = news[0];
  const other = news.slice(1);

  return (
    <div className="bg-blue-50 flex items-center justify-center">
      <section className="px-6 py-16 max-w-7xl mx-aut">
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
                src={featured.thumbnail}
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
                src={post.thumbnail}
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
