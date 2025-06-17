
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Practical Training",
      description: "We teach with real projects, tools, and hands-on experience"
    },
    {
      icon: Award,
      title: "Top Instructors",
      description: "Industry experts delivering real-time, job-focused learning"
    },
    {
      icon: Users,
      title: "Placement Support",
      description: "From resume building to job referrals—we're with you every step"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continue learning, practicing, and growing—long after the course ends"
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
              🔷 About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NeORN
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Where Skills Meet Success
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              NeORN isn't just a training center—we're your career partner. In collaboration with ORN-AI (ISO 9001:2015 Certified), we deliver AI-powered learning, expert mentoring, and real placement support. If you're ready to turn learning into a career, you're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                🚀 Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To help learners grow faster by teaching what the industry actually needs—and connecting them to the jobs that match their potential.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                🌍 Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted path from learning to hiring—for students, job seekers, and companies looking for great talent.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              💡 Why NeORN Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the training and staffing industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ORN-AI Collaboration */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🤝 In Collaboration with ORN-AI
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              NeORN is powered by ORN-AI, a leading AI-driven talent development platform. 
              Certified with ISO 9001:2015, ORN-AI ensures every course meets global quality standards—making your learning both credible and career-relevant.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              See How We Ensure Quality
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
