
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              By accessing and using NeORN's services, you accept and agree to be bound by the terms and provisions 
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Services Provided</h2>
            <div className="text-gray-600 mb-8 leading-relaxed">
              <p className="mb-4">NeORN provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional training and certification programs</li>
                <li>Career development and placement services</li>
                <li>Recruitment solutions for employers</li>
                <li>Online learning platforms and resources</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
            <div className="text-gray-600 mb-8 leading-relaxed">
              <p className="mb-4">As a user, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any fraudulent or malicious activities</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Course fees are due as specified during enrollment. Refunds are available according to our refund policy. 
              We reserve the right to modify pricing with 30 days notice to existing users.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              All content, materials, and resources provided through our platform are protected by intellectual property 
              laws. Users may not reproduce, distribute, or create derivative works without explicit permission.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              NeORN shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of our services. Our total liability shall not exceed the amount you paid for services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We reserve the right to terminate or suspend your account and access to our services at our sole discretion, 
              without notice, for conduct that we believe violates these Terms of Service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms of Service, please contact us at legal@neorn.com or 
              call us at +91 9876543210.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
