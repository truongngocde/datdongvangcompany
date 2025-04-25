import React from 'react'
import bannerImage from "../../assets/banner2.jpg"; // Đường dẫn đúng của bạn

function Services() {
  return (
   


    <div
      className="w-full h-[400px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Lớp phủ mờ nếu muốn thêm hiệu ứng tối nền */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Text nằm chính giữa */}
      <h1 className="relative text-white text-3xl md:text-5xl font-bold text-center px-4">
        Xây chất lượng – Dựng niềm tin
      </h1>
    </div>




  )
}

export default Services