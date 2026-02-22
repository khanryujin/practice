/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Menu,
  X,
  Droplets
} from 'lucide-react';

const SERVICES = [
  {
    title: "Interior Deep Clean",
    price: "From $149",
    description: "Steam cleaning, leather conditioning, and thorough vacuuming of every crevice.",
    icon: <Droplets className="w-6 h-6 text-accent-blue" />,
    features: ["Steam Sanitization", "Stain Removal", "Odor Elimination"]
  },
  {
    title: "Exterior Polish",
    price: "From $199",
    description: "Multi-stage paint correction and high-gloss wax application for a showroom finish.",
    icon: <Sparkles className="w-6 h-6 text-accent-green" />,
    features: ["Clay Bar Treatment", "Hand Wax", "Trim Restoration"]
  },
  {
    title: "Ceramic Coating",
    price: "From $599",
    description: "Long-term hydrophobic protection that keeps your car cleaner for longer.",
    icon: <ShieldCheck className="w-6 h-6 text-accent-blue" />,
    features: ["9H Hardness", "UV Protection", "5-Year Warranty"]
  }
];

const REVIEWS = [
  {
    name: "Michael R.",
    role: "Tesla Model S Owner",
    content: "The best detailing service in LA. My car looks better than the day I picked it up from the showroom.",
    rating: 5
  },
  {
    name: "Sarah L.",
    role: "Porsche 911 Owner",
    content: "Incredible attention to detail. They handled my vintage leather with extreme care. Highly recommend!",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-accent-blue/30">
      {/* Vibrant Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-green/10 blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
          <div className="flex items-center gap-2">
            <Car className="w-8 h-8 text-accent-blue" />
            <span className="text-xl font-bold tracking-tighter">LUXE<span className="text-accent-blue">LA</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">About</a>
            <a href="#gallery" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">Gallery</a>
            <button className="bg-accent-blue hover:bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all active:scale-95">
              Book Now
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden pt-24 px-6"
          >
            <div className="glass rounded-3xl p-8 flex flex-col gap-6">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">About</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Gallery</a>
              <button className="w-full bg-accent-blue py-4 rounded-2xl font-bold text-lg">Book Appointment</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Serving Greater Los Angeles</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-[0.9] mb-6 tracking-tighter">
                THE ART OF <br />
                <span className="text-accent-blue">AUTOMOTIVE</span> <br />
                PERFECTION.
              </h1>
              <p className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed">
                Premium mobile detailing for those who demand excellence. We bring showroom-quality results directly to your doorstep in LA.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-accent-blue hover:text-white transition-all flex items-center gap-2 group">
                  View Services
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="glass px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                  Contact Us
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-accent-green text-accent-green" />)}
                  </div>
                  <p className="text-sm text-text-secondary font-medium">Trusted by 500+ LA car owners</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden glass p-2">
                <img 
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=1000" 
                  alt="Premium Car Detailing" 
                  className="w-full h-full object-cover rounded-[1.5rem]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stat Cards */}
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                    <Clock className="text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">Availability</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-green/20 flex items-center justify-center">
                    <MapPin className="text-accent-green" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Mobile</p>
                    <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">We Come To You</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">PREMIUM PACKAGES</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Tailored solutions for every vehicle. From daily drivers to exotic supercars, we provide the care your investment deserves.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-[2.5rem] flex flex-col h-full relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-accent-blue/10 transition-colors" />
                  
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-accent-blue font-bold text-xl mb-4">{service.price}</p>
                  <p className="text-text-secondary mb-8 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-accent-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-4 rounded-2xl glass font-bold hover:bg-white hover:text-black transition-all">
                    Select Package
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">RECENT WORK</h2>
                <p className="text-text-secondary max-w-md">
                  Take a look at some of the transformations we've achieved for our clients across Los Angeles.
                </p>
              </div>
              <button className="text-accent-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View Full Portfolio <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600"
              ].map((url, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-2xl overflow-hidden glass p-1"
                >
                  <img src={url} alt="Car Detail" className="w-full h-full object-cover rounded-xl" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24 px-6 bg-surface/30">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">WHAT OUR <br /> CLIENTS SAY</h2>
              <div className="space-y-6">
                {REVIEWS.map((review, i) => (
                  <div key={i} className="glass p-8 rounded-3xl">
                    <div className="flex items-center gap-1 mb-4">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent-green text-accent-green" />)}
                    </div>
                    <p className="text-lg italic mb-6 text-text-primary">"{review.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center font-bold text-accent-blue">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-bold">{review.name}</p>
                        <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass p-10 rounded-[3rem] relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-blue/20 rounded-full blur-3xl" />
              <h3 className="text-3xl font-bold mb-8">Ready for a transformation?</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors" placeholder="(310) 555-0123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Vehicle Model</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors" placeholder="e.g. 2023 Porsche 911" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Service Needed</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors appearance-none">
                    <option className="bg-surface">Interior Deep Clean</option>
                    <option className="bg-surface">Exterior Polish</option>
                    <option className="bg-surface">Ceramic Coating</option>
                    <option className="bg-surface">Full Transformation</option>
                  </select>
                </div>
                <button className="w-full bg-accent-blue hover:bg-blue-600 py-5 rounded-2xl font-bold text-lg mt-4 transition-all active:scale-[0.98]">
                  Request Quote
                </button>
                <p className="text-center text-xs text-text-secondary mt-4">
                  We'll get back to you within 2 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Car className="w-8 h-8 text-accent-blue" />
              <span className="text-2xl font-bold tracking-tighter">LUXE<span className="text-accent-blue">LA</span></span>
            </div>
            <p className="text-text-secondary max-w-sm mb-8">
              Los Angeles' premier mobile detailing service. We bring the showroom to you with professional equipment and eco-friendly products.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-accent-blue transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-accent-blue transition-colors cursor-pointer">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-text-secondary hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-secondary">Hours</h4>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>8am - 8pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>9am - 6pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>© 2024 Luxe Detailing LA. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
