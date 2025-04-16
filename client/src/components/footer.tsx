import { Container } from "@/components/ui/container";
import { Link } from "wouter";
import { Bot } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-400 py-12">
      <Container>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
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
              <span className="font-bold text-xl"><span className="text-primary">healie</span></span>
            </div>
            <p className="mb-4">
              Your personal AI healthcare assistant for 24/7 support and guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition">Press</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition">Community</a></li>
              <li><a href="#" className="hover:text-primary transition">Developers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">HIPAA Compliance</a></li>
            </ul>
          </div>
        </motion.div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} healie. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
