"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Users, FileText, BarChart2, Database } from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Users", href: "/dashboard/users" },
  { icon: FileText, label: "Content", href: "/dashboard/content" },
  { icon: BarChart2, label: "Engagement", href: "/dashboard/engagement" },
  { icon: Database, label: "Blockchain", href: "/dashboard/blockchain" },
];

const DashboardNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-white shadow-md p-4 mb-6 rounded-lg">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
              pathname === item.href
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <item.icon size={24} />
            <span className="text-xs mt-1">{item.label}</span>
          </motion.div>
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav;
