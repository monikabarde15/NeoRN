
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Users, Zap, Star, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Offers = () => {
  const launchOffers = [
    {
      icon: Gift,
      title: "Free Course Launch",
      description: "Start strong with our introductory courses at zero cost. Perfect for testing the waters and earning your first certificate.",
      discount: "100% Free",
      validity: "Limited Time Only",
      color: "green",
      features: ["Base course access", "Certificate of completion", "Community support"]
    },
    {
      icon: Zap,
      title: "Career Boost Combo",
      description: "This powerful bundle is built for learners who want to move fast, smart, and straight into placement.",
      price: "₹9,999",
      originalPrice: "₹20,000",
      discount: "Save 50%",
      validity: "Valid this month only",
      color: "blue",
      features: ["Choose any 3 courses", "Guaranteed placement support", "CV writing by experts", "Mock interviews with industry mentors"]
    },
    {
      icon: Users,
      title: "Referral Program",
      description: "Help Friends. Get Rewarded. Repeat. Turn your network into a win-win.",
      discount: "₹500 per referral",
      validity: "Ongoing",
      color: "purple",
      features: ["Cashback on every referral", "Exclusive perks", "Course discounts", "No cap on earnings"]
    }
  ];

  const bundleOffers = [
    {
      title: "2-Course Bundle",
      subtitle: "Build Your Career Path with Confidence",
      discount: "Save 20%",
      price: "₹15,000",
      originalPrice: "₹18,750",
      courses: ["Choose any 2 courses relevant to your career goal", "Flexible scheduling", "Shared internship opportunity", "Soft Skills Mastery", "Guaranteed placement support included"]
    },
    {
      title: "3-Course Bundle",
      subtitle: "Advance Faster with a Broader Skill Set",
      discount: "Save 27%",
      price: "₹25,000",
      originalPrice: "₹34,250",
      courses: ["Choose any 3 courses aligned to your career path", "Extended internship opportunity", "Priority mentor support", "Soft Skills Mastery", "Guaranteed placement support included"],
      popular: true
    },
    {
      title: "4-Course Bundle",
      subtitle: "Your Complete Career Transformation Plan",
      discount: "Save 40%",
      price: "₹30,000",
      originalPrice: "₹50,000",
      courses: ["Choose any 4 courses tailored to your desired job role", "Premium support with dedicated mentor check-ins", "Personalized learning roadmap", "Soft Skills Mastery", "Guaranteed placement support included"]
    }
  ];

  const corporateOffers = [
    {
      employees: "5-10 Employees",
      discount: "15% OFF",
      features: ["Custom curriculum", "Flexible online or weekend training", "Progress tracking reports"]
    },
    {
      employees: "11-25 Employees",
      discount: "25% OFF",
      features: ["Dedicated trainer assigned", "On-site training available", "Certification included"],
      popular: true
    },
    {
      employees: "25+ Employees",
      discount: "35% OFF",
      features: ["Enterprise onboarding", "Custom learning paths", "Ongoing upskilling and support"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "from-green-500 to-green-600",
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🎉 Special{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Offers
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Big Dreams Start with Bold Offers
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We believe that access to career-changing education shouldn't be a luxury. That's why we've created high-impact, limited-time deals to help you launch or level up—without breaking the bank.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-red-100 text-red-800">Limited Time</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-green-100 text-green-800">Up to 50% OFF</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-blue-100 text-blue-800">Free Courses Available</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Offers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🚀 Launch Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive deals to kickstart your journey with NeORN—powered by ORN-AI and trusted by 5000+ learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {launchOffers.map((offer, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-4 right-4">
                  <Badge className={`bg-gradient-to-r ${getColorClasses(offer.color)} text-white`}>
                    {offer.discount}
                  </Badge>
                </div>
                
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${getColorClasses(offer.color)} mb-4 mx-auto shadow-lg`}>
                    <offer.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {offer.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">{offer.description}</p>
                  
                  {offer.price && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{offer.price}</div>
                      {offer.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">{offer.originalPrice}</div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {offer.validity}
                  </div>
                  
                  <ul className="space-y-2">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button className={`w-full bg-gradient-to-r ${getColorClasses(offer.color)} hover:shadow-lg transition-all duration-300`}>
                      Claim Offer
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offers */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🎯 Course Bundle Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More Courses. More Value. More Career Power. The more you learn, the less you pay per course. These handpicked bundles are designed for serious learners who want flexible access, premium support, and faster placement outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bundleOffers.map((bundle, index) => (
              <Card key={index} className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${bundle.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {bundle.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                      {bundle.discount}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {bundle.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 font-medium">{bundle.subtitle}</p>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold text-blue-600">{bundle.price}</div>
                    <div className="text-lg text-gray-500 line-through">{bundle.originalPrice}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {bundle.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{course}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button className={`w-full ${bundle.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} text-white transition-all duration-300`}>
                      Choose Bundle
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training Offers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🏢 Corporate Training Discounts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upskill Your Team. Scale with Confidence. Whether you're a startup or an enterprise, our volume-based pricing makes it easier to equip your teams with job-ready tech skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateOffers.map((offer, index) => (
              <Card key={index} className={`group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${offer.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {offer.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1">
                      Recommended
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    👥 {offer.employees}
                  </CardTitle>
                  <div className="text-3xl font-bold text-green-600 mt-2">{offer.discount}</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600 justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300">
                      Get Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🚀 Make the Smart Investment Today
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Train your team or build your career—these offers won't last forever. Let's help you save more, learn faster, and get to your goals quicker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Talk to an Advisor
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50">
                  Claim a Bundle Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
