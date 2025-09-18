import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-20 gradient-medical relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 rounded-full bg-white/15 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm mb-6">
              <Download className="w-4 h-4" />
              Available Now
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Journey to
              <span className="block text-accent">Better Health Today</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join millions of users who trust MediSmart to keep them healthy and on track. 
              Download our free app and experience the future of medication management.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 shadow-medical group"
            >
              <Apple className="w-5 h-5 mr-3 group-hover:scale-110 transition-smooth" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 shadow-medical group"
            >
              <Smartphone className="w-5 h-5 mr-3 group-hover:scale-110 transition-smooth" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </Button>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-8 text-white/90 animate-fade-in">
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Free to Download</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>No Ads or Subscriptions</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>HIPAA Compliant</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/20 animate-fade-in">
            <p className="text-white/70 text-sm mb-6">Trusted by healthcare professionals worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white/60 font-semibold">Mayo Clinic</div>
              <div className="text-white/60 font-semibold">Johns Hopkins</div>
              <div className="text-white/60 font-semibold">Cleveland Clinic</div>
              <div className="text-white/60 font-semibold">Kaiser Permanente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;