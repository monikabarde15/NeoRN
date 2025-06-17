
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Data Scientist",
      company: "TCS",
      course: "Data Science & AI",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "NeORN's training program was exceptional. The practical approach and internship opportunity helped me land my dream job at TCS. The instructors provided real-world insights that made all the difference.",
      rating: 5,
      salary: "₹7.8 LPA"
    },
    {
      name: "Rahul Kumar",
      role: "Cybersecurity Analyst",
      company: "Infosys",
      course: "Ethical Hacking",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The cybersecurity course was a game-changer. Within 3 months of completion, I secured a role at Infosys. The hands-on labs and up-to-date content were exactly what I needed to stand out.",
      rating: 5,
      salary: "₹7.2 LPA"
    },
    {
      name: "Sneha Patel",
      role: "Full Stack Developer",
      company: "Wipro",
      course: "Web Development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "NeORN's placement support is outstanding. From resume building to mock interviews, they prepared me thoroughly. I walked into my Wipro interview confident and ready.",
      rating: 5,
      salary: "₹6.8 LPA"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium mb-6 shadow-sm">
            🌟 Real Stories from Our Alumni
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Training to Triumph –
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Here's How NeORN Changed Lives
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how NeORN's hands-on training, expert mentoring, and placement support have helped learners land roles in top companies like TCS, Infosys, Wipro, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-500 opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 ring-2 ring-blue-100">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.role} at {testimonial.company}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{testimonial.course}</span>
                      <span className="text-xs text-green-600 font-medium">{testimonial.salary}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join the thousands of learners who turned training into transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Start Your Journey
              </a>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
                View More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
