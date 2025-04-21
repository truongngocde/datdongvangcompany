import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../ultils/motion";
import { FileText } from "lucide-react";

const shareholderNews = [
  {
    title: "BÁO CÁO TÌNH HÌNH QUẢN TRỊ CÔNG TY NĂM 2024",
    date: "24/01/2025",
  },
  {
    title:
      "GIẢI TRÌNH LỢI NHUẬN SAU THUẾ CHÊNH LỆCH 10% CỦA BCTC QUÝ 4 NĂM 2024 SO VỚI CÙNG KỲ NĂM TRƯỚC",
    date: "24/01/2025",
  },
  {
    title: "BÁO CÁO TÀI CHÍNH RIÊNG QUÝ 4 NĂM 2024",
    date: "24/01/2025",
  },
  {
    title:
      "BÁO CÁO KẾT QUẢ GIAO DỊCH CỔ PHIẾU CỦA NGƯỜI NỘI BỘ - TRẦN KIM CƯƠNG",
    date: "03/01/2025",
  },
  {
    title:
      "GIẢI TRÌNH LỢI NHUẬN SAU THUẾ CỦA BCTC QUÝ 4 NĂM 2024 SO VỚI CÙNG KỲ NĂM TRƯỚC",
    date: "24/01/2025",
  },
  {
    title: "BÁO CÁO TÀI CHÍNH HỢP NHẤT QUÝ 4 NĂM 2024",
    date: "24/01/2025",
  },
  {
    title:
      "NGHỊ QUYẾT HĐQT V/V THÔNG QUA CHỦ TRƯƠNG THỰC HIỆN CÁC HỢP ĐỒNG GIAO DỊCH GIỮA CÔNG TY VỚI NGƯỜI...",
    date: "06/01/2025",
  },
  {
    title: "BÁO CÁO KẾT QUẢ GIAO DỊCH CỔ PHIẾU CỦA NGƯỜI NỘI BỘ - YANG TUẤN AN",
    date: "03/01/2025",
  },
];

export default function NewsPdfSection() {
  const half = Math.ceil(shareholderNews.length / 2);
  const leftColumn = shareholderNews.slice(0, half);
  const rightColumn = shareholderNews.slice(half);

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">TIN CỔ ĐÔNG</h2>
        <div className="w-10 h-1 bg-green-500 mx-auto mb-4 rounded-full"></div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 mb-12"
      >
        {[leftColumn, rightColumn].map((column, colIndex) => (
          <div key={colIndex} className="space-y-6">
            {column.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 hover:bg-gray-100 hover:border-l-4 hover:border-green-500 transition p-4 rounded-xl cursor-pointer"
              >
                <FileText className="text-yellow-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-gray-800 hover:text-green-600 transition">
                    {item.title}
                  </p>
                  <span className="text-gray-400 text-xs mt-1">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <button className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700 transition">
          Tìm hiểu thêm →
        </button>
      </motion.div>
    </section>
  );
}
