import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play } from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-medical"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white/15 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-white/25 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm mb-6 animate-fade-in">
              <Play className="w-4 h-4" />
              Smart Medicine Technology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Never Miss Your
              <span className="block text-accent">Medicine Again</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg animate-fade-in">
              Smart reminders, medication tracking, and personalized health insights 
              powered by AI to keep you healthy and on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-medical animate-pulse-glow">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                See How It Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-white/80 text-sm animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>10M+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl scale-110"></div>
              <img 
                src={heroPhoneMockup} 
                alt="Smart Medicine Reminder App Interface"
                className="relative z-10 max-w-sm w-full h-auto rounded-3xl shadow-2xl transition-smooth hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;