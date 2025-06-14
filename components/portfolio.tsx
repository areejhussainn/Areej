"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  ArrowDown,
  Grid,
  Layers,
  BookOpen,
  Palette,
} from "lucide-react";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Logo Variations",
      image: "images/logos.png",
      tools: ["Illustrator", "Photoshop"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Booklet Page Sample",
      category: "Booklets",
      image: "images/page.png",
      tools: ["InDesign", "Illustrator"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "Logo Design Concepts",
      category: "Logo Variations",
      image: "images/2.jpg",
      tools: ["Illustrator", "Canva"],
      color: "from-violet-500 to-purple-500",
    },
    {
      id: 4,
      title: "Restaurant Menu Design",
      category: "Booklets",
      image: "images/mne-2.png",
      tools: ["Canva", "Illustrator"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 5,
      title: "Social Media Graphics",
      category: "Graphic Works",
      image: "images/4.jpg",
      tools: ["Canva", "Photoshop"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const categories = [
    { name: "All", icon: Grid, count: portfolioItems.length },
    {
      name: "Logo Variations",
      icon: Layers,
      count: portfolioItems.filter(
        (item) => item.category === "Logo Variations"
      ).length,
    },
    {
      name: "Graphic Works",
      icon: Palette,
      count: portfolioItems.filter((item) => item.category === "Graphic Works")
        .length,
    },
    {
      name: "Booklets",
      icon: BookOpen,
      count: portfolioItems.filter((item) => item.category === "Booklets")
        .length,
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
              Areej Hussain
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-700 hover:text-purple-600 transition-all duration-300 hover:scale-105 relative group animate-fade-in font-medium"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-slate-700 hover:text-purple-600 transition-all duration-300 hover:scale-105 relative group animate-fade-in font-medium"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 animate-gradient-shift"></div>
          <div
            className="absolute inset-0 opacity-40 animate-gradient-flow"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.2) 0%, transparent 50%)
              `,
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), 
                radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 10%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
              `,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
        </div>

        {/* 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-shape floating-shape-1 absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-sm"></div>
          <div className="floating-shape floating-shape-2 absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-lg blur-sm"></div>
          <div className="floating-shape floating-shape-3 absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-sm"></div>
          <div className="floating-shape floating-shape-4 absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg blur-sm"></div>

          <div className="absolute top-1/4 left-1/4 w-32 h-32 rotating-3d">
            <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-white/20"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rotating-3d-reverse">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-white/20"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-6 animate-slide-up hero-text-3d">
                Areej Hussain
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 animate-slide-up animation-delay-200"></div>
            </div>
            <div className="overflow-hidden">
              <div className="inline-flex items-center justify-center mb-8 animate-slide-up animation-delay-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                  <div className="relative bg-white/80 backdrop-blur-md border border-white/30 rounded-full px-8 py-3 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                      <span className="text-lg font-medium bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent tracking-wide">
                        Digital Portfolio
                      </span>
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse animation-delay-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-400">
                Showcasing creative visual solutions across branding, digital
                graphics, and print design
              </p>
            </div>
            <div className="flex justify-center animate-slide-up animation-delay-600">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-white border-0 button-3d rounded-lg font-medium"
              >
                Explore Work
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-glow">
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-4 animate-slide-up">
              My Works
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center gap-2 px-4 py-2 rounded-full font-medium ${
                    category.name === selectedCategory
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-white border-2 border-purple-200 text-purple-700 hover:bg-purple-50"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                  <span
                    className={`ml-1 text-xs px-2 py-1 rounded-full ${
                      category.name === selectedCategory
                        ? "bg-white/20 text-white"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-10">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm card-3d rounded-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-90 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-20 transition-all duration-500`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"></div>
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}
                  ></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-medium`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, toolIndex) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 border border-purple-200 text-purple-700 rounded-full hover:bg-purple-50 transition-colors transform hover:scale-105"
                        style={{ animationDelay: `${toolIndex * 50}ms` }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center animate-fade-in">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent animate-slide-up">
                Areej Hussain
              </h3>
              <p className="text-slate-300 animate-slide-up animation-delay-200">
                Digital Portfolio
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2 text-slate-300 hover:text-purple-300 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>areejhwahid@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 hover:text-purple-300 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>+960 9132605</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 hover:text-blue-300 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/areejhussain</span>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 animate-fade-in animation-delay-800">
            <p>&copy; 2024 Areej Hussain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
