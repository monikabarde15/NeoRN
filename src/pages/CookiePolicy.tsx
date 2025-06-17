
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cookie{" "}
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn how we use cookies to improve your experience on our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Essential Cookies</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                These cookies are necessary for the website to function properly. They enable basic functions like 
                page navigation, access to secure areas, and user authentication.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Performance Cookies</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                These cookies collect information about how visitors use our website, such as which pages are visited 
                most often. This data helps us improve the website's performance and user experience.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Functionality Cookies</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                These cookies allow the website to remember choices you make and provide enhanced features. 
                They may be used to remember your login details, language preferences, or course progress.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Marketing Cookies</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                These cookies track your browsing habits to show you relevant advertisements and measure the 
                effectiveness of our marketing campaigns. They help us provide personalized content and offers.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Cookies</h2>
            <div className="text-gray-600 mb-8 leading-relaxed">
              <p className="mb-4">You can control and manage cookies in several ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                <li>Cookie preferences: Use our cookie preference center to customize your settings</li>
                <li>Opt-out tools: Use industry opt-out tools for marketing cookies</li>
                <li>Mobile settings: Adjust cookie settings in your mobile device preferences</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We may use third-party services like Google Analytics, social media plugins, and advertising partners 
              that may set their own cookies. These third parties have their own privacy policies and cookie policies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. Please check this page periodically for updates.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at cookies@neorn.com or 
              call us at +91 9876543210.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
