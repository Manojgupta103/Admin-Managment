"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Users, FileText, BarChart2, Database } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Users", href: "/dashboard/users" },
    { icon: FileText, label: "Content", href: "/dashboard/content" },
    { icon: BarChart2, label: "Engagement", href: "/dashboard/engagement" },
    { icon: Database, label: "Blockchain", href: "/dashboard/blockchain" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          ref={sidebarRef}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-purple-700 to-indigo-900 text-white p-4 shadow-lg md:relative md:translate-x-0"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Admin Dashboard</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-purple-600 transition-colors duration-200 md:hidden"
            >
              <X size={24} />
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
                        pathname === item.href
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600"
                      }`}
                    >
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
