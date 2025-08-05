import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ExternalLink,
  ShoppingCart,
  Users,
  CheckSquare,
  Send,
  Menu,
  User,
  Code,
  Server,
  Settings
} from "lucide-react";

// Animated particles component
const AnimatedParticles = () => {
  const particles = [
    { top: "10%", left: "20%", size: 4, delay: 0 },
    { top: "20%", left: "80%", size: 6, delay: 2 },
    { top: "60%", left: "10%", size: 3, delay: 4 },
    { top: "80%", left: "70%", size: 5, delay: 1 },
    { top: "40%", left: "60%", size: 4, delay: 3 },
  ];

  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="particle"
          style={{
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </>
  );
};

// Navigation component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="text-xl font-bold text-blue-400"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            ELM
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-blue-400 transition-colors duration-300 capitalize"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {section}
              </motion.button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero section component
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-bg overflow-hidden">
      <AnimatedParticles />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm <span className="text-blue-400">Eric Lombo Mwakio</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Passionate Full Stack Developer specializing in responsive dashboards with real-time data visualizations
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold"
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
};

// About section component
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-lg text-slate-300 mb-6">
              I'm a passionate Full Stack Developer specializing in React.js, Next.js, and modern web technologies. 
              I excel at creating responsive dashboards with real-time data visualizations, focusing on user experience 
              and accessibility. My expertise spans both frontend and backend development.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              With a Bachelor's in Software Engineering from USIU and Full Stack certification from Zindua School, 
              I combine technical skills with creative problem-solving. I'm currently expanding my expertise in 
              Flutter for cross-platform development and actively learning Angular and Vue.js.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                Kenya
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2">
                <User className="h-4 w-4 text-blue-400" />
                Available for hire
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2">
                <Code className="h-4 w-4" />
                Learning Flutter
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2">
                <Settings className="h-4 w-4" />
                Video Editing
              </Badge>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                  <User className="h-24 w-24 text-slate-600" />
                </div>
              </div>
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills section component
const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      gradient: "from-blue-400 to-blue-600",
      skills: [
        { name: "React.js / Next.js", level: 95 },
        { name: "JavaScript", level: 93 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 / CSS3", level: 92 },
      ],
    },
    {
      title: "Backend & Database",
      icon: Server,
      gradient: "from-green-400 to-green-600",
      skills: [
        { name: "Supabase", level: 88 },
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 87 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Settings,
      gradient: "from-purple-400 to-purple-600",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "Chart.js / D3.js", level: 82 },
        { name: "AWS", level: 78 },
        { name: "VS Code", level: 93 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Skills & Technologies</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            >
              <Card className="glass-effect rounded-2xl card-hover border-slate-700">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-slate-300">{skill.name}</span>
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <motion.div 
                            className="bg-blue-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 + 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects section component
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Dynamic Dashboard Application",
      description: "Built a role-based, responsive dashboard using React.js and Tailwind CSS with real-time data visualizations using Chart.js and D3.js.",
      icon: Users,
      gradient: "from-blue-500 to-purple-600",
      tags: ["React.js", "Chart.js", "D3.js", "RESTful APIs"],
    },
    {
      title: "E-commerce Website",
      description: "Designed and developed a fully responsive e-commerce platform with secure user authentication, payment gateways, and SEO optimization.",
      icon: ShoppingCart,
      gradient: "from-green-500 to-teal-600",
      tags: ["Next.js", "Firebase", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "Created a personal portfolio showcasing software development projects and video editing work with intuitive UI and mobile responsiveness.",
      icon: Code,
      gradient: "from-orange-500 to-red-600",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Projects</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            >
              <Card className="glass-effect rounded-2xl overflow-hidden card-hover border-slate-700">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="link" className="text-slate-400 hover:text-slate-300 p-0">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Contact section component
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-slate-300">ericlombo1999@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-slate-300">Available on request</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-slate-300">Kenya</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ericlombo/", bg: "hover:bg-blue-600" },
                  { icon: Github, href: "https://github.com/ericlombo", bg: "hover:bg-gray-700" },
                  { icon: Twitter, href: "#", bg: "hover:bg-blue-500" },
                  { icon: Instagram, href: "#", bg: "hover:bg-red-600" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-slate-800 ${social.bg} rounded-lg flex items-center justify-center transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold"
              >
                Send Message
                <Send className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-400">
            © 2024 Alex Johnson. All rights reserved. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Home component
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
