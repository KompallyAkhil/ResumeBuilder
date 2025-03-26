import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Features from "./Features";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <section className="relative pt-2 md:pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent -z-10" />
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 md:mb-8 animate-fade-in">
              Create stunning resumes that
              <span className="relative ml-2 inline-block">
                get noticed
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/80"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 md:mb-10 max-w-3xl mx-auto animate-fade-in-up">
              Build beautiful, professional resumes in minutes with our intuitive builder. Stand out from the crowd and land your dream job faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button className="premium-button group px-8 py-6 text-base">
                Create Your Resume
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button asChild variant="outline" className="px-8 py-6 text-base">
                <Link to="/template">Explore Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </div>
  );
};

export default Hero;
