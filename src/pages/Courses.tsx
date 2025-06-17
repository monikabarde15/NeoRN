
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, CheckCircle, Star, Download } from "lucide-react";

const Courses = () => {
  const courseCategories = [
    {
      category: "Cyber Security",
      courses: [
        {
          title: "Ethical Hacking & Penetration Testing",
          duration: "3 Months",
          price: "₹8,000",
          originalPrice: "₹12,000",
          students: "150+",
          rating: 4.8,
          internship: true
        },
        {
          title: "Network Security & Monitoring",
          duration: "2 Months",
          price: "₹6,500",
          originalPrice: "₹10,000",
          students: "120+",
          rating: 4.7,
          internship: true
        }
      ]
    },
    {
      category: "Data Science & AI",
      courses: [
        {
          title: "Machine Learning & Data Analytics",
          duration: "4 Months",
          price: "₹10,000",
          originalPrice: "₹15,000",
          students: "200+",
          rating: 4.9,
          internship: true
        },
        {
          title: "Python for Data Science",
          duration: "2 Months",
          price: "₹7,000",
          originalPrice: "₹10,500",
          students: "180+",
          rating: 4.6,
          internship: true
        }
      ]
    },
    {
      category: "Development",
      courses: [
        {
          title: "Full Stack Web Development",
          duration: "5 Months",
          price: "₹9,500",
          originalPrice: "₹14,000",
          students: "300+",
          rating: 4.7,
          internship: true
        },
        {
          title: "React & Node.js Development",
          duration: "3 Months",
          price: "₹8,500",
          originalPrice: "₹12,500",
          students: "250+",
          rating: 4.8,
          internship: true
        }
      ]
    },
    {
      category: "Business Analytics",
      courses: [
        {
          title: "Power BI & Advanced Excel",
          duration: "2 Months",
          price: "₹6,000",
          originalPrice: "₹9,000",
          students: "180+",
          rating: 4.6,
          internship: true
        },
        {
          title: "Tableau & Data Visualization",
          duration: "2 Months",
          price: "₹6,500",
          originalPrice: "₹9,500",
          students: "160+",
          rating: 4.5,
          internship: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Choose from our comprehensive catalog of industry-aligned courses designed to make you job-ready.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">90+ Courses Available</Badge>
              <Badge variant="secondary" className="px-4 py-2">₹5,000 - ₹10,000 Range</Badge>
              <Badge variant="secondary" className="px-4 py-2">Internship Included</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      {courseCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {category.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.courses.map((course, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        {category.category}
                      </Badge>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-800">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </CardTitle>
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
                        <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                      </div>
                      {course.internship && (
                        <div className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-xs font-medium">Internship</span>
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
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our industry-leading courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download All Brochures
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
