
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, CheckCircle, Star, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedCourses = () => {
  const courses = [
    {
      category: "Cyber Security",
      title: "Ethical Hacking & Penetration Testing",
      duration: "3 Months",
      price: "₹8,000",
      originalPrice: "₹12,000",
      internship: true,
      students: "150+",
      rating: 4.8,
      description: "Learn how to think like a hacker and protect systems before attackers strike.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: true
    },
    {
      category: "Data Science & AI",
      title: "Machine Learning & Data Analytics",
      duration: "4 Months",
      price: "₹10,000",
      originalPrice: "₹15,000",
      internship: true,
      students: "300+",
      rating: 4.9,
      description: "Master ML algorithms and data insights using Python & real-time datasets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false
    },
    {
      category: "Development",
      title: "Full Stack Web Development",
      duration: "5 Months",
      price: "₹9,500",
      originalPrice: "₹14,000",
      internship: true,
      students: "300+",
      rating: 4.7,
      description: "Frontend to backend—build complete apps with hands-on projects.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false
    },
    {
      category: "Business Analytics",
      title: "Power BI & Advanced Excel",
      duration: "2 Months",
      price: "₹6,000",
      originalPrice: "₹9,000",
      internship: true,
      students: "180+",
      rating: 4.6,
      description: "Get ahead in analytics with dashboards, automation & Excel mastery.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false
    },
    {
      category: "Recruitment",
      title: "Recruitment Course (UK & Europe Focus)",
      duration: "2 Weeks",
      price: "₹7,500",
      originalPrice: "₹10,000",
      internship: true,
      students: "200+",
      rating: 4.8,
      description: "Learn international recruitment strategies, sourcing tools, GDPR, ATS, visa norms & more. Perfect for staffing firms, HR aspirants, and freelance recruiters.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium mb-6 shadow-sm">
            🔥 Featured Courses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎓 Industry-Leading
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Training Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Choose from our top-rated, job-focused programs designed to help you land your dream job—fast. 
            Built by experts. Backed by recruiters. Powered by real-world projects.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 max-w-3xl mx-auto border border-blue-200">
            <p className="text-blue-800 font-medium">
              📌 Every course includes real projects, expert mentoring, and a recognized certificate to boost your profile.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-white/90 text-gray-800 hover:bg-white">
                    {course.category}
                  </Badge>
                  {course.popular && (
                    <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
                      Popular
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-800">{course.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    {course.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                    )}
                  </div>
                  {course.internship && (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-medium">Certificate</span>
                    </div>
                  )}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses">
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group">
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
