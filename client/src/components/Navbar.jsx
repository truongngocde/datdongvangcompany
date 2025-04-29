import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiSearch, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../ultils/motion";
import { FaCaretDown } from "react-icons/fa";
import flagViet from "../assets/flagViet.jpg";
import flagEnglish from "../assets/flagEnglish.jpg";
import logoDDV from "../assets/logoDatdongvang.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { href: "/", label: "TRANG CHỦ" },
    { href: "/about", label: "GIỚI THIỆU" },
    {
      label: "LĨNH VỰC HOẠT ĐỘNG",
      href: "/services/kinh-doanh-chat-dot",
      children: [
        {
          label: "Kinh doanh thương mại chất đốt",
          href: "/services/kinh-doanh-chat-dot",
        },
        {
          label: "Kinh doanh và Sản xuất thiết bị Vật tư Lò hơi",
          href: "/services/thiet-bi-vat-tu-lo-hoi",
        },
        {
          label: "Vật tư cơ khí và Năng lượng mặt trời",
          href: "/services/vat-tu-co-khi-nang-luong-mat-troi",
        },
        {
          label: "Sản xuất & Kinh doanh thức ăn chăn nuôi",
          href: "/services/thuc-an-chan-nuoi",
        },
      ],
    },
    {
      href: "/news",
      label: "TIN TỨC",
      children: [
        { label: "Lĩnh vực sản xuất", href: "/news" },
        { label: "Lĩnh vực kinh doanh", href: "/news" },
      ],
    },
    { href: "/contact", label: "LIÊN HỆ" },
  ];
  

  const handleSearch = (e) => {
    e.preventDefault();
    // Xử lý tìm kiếm ở đây
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-30 h-20">
        {/* Logo */}
        <Link to="/">
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center leading-none">
              <div className="flex items-center space-x-2">
                <img
                  src={logoDDV}
                  alt="Logo Đất Đồng Vàng"
                  className="h-25 md:h-25 w-auto"
                />
              </div>
            </div>
          </motion.div>
        </Link>
        {/* <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-4 h-4 bg-red-500 rounded-full -ml-2 hover:opacity-75 transition-opacity"
          ></motion.div> */}
        {/* Navigation Links - Desktop */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map((link, index) => {
            const [showDropdown, setShowDropdown] = useState(false);
            const [hideTimeout, setHideTimeout] = useState(null);

            const handleMouseEnter = () => {
              if (hideTimeout) clearTimeout(hideTimeout);
              setShowDropdown(true);
            };

            const handleMouseLeave = () => {
              const timeout = setTimeout(() => {
                setShowDropdown(false);
              }, 200);
              setHideTimeout(timeout);
            };

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div variants={fadeIn("down", 0.1 * (index + 1))}>
                  <Link
                    to={link.href || "#"}
                    onClick={() => setActiveLink(link.href || "")}
                    className={`text-xm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-800 after:transition-all
              ${
                activeLink === link.href
                  ? "text-green-800 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }`}
                  >
                    <span className="flex items-center gap-1">
                      {link.label}
                      {link.children && (
                        <FaCaretDown className="text-xs mt-[1px]" />
                      )}
                    </span>
                  </Link>
                </motion.div>

                {link.children && showDropdown && (
                  <ul className="absolute top-full left-0 mt-1 w-max bg-white border border-gray-200 shadow-lg rounded-md py-2 px-2 z-50">
                    {link.children.map((subLink, i) => (
                      <li
                        key={i}
                        className="whitespace-nowrap px-4 py-2 hover:bg-green-800 hover:text-white text-sm rounded-md transition-all cursor-pointer"
                      >
                        <Link to={subLink.href}>{subLink.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </motion.div>
        {/* Right Side - Search and CTA */}
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <motion.button
            variants={fadeIn("left", 0.3)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          >
            <HiSearch className="h-8 w-8" />
          </motion.button>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageChange("vi")}
              className="w-10 h-8 cursor-pointer rounded overflow-hidden shadow-md border border-gray-200"
            >
              <img
                src={flagViet}
                alt="Tiếng Việt"
                className="w-full h-full object-cover"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageChange("en")}
              className="w-10 h-8 cursor-pointer rounded overflow-hidden shadow-md border border-gray-200"
            >
              <img
                src={flagEnglish}
                alt="English"
                className="w-full h-full object-cover"
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={fadeIn("left", 0.3)}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </motion.button>
          {/* Search Modal */}
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center min-h-screen"
              onClick={() => setIsSearchOpen(false)}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Tìm kiếm</h3>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <HiOutlineX className="h-6 w-6" />
                  </button>
                </div>
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Bạn đang tìm kiếm điều gì?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-3 text-gray-500 hover:text-blue-600"
                    >
                      <HiSearch className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div
            variants={fadeIn("down", 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn("right", 0.1 * (index + 1))}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2
                  ${
                    activeLink === link.href
                      ? "text-green-800"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              variants={fadeIn("up", 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-green-800 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
            >
              Tìm hiểu thêm
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
