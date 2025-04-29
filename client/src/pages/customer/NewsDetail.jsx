import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import bannerService from "../../assets/services/bannerLinhvuchoatdong.jpg";

export default function NewsDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/news-posts/slug/${slug}`);
        setPost(res.data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết bài viết:", error);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) return <p className="text-center py-10 text-gray-500">Đang tải bài viết...</p>;

  return (
    <>
      {/* Banner Header */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={bannerService}
          alt="Banner Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Xây chất lượng – Dựng niềm tin
          </h2>
        </div>
      </div>

      {/* Tiêu đề trang */}
     

      <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Tiêu đề bài viết */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">{post.title}</h1>

      {/* Ảnh thumbnail */}
      {post.thumbnail && (
        <div className="w-full flex justify-center mb-8">
          <img
            src={`http://localhost:8000/${post.thumbnail}`}
            alt="thumbnail"
            className="rounded-xl shadow-md w-full md:w-3/4 max-h-[500px] object-cover"
          />
        </div>
      )}

      {/* Nội dung bài viết */}
      <div
  className="text-lg leading-relaxed text-gray-700 text-justify space-y-6"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>


    </div>
    </>
    
  );
}
