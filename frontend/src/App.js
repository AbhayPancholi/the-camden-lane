import { useEffect, useRef, useState } from "react";
import "@/App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, MapPin, Phone, Mail, Instagram, Clock, ChevronDown, Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// User provided images
const IMAGES = {
  main: "https://customer-assets.emergentagent.com/job_page-verifier-1/artifacts/kte7w58x_main_img.webp",
  dish1: "https://customer-assets.emergentagent.com/job_page-verifier-1/artifacts/o5tbf8hr_dish1.webp",
  dish3: "https://customer-assets.emergentagent.com/job_page-verifier-1/artifacts/hcjknui6_dish3.webp",
  dish5: "https://customer-assets.emergentagent.com/job_page-verifier-1/artifacts/lf6yymxt_dish5.webp",
  inside1: "https://customer-assets.emergentagent.com/job_page-verifier-1/artifacts/eq4zwpjf_inside_look1.webp",
};

// Menu Items
const menuItems = [
  {
    name: "Mediterranean Bowl",
    description: "A vibrant bowl of saffron rice, fresh greens, guacamole, and seasonal vegetables",
    price: "₹450",
    image: IMAGES.dish1,
    category: "Bowls"
  },
  {
    name: "Signature Latte Art",
    description: "Our barista's special creation with intricate chocolate swirls",
    price: "₹280",
    image: IMAGES.dish3,
    category: "Beverages"
  },
  {
    name: "The Camden Feast",
    description: "Artisan pizza, creamy pasta, french toast & chicken wings - perfect for sharing",
    price: "₹1,250",
    image: IMAGES.dish5,
    category: "Platters"
  },
];

// Gallery Images
const galleryImages = [
  { src: IMAGES.main, alt: "Camden Lane Interior" },
  { src: IMAGES.inside1, alt: "Cozy Corner" },
  { src: IMAGES.dish1, alt: "Mediterranean Bowl" },
  { src: IMAGES.dish3, alt: "Latte Art" },
  { src: IMAGES.dish5, alt: "Food Spread" },
];

// Customer Testimonials
const testimonials = [
  {
    name: "Priya Sharma",
    review: "Absolutely magical place! Felt like I stepped into a cartoon. The food was as amazing as the ambiance. Perfect for Instagram photos!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Rahul Mehta",
    review: "Best cafe experience in Pune! The 2D concept is mind-blowing. The Mediterranean Bowl is a must-try. Will definitely come back!",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Ananya Desai",
    review: "Such a unique concept! My friends and I spent hours here taking photos. The latte art was beautiful and delicious. Highly recommend!",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "Vikram Joshi",
    review: "A hidden gem in Koregaon Park. The illusion of being inside a sketch is surreal. Great coffee, cozy vibes, and friendly staff!",
    rating: 4,
    date: "1 week ago"
  },
];

