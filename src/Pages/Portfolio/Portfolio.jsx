import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Facebook, Send, Briefcase,
  ChevronRight, Sparkles, Menu, X, User,
  GraduationCap, Code2, Palette, Terminal, Layers,
  Cpu, Globe, Shield, Rocket, Laptop, Database,
  Cloud, MonitorSmartphone, ExternalLink, Calendar, MapPin,
  Eye, Monitor, Image as ImageIcon, ArrowRight
} from 'lucide-react';
import ProjectDetail from './ProjectDetail';

// --- MOCK DATA FOR PORTFOLIO ---
const MOCK_DATA = {
  portfolio: [
    {
      id: 1,
      title: "AI Smart City Dashboard",
      category: "Web",
      imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      img2: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200",
      description: "A comprehensive dashboard designed for the National Center of AI. Built with React and Tailwind CSS, it features real-time data visualization, automated reporting, and an interactive map of smart city sensors.\n\nKey features include:\n- Real-time IoT sensor integration\n- Predictive traffic analysis using ML\n- Fully responsive admin panel",
      link: "#",
      tags: ["React", "D3.js", "Tailwind", "Node.js"]
    },
    {
      id: 2,
      title: "E-Commerce Experience",
      category: "Web",
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      img2: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
      description: "A luxury lifestyle brand e-commerce platform focusing on high-end animations and seamless checkout flows. Optimized for conversion and mobile usability.",
      link: "#",
      tags: ["Next.js", "Stripe", "Framer Motion"]
    },
    {
      id: 3,
      title: "Fintech App Interface",
      category: "Web",
      imgUrl: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800",
      img2: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
      description: "Clean and minimal fintech dashboard focusing on accessibility and clear information hierarchy. Features dark mode by default.",
      link: "#",
      tags: ["TypeScript", "Chart.js", "Redux"]
    }
  ],
  graphics: [
    { id: 101, title: "Cyberpunk Branding", imgUrl: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=600" },
    { id: 102, title: "Minimalist Logo Set", imgUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600" },
    { id: 103, title: "Social Media Kit", imgUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" },
    { id: 104, title: "Package Design", imgUrl: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=600" }
  ]
};


const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Web");

  return (
    <section id="portfolio" className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-indigo-500"></span>
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Case Studies<span className="text-indigo-500">.</span></h2>
          </div>

          {/* Category Toggle */}
          <div className="flex p-1 bg-slate-900/50 border border-slate-800/50 rounded-2xl w-fit backdrop-blur-sm">
            {[
              { id: "Web", label: "Engineering", icon: <Monitor size={14} /> },
              { id: "Graphic", label: "Visual Art", icon: <ImageIcon size={14} /> }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-500 ${selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-300'
                  }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Web Projects Grid */}
        {selectedCategory === "Web" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_DATA.portfolio.map((item) => (
              <div
                key={item.id}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src={item.imgUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-3 flex gap-2">
                    {item.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[9px] uppercase font-bold tracking-widest text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase mb-4 leading-tight">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    View Project <ArrowRight size={14} className="text-indigo-500" />
                  </div>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <Eye size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Graphic Design Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_DATA.graphics.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900"
              >
                <img
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={item.imgUrl}
                />
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6 text-center">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-2">{item.title}</h4>
                    <span className="text-[10px] text-indigo-100 uppercase tracking-widest border-t border-indigo-200/30 pt-2 block">
                      Graphic Production
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            close={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
