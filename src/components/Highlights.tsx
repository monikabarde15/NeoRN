
import { BookOpen, Users, Briefcase, CheckCircle, Award, TrendingUp } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      icon: Award,
      number: "🤝",
      title: "Backed by ORN-AI",
      description: "NeORN is powered by ORN-AI, an ISO 9001:2015 certified AI-driven learning platform—ensuring global standards and job-ready outcomes.",
      color: "blue"
    },
    {
      icon: BookOpen,
      number: "90+",
      title: "Industry-Ready Courses",
      description: "Courses designed by experts, focused on in-demand skills employers actually look for.",
      color: "purple"
    },
    {
      icon: Users,
      number: "5000+",
      title: "Students Trained",
      description: "Thousands have already turned their learning into real jobs—and so can you.",
      color: "green"
    },
    {
      icon: CheckCircle,
      number: "95%",
      title: "Placement Success",
      description: "With career grooming, mock interviews, and company connections, we don't stop until you get placed.",
      color: "orange"
    },
    {
      icon: Award,
      number: "100%",
      title: "Job-Ready Skills",
      description: "Every course includes hands-on project work so you're confident on day one of your job.",
      color: "pink"
    },
    {
      icon: Briefcase,
      number: "500+",
      title: "Hiring Partners",
      description: "Our growing network of companies are actively hiring NeORN-trained talent.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      green: "bg-green-50 text-green-600 border-green-200",
      orange: "bg-orange-50 text-orange-600 border-orange-200",
      pink: "bg-pink-50 text-pink-600 border-pink-200",
      indigo: "bg-indigo-50 text-indigo-600 border-indigo-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            What We Do Differently
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Next Step Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Whether you're a fresher, a career switcher, or stuck in job limbo—NeORN is your launchpad. 
            Don't just learn. Get hired. Grow with us.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/courses" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Explore Courses
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
            >
              Request Callback
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl border-2 mb-6 ${getColorClasses(highlight.color)}`}>
                <highlight.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-3">{highlight.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional highlight for career growth */}
        <div className="mt-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📈 300% Career Growth
          </h3>
          <p className="text-lg text-gray-700">
            Our learners report up to 3x salary hikes post course completion. You bring the effort, we bring the results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
