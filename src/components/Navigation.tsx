"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "홈",
    href: "/",
  },
  {
    title: "고객 관리",
    href: "/customer",
    children: [
      {
        title: "고객 목록",
        href: "/customer/list",
      },
      {
        title: "신규 고객 등록",
        href: "/customer/register",
      },
      {
        title: "고객 분석",
        href: "/customer/analysis",
      },
    ],
  },
  {
    title: "제품 관리",
    href: "/product",
    children: [
      {
        title: "제품 목록",
        href: "/product/list",
      },
      {
        title: "신규 제품 등록",
        href: "/product/register",
      },
      {
        title: "재고 관리",
        href: "/product/inventory",
      },
    ],
  },
  {
    title: "설정",
    href: "/settings",
    children: [
      {
        title: "계정 설정",
        href: "/settings/account",
      },
      {
        title: "메일링 설정",
        href: "/settings/mailing",
      },
      {
        title: "보안 설정",
        href: "/settings/security",
      },
    ],
  },
];

const NavItemComponent = ({ item }: { item: NavItem }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === item.href;
  const hasChildren = !!item.children?.length;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <li className="relative">
      <div className="flex items-center">
        <Link
          href={item.href}
          className={`px-4 py-2 rounded-md transition-colors text-sm flex-1 ${
            isActive
              ? "bg-blue-100 text-blue-700 font-medium"
              : "hover:bg-gray-100"
          }`}
          tabIndex={0}
          aria-label={item.title}
        >
          {item.title}
        </Link>
        {hasChildren && (
          <button
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-expanded={isOpen}
            aria-label={`${item.title} 하위 메뉴 ${isOpen ? "접기" : "펼치기"}`}
            tabIndex={0}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
      {hasChildren && isOpen && (
        <ul className="ml-4 mt-1 border-l-2 border-gray-200 pl-4 space-y-1">
          {item.children?.map((child) => (
            <NavItemComponent key={child.href} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export function Navigation() {
  return (
    <nav className="w-64 bg-white border-r h-screen p-4">
      <div className="font-bold text-lg mb-6">데모 대시보드</div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <NavItemComponent key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
}
