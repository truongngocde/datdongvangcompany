import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../ultils/motion";
import bannerService from "../../assets/services/bannerLinhvuchoatdong.jpg";
import data from "../../data/news.news_posts.json"; // 👈 Lấy từ JSON như NewsPage

export default function NewsDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = data.find((item) => item.slug === slug);
    setPost(foundPost);
    if (foundPost) {
      document.title = `${foundPost.title} | Đất Đồng Vàng`;
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold text-xl">
        Không tìm thấy bài viết.
      </div>
    );
  }

  return (
    <>
      {/* Banner Header */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={bannerService}
          alt="Banner Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            Xây chất lượng – Dựng niềm tin
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          {post.title}
        </h1>

        {post.thumbnail && (
          <div className="w-full flex justify-center mb-8">
            <img
              src={post.thumbnail} // Vì lấy từ JSON, nên dùng path trực tiếp
              alt="thumbnail"
              className="rounded-xl shadow-md w-full md:w-3/4 max-h-[500px] object-cover"
            />
          </div>
        )}

        {/* Nội dung */}
        <div
          className="text-lg leading-relaxed text-gray-700 text-justify space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  );
}