// Navigation Component
const Navigation = ({ isOpen, setIsOpen }) => {
  const navLinks = ["Home", "About", "Menu", "Gallery", "Contact"];
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="logo-text text-2xl md:text-3xl" data-testid="logo">
              The Camden Lane
            </a>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="nav-link"
                  data-testid={`nav-${link.toLowerCase()}`}
                >
                  {link}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu md:hidden" data-testid="mobile-menu">
          <button
            className="absolute top-6 right-6 p-2 border-2 border-black bg-white"
            onClick={() => setIsOpen(false)}
            data-testid="mobile-menu-close"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-heading text-4xl"
              onClick={() => setIsOpen(false)}
              data-testid={`mobile-nav-${link.toLowerCase()}`}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

// Hero Section
const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const sloganRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 100, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
      
      // Slogan animation
      gsap.fromTo(sloganRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 }
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="home" className="hero-section" ref={heroRef} data-testid="hero-section">
      <div className="hero-bg">
        <img src={IMAGES.main} alt="Camden Lane Interior" />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="relative inline-block p-8 md:p-12 bg-white/80 border-3 border-black" style={{ border: '3px solid black' }}>
          <div className="sketch-corner sketch-corner-tl"></div>
          <div className="sketch-corner sketch-corner-tr"></div>
          <div className="sketch-corner sketch-corner-bl"></div>
          <div className="sketch-corner sketch-corner-br"></div>
          
          <h1 
            ref={titleRef}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4"
            data-testid="hero-title"
          >
            The Camden Lane
          </h1>
          
          <p className="font-accent text-xl md:text-2xl text-gray-600 mb-6">
            ~ 2D Theme Cafe ~
          </p>
          
          <p 
            ref={sloganRef}
            className="font-body text-lg md:text-xl max-w-xl mx-auto text-gray-700 leading-relaxed"
            data-testid="hero-slogan"
          >
            Art you can taste, vibes you can feel.<br/>
            Join us for a one-of-a-kind dining experience!
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="sketch-btn px-8 py-3 text-lg" data-testid="hero-menu-btn">
              View Menu
            </a>
            <a href="#contact" className="sketch-btn sketch-btn-filled px-8 py-3 text-lg" data-testid="hero-contact-btn">
              Visit Us
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-content",
        { y: 80, opacity: 0, rotation: -2 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      gsap.fromTo(".about-image",
        { x: 100, opacity: 0, rotation: 5 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="about" className="section-padding bg-[#F5F2EB]" ref={sectionRef} data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-content">
            <span className="font-accent text-xl text-[#D4A373] uppercase tracking-widest">Our Story</span>
            <h2 className="font-heading text-5xl md:text-7xl font-bold mt-2 mb-6" data-testid="about-title">
              Step Into Art
            </h2>
            <div className="sketch-divider w-24 mb-6"></div>
            <p className="font-body text-lg leading-relaxed text-gray-700 mb-4">
              Welcome to The Camden Lane, where reality meets illustration. Our unique 2D theme café 
              transforms your dining experience into a living, breathing piece of art.
            </p>
            <p className="font-body text-lg leading-relaxed text-gray-700 mb-4">
              Every corner of our space is meticulously designed with hand-drawn illustrations, 
              creating an optical illusion that makes you feel like you've stepped inside a sketch book.
            </p>
            <p className="font-body text-lg leading-relaxed text-gray-700">
              From the walls to the furniture, every element blends seamlessly to create an 
              Instagram-worthy experience that's as delicious as it is visually stunning.
            </p>
            
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <span className="font-heading text-4xl font-bold">2D</span>
                <p className="font-accent text-sm">Theme Design</p>
              </div>
              <div className="w-px h-12 bg-black"></div>
              <div className="text-center">
                <span className="font-heading text-4xl font-bold">100%</span>
                <p className="font-accent text-sm">Instagrammable</p>
              </div>
              <div className="w-px h-12 bg-black"></div>
              <div className="text-center">
                <span className="font-heading text-4xl font-bold">♥</span>
                <p className="font-accent text-sm">Made with Love</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="relative">
              <img 
                src={IMAGES.inside1} 
                alt="Inside Camden Lane" 
                className="sketch-img w-full"
                data-testid="about-image"
              />
              <div className="absolute -bottom-4 -right-4 bg-white border-2 border-black p-4 font-accent text-lg">
                Koregaon Park, Pune
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Menu Section
const MenuSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".menu-title",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
      
      gsap.fromTo(".menu-card",
        { y: 100, opacity: 0, rotation: -3 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".menu-grid",
            start: "top 70%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="menu" className="section-padding" ref={sectionRef} data-testid="menu-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 menu-title">
          <span className="font-accent text-xl text-[#D4A373] uppercase tracking-widest">Signature Dishes</span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold mt-2" data-testid="menu-title">
            Our Menu
          </h2>
          <p className="font-body text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Crafted with love, served with warmth. Every dish is a masterpiece.
          </p>
        </div>
        
        <div className="menu-grid grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="menu-card sketch-card group cursor-pointer"
              data-testid={`menu-item-${index}`}
            >
              <div className="overflow-hidden border-2 border-black mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="font-accent text-sm text-[#D4A373] uppercase">{item.category}</span>
              <h3 className="font-heading text-3xl font-bold mt-1 mb-2">{item.name}</h3>
              <p className="font-body text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl font-bold">{item.price}</span>
                <span className="font-accent text-sm border-b border-black">View Details →</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="sketch-btn px-10 py-4 text-xl" data-testid="full-menu-btn">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".gallery-item",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-container",
            start: "top 70%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="gallery" className="section-padding bg-[#F5F2EB]" ref={sectionRef} data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-xl text-[#D4A373] uppercase tracking-widest">Moments</span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold mt-2" data-testid="gallery-title">
            Gallery
          </h2>
          <p className="font-body text-lg text-gray-600 mt-4">
            Snapshots from our 2D wonderland
          </p>
        </div>
        
        <div className="gallery-container gallery-grid">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="gallery-item border-3 border-black overflow-hidden"
              style={{ border: '3px solid black' }}
              data-testid={`gallery-item-${index}`}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-accent text-lg border-b-2 border-black hover:text-[#D4A373] transition-colors"
            data-testid="instagram-link"
          >
            <Instagram size={20} strokeWidth={1.5} />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-card",
        { y: 60, opacity: 0, rotation: -2 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 70%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="testimonials" className="section-padding" ref={sectionRef} data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-xl text-[#D4A373] uppercase tracking-widest">Reviews</span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold mt-2" data-testid="testimonials-title">
            What People Say
          </h2>
          <p className="font-body text-lg text-gray-600 mt-4">
            Don't just take our word for it
          </p>
        </div>
        
        <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card sketch-card relative"
              data-testid={`testimonial-${index}`}
            >
              <Quote size={32} strokeWidth={1} className="text-[#D4A373] mb-4" />
              
              <p className="font-body text-gray-700 mb-4 leading-relaxed">
                "{testimonial.review}"
              </p>
              
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? "#D4A373" : "none"}
                    stroke={i < testimonial.rating ? "#D4A373" : "#ccc"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              
              <div className="border-t-2 border-black pt-4 mt-4">
                <p className="font-accent text-lg font-semibold">{testimonial.name}</p>
                <p className="font-body text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://maps.app.goo.gl/F81nFauK7NL7JmqW6"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-btn px-8 py-3 text-lg inline-flex items-center gap-2"
            data-testid="google-reviews-btn"
          >
            <Star size={18} strokeWidth={1.5} />
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-info",
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
      
      gsap.fromTo(".contact-map",
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="contact" className="section-padding bg-[#F5F2EB]" ref={sectionRef} data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-xl text-[#D4A373] uppercase tracking-widest">Find Us</span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold mt-2" data-testid="contact-title">
            Visit Us
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="contact-info">
            <div className="sketch-card">
              <h3 className="font-heading text-3xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-accent text-lg font-semibold">Location</h4>
                    <p className="font-body text-gray-600">
                      Koregaon Park, Pune<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-accent text-lg font-semibold">Hours</h4>
                    <p className="font-body text-gray-600">
                      Mon - Sun: 10:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-accent text-lg font-semibold">Phone</h4>
                    <a href="tel:07757942396" className="font-body text-gray-600 hover:text-[#D4A373] transition-colors">
                      07757942396
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-accent text-lg font-semibold">Email</h4>
                    <p className="font-body text-gray-600">hello@thecamdenlane.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="sketch-btn p-3"
                  data-testid="social-instagram"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-map">
            <div className="border-3 border-black overflow-hidden" style={{ border: '3px solid black' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8!2d73.8931!3d18.5362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1000a000001%3A0x1!2sKoregaon%20Park%2C%20Pune!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Camden Lane Location"
                data-testid="google-map"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://maps.app.goo.gl/F81nFauK7NL7JmqW6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sketch-btn inline-block px-6 py-3 text-lg"
                data-testid="directions-btn"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-4xl mb-2">The Camden Lane</h3>
            <p className="font-accent text-gray-400">Art you can taste, vibes you can feel.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#home" className="font-accent hover:text-[#D4A373] transition-colors">Home</a>
            <a href="#about" className="font-accent hover:text-[#D4A373] transition-colors">About</a>
            <a href="#menu" className="font-accent hover:text-[#D4A373] transition-colors">Menu</a>
            <a href="#gallery" className="font-accent hover:text-[#D4A373] transition-colors">Gallery</a>
            <a href="#contact" className="font-accent hover:text-[#D4A373] transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="sketch-divider my-8 opacity-30"></div>
        
        <p className="text-center font-body text-sm text-gray-500">
          © 2025 The Camden Lane. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main App
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);
  
  return (
    <div className="App" data-testid="app-container">
      <Navigation isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
