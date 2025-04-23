import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/news-posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu bài viết:', error);
      });
  }, []);

  return (
    <div className="p-4 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📢 Danh sách bài viết</h1>

      {posts.map(post => (
        <div key={post._id} className="border rounded-lg p-4 shadow-sm bg-white space-y-3">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">👤 Tác giả: {post.author.name}</p>
          <p className="text-gray-500 italic">📂 Danh mục: {post.category_id.name}</p>
          <img
            src={`http://localhost:8000/${post.thumbnail}`}
            alt="Thumbnail"
            className="w-full max-w-md mt-2 rounded-lg"
          />
          <p className="text-gray-700 mt-2">{post.summary}</p>
          <p className="text-gray-800">{post.content}</p>

          {post.pdf_file && (
            <a
              href={`http://localhost:8000/${post.pdf_file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              📄 Xem file PDF đính kèm
            </a>
          )}

          <div>
            <strong>🖼 Hình ảnh bổ sung:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {post.images.map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:8000/${img}`}
                  alt={`Ảnh ${index + 1}`}
                  className="w-24 h-24 object-cover rounded"
                />
              ))}
            </div>
          </div>

          <div className="mt-2">
            <strong>🏷 Thẻ:</strong> {post.tags.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsPosts;
