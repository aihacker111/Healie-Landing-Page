import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Bot, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      {/* Scroll Progress Indicator */}
      <div 
        className="h-0.5 bg-primary fixed top-0 left-0 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <svg width="30" height="30" viewBox="0 0 300 300" className="text-primary">
                <path 
                  fill="currentColor" 
                  d="M191.5,43.7c-52.5-18.5-110.8,9.4-129.2,62c-1.6,4.7-3,9.6-3.9,14.5c-4.1,21.9-1.3,45.2,9.1,65.2
                  c7.3,14,17.9,25.5,30.4,34.4l2.7,1.9l18.6,51.7l15.9-48.9c8.2,2.3,16.7,3.5,25.4,3.5c4.7,0,9.5-0.3,14.3-1
                  c18.8-2.6,36.3-10.7,50.3-23.3l0,0c14-12.6,24.1-29.4,28.6-48.2C272,102,244,62.2,191.5,43.7z M211.8,180.3L211.8,180.3
                  c-11.1,10-24.9,16.4-40,19.2c-3.8,0.7-7.7,1-11.6,1c-10.3,0-20.2-2.5-29.2-7.2l-6-3.1l-9.7,30l-7.3-20.2l-11.2-7.9
                  c-10.7-7.6-19.3-17.3-25.1-28.4c-8.1-15.5-10.3-33.2-6.9-50.5c0.7-3.9,1.9-7.8,3.1-11.5c14.7-41.8,60.8-63.7,102.6-49.1
                  c41.8,14.7,63.8,60.8,49.1,102.6C217.1,163.5,215.2,172.3,211.8,180.3z"/>
              </svg>
              <span className="font-bold text-xl text-neutral-500">
                <span className="text-primary">healie</span>
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="font-medium text-neutral-500 hover:text-primary transition"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full"
            >
              <a href="#download">Download App</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-500 hover:text-primary transition"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-neutral-200 bg-white"
        >
          <Container className="py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="font-medium text-neutral-500 hover:text-primary transition"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="w-full rounded-full mt-2"
              >
                <a href="#download" onClick={closeMenu}>
                  Download App
                </a>
              </Button>
            </nav>
          </Container>
        </motion.div>
      )}
    </header>
  );
}
