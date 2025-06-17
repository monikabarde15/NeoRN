
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, FileText, Users, CheckCircle, Award, Monitor, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const additionalServices = [
    {
      icon: Award,
      title: "Corporate Training",
      description: "Upskill your team with training programs customized to your company's goals",
      features: ["Online & hybrid formats", "Customized curriculum", "Certification included", "Progress tracking dashboard"]
    },
    {
      icon: GraduationCap,
      title: "University & College Final Year Programs",
      description: "Bridge the gap between academics and industry. Tailored training and placement support",
      features: ["Final year engineering students", "Degree college graduates", "Industry-specific career preparation", "Campus-to-career roadmap"]
    },
    {
      icon: Monitor,
      title: "Freelancing & Web Development Track",
      description: "Become your own boss. Learn how to build websites and find freelance work",
      features: ["End-to-end full stack web development", "Portfolio & client-ready projects", "Freelance platform training (Fiverr, Upwork, etc.)", "Billing, proposals & client communication tips"]
    },
    {
      icon: FileText,
      title: "CV Writing Services",
      description: "Stand out with a professional CV that speaks for your skills",
      features: ["ATS-optimized format", "Job-matching keywords", "Multiple expert revisions", "Clean, modern layout"]
    }
  ];

  const serviceProcess = [
    {
      step: "01",
      title: "Consultation",
      description: "We assess your goals and guide you to the right track"
    },
    {
      step: "02", 
      title: "Planning",
      description: "Get a personalized career roadmap aligned with your strengths"
    },
    {
      step: "03",
      title: "Training", 
      description: "Hands-on sessions with expert instructors and project work"
    },
    {
      step: "04",
      title: "Placement",
      description: "Interview prep, CV support, employer connections, and ongoing guidance"
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
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive solutions for your professional development journey, from learning to career advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <ServicesOverview />

      {/* Additional Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🔧 Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boost Your Profile. Sharpen Your Edge. Get Hired Faster. At NeORN, we offer more than just training. Our specialized services are built to support your full career journey—from campus to corporate, and skill to self-employment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-4 mx-auto shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🚀 Our Service Process
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              We Keep It Simple. You Stay Focused.
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how we help you go from learner to leader:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {serviceProcess.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
