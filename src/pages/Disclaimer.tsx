
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Disclaimer
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Important information about the use of our services and content.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">General Information</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
              NeORN excludes all representations, warranties, obligations, and liabilities arising out of or in connection 
              with the information provided on this website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Educational Content</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              While we strive to provide accurate and up-to-date educational content, we make no guarantees about the 
              accuracy, completeness, or reliability of the information. The courses and materials are designed for 
              educational purposes and may not reflect the most current industry practices.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Employment and Career Services</h2>
            <div className="text-gray-600 mb-8 leading-relaxed">
              <p className="mb-4">Regarding our placement and career services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not guarantee job placement or specific salary outcomes</li>
                <li>Employment opportunities depend on market conditions and individual qualifications</li>
                <li>Success in our programs does not guarantee employment</li>
                <li>Job market conditions may vary by location and industry</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Certification and Accreditation</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our certifications are issued by NeORN and may not be recognized by all employers or institutions. 
              While we maintain high standards and are ISO 9001:2015 certified, students should verify the 
              recognition of our certifications with relevant employers or institutions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">External Links</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our website may contain links to external websites. We are not responsible for the content, 
              privacy practices, or availability of these external sites. Accessing external links is at your own risk.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Accuracy</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              While we make every effort to ensure technical accuracy in our training materials, technology evolves 
              rapidly. Some content may become outdated, and we encourage students to stay current with industry 
              developments and best practices.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Individual Results</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Individual results may vary based on personal effort, background, market conditions, and other factors. 
              Testimonials and success stories represent individual experiences and are not typical results.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              In no event shall NeORN be liable for any direct, indirect, incidental, consequential, or punitive 
              damages arising from the use of our services or reliance on information provided on our website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this disclaimer, please contact us at legal@neorn.com or 
              call us at +91 9876543210.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
