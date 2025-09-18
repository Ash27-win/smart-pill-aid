import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-white">MediSmart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.href.startsWith('/') ? location.pathname === item.href : false;
              
              if (item.href.startsWith('#')) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-white/90 hover:text-white transition-smooth relative group ${
                      isActive ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                      isActive ? 'w-full' : 'w-0'
                    }`}></span>
                  </a>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-white/90 hover:text-white transition-smooth relative group ${
                      isActive ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                      isActive ? 'w-full' : 'w-0'
                    }`}></span>
                  </Link>
                );
              }
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                if (item.href.startsWith('#')) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white/90 hover:text-white transition-smooth py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-white/90 hover:text-white transition-smooth py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
              <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90 mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;