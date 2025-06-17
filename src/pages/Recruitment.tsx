
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Building, CheckCircle, ArrowRight, Briefcase } from "lucide-react";

const Recruitment = () => {
  const services = [
    {
      icon: Users,
      title: "Talent Sourcing",
      description: "Access a vetted talent pool trained in IT, data, AI/ML, cybersecurity, telecom & more"
    },
    {
      icon: Target,
      title: "Skill Matching",
      description: "We match candidates with your job roles based on stack-specific competencies—no guesswork, just precision hiring"
    },
    {
      icon: Building,
      title: "Industry Expertise",
      description: "Our recruiters speak your tech language—from DevOps to Data Science, Full Stack to 5G Testing"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Candidates are pre-screened, project-tested, and trained to meet enterprise hiring standards"
    }
  ];

  const industries = [
    "Information Technology",
    "Cybersecurity", 
    "Telecommunications",
    "Cloud Computing",
    "Software Development",
    "Data Science & Analytics",
    "Artificial Intelligence & ML",
    "Business Intelligence"
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We begin with a deep dive into your business needs, job roles, and company culture to build a hiring roadmap that aligns with your goals"
    },
    {
      step: "02",
      title: "Candidate Sourcing",
      description: "Our curated talent pool—trained and certified through ORN-AI—ensures fast access to pre-screened candidates across multiple domains"
    },
    {
      step: "03",
      title: "Screening & Assessment",
      description: "Each profile is vetted for technical skill, soft skill, and cultural fit through hands-on evaluations, projects, and interviews"
    },
    {
      step: "04",
      title: "Interview Coordination",
      description: "We manage end-to-end scheduling, candidate preparation, and feedback collection—so you focus only on the final decision"
    },
    {
      step: "05",
      title: "Onboarding Support",
      description: "From offer rollout to day-one readiness, we ensure smooth transitions with documentation help, expectation alignment, and follow-ups"
    }
  ];

  const whyTrustNeorn = [
    "✅ Save Time — No need to train from scratch",
    "✅ Hire Smarter — Role-ready candidates, not just resumes", 
    "✅ Scale Faster — Talent aligned to your tech, stack, and shift needs",
    "✅ Pay-Only-When-Ready Options available"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              👥 Recruitment &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Staffing
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Right Talent. Right Time. Real Impact.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At NeORN, we don't just connect profiles to positions—we match pre-trained, job-ready talent with real business outcomes. In collaboration with ORN-AI (ISO 9001:2015 Certified), our recruitment model combines AI-powered learning, live project exposure, and verified skills to ensure quality hires from day one.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">🔍 Looking to Build a Winning Team?</h3>
              <p className="text-blue-800">
                Connect with top-tier candidates already trained, assessed, and aligned to your stack. We bridge the gap between skill-ready professionals and organizations that demand excellence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}>
                <Briefcase className="w-5 h-5 mr-2" />
                Hire Talent
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50" onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🔧 Our Recruitment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions designed to scale your workforce without compromising on quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4 mx-auto">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Covered */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🌐 Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our placement-ready professionals are equipped for roles across key technology sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Badge key={index} variant="secondary" className="p-4 text-center justify-center bg-white hover:bg-blue-50 transition-colors cursor-pointer">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust NeORN */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🚀 Why Companies Trust NeORN for Hiring
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyTrustNeorn.map((point, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-lg">{point}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6">
              📞 Let's build your team. Faster. Better. Smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a Recruitment Call
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Request Profiles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🧭 Our Hiring Process
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Smart. Structured. Seamless.</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At NeORN, hiring isn't guesswork—it's a refined system designed to connect you with top talent that fits both your role and your culture.
            </p>
          </div>

          <div className="space-y-8">
            {hiringProcess.map((process, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-2xl hover:bg-gray-50 transition-colors shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold">
                  {process.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🔹 {process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < hiringProcess.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation-form" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Schedule a Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your hiring needs and let our experts help you find the perfect candidates.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🚀 Ready to Find Your Perfect Hire?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you build a strong, scalable team with our trained and deployment-ready talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Hiring Process
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50" onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}>
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recruitment;
