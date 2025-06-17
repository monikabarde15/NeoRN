
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" },
    { name: "Recruitment", href: "/recruitment" },
    { name: "Offers", href: "/offers" },
    { name: "Contact", href: "/contact" }
  ];

  const courses = [
    "🔐 Cyber Security",
    "📊 Data Science & AI", 
    "💻 Full Stack Development",
    "📈 Business Analytics",
    "☁️ Cloud Computing"
  ];

  const support = [
    "💡 Help Center",
    "👩‍🎓 Student Portal",
    "🧭 Career Guidance", 
    "🛠️ Technical Support",
    "🎯 Placement Assistance"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                🔻 NeORN
              </h3>
              <p className="text-gray-400 text-sm">Learn • Hire • Grow</p>
              <p className="text-gray-400 text-sm">In collaboration with ORN-AI (ISO 9001:2015 Certified)</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              We turn skills into careers with globally trusted training.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 7306212260 (Mon–Fri | 9 AM–6 PM)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>info@neorn.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>4-2-74 Bapatla chilroad centre, near new Bus Stop</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">🔗 Quick Access</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <Link to="/courses" className="block text-blue-400 hover:text-blue-300 transition-colors">
                🎯 Get Started
              </Link>
              <Link to="/contact" className="block text-purple-400 hover:text-purple-300 transition-colors">
                Talk to a Career Expert
              </Link>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">📘 Popular Learning Tracks</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link 
                    to="/courses" 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">🎓 Support for Every Step</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Certification Badge */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-sm text-gray-300 mb-2">✅ Powered by ORN-AI</div>
              <div className="text-yellow-400 font-semibold">ISO 9001:2015 Certified</div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-300">
            <span>© 2024 NeORN – Made with</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>to turn your potential into a profession.</span>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Cookie Policy
            </Link>
            <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-8 p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-700/30">
          <p className="text-blue-300 mb-2">One click can change your career. Ready?</p>
          <Link to="/courses" className="text-blue-400 hover:text-blue-300 font-semibold">
            👉 Get Started
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
