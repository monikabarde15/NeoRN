
import { Brain, ExternalLink } from "lucide-react";

const TrustStrip = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Brain className="w-8 h-8 text-blue-300" />
            <h3 className="text-2xl md:text-3xl font-bold">
              🧠 AI-Driven Learning, Global Standards
            </h3>
          </div>
          <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
            Every NeORN course is designed and delivered in collaboration with ORN-AI, 
            ensuring international quality and real-world impact.
          </p>
          <a 
            href="https://www.orn-ai.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors duration-300 text-lg font-medium underline underline-offset-4 hover:underline-offset-8"
          >
            Learn more about ORN-AI
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
