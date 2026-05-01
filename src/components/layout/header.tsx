"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

interface HeaderProps {
  intent: "talent" | "company";
  setIntent: (intent: "talent" | "company") => void;
}

export function Header({ intent, setIntent }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIntentSwitch = () => {
    const newIntent = intent === "talent" ? "company" : "talent";
    setIntent(newIntent);
    if (pathname !== "/") {
      router.push("/");
    }
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { 
      name: intent === "talent" ? "For Companies" : "For Talent", 
      href: "#",
      onClick: handleIntentSwitch
    },
    // { name: "Sign In", href: "/login" },

    { name: "Security", href: "/security" },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <img src="/logo.png" alt="Kairos Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold dark:text-white">Kairos<span className="text-[#C2185B]">.</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.onClick ? (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link 
              href="/login" 
              className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              Sign In
            </Link>
            <button className="bg-[#C2185B] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#A3154D] transition-colors cursor-pointer">
              {intent === "talent" ? "Join as Talent" : "Start Hiring"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black transition-all duration-300 ease-in-out overflow-hidden border-b border-zinc-100 dark:border-zinc-800",
        isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            link.onClick ? (
              <button
                key={link.name}
                onClick={() => {
                  link.onClick?.();
                  setIsMenuOpen(false);
                }}
                className="text-left text-sm font-medium text-gray-600 dark:text-gray-400 py-2"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-sm font-medium text-gray-600 dark:text-gray-400 py-2"
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="flex flex-col gap-4 pt-4">
            <Link href="/login" className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Sign In
            </Link>
            <Link href="/signup" className="bg-[#C2185B] text-white px-5 py-3 rounded-full text-sm font-medium text-center">
              {intent === "talent" ? "Join as Talent" : "Start Hiring"}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
