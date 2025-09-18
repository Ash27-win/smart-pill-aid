import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Bell, 
  Calendar, 
  BarChart3, 
  Shield, 
  Users, 
  Brain,
  Camera,
  Pill,
  Clock,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Download & Setup",
      description: "Download MediSmart from the App Store or Google Play. Create your secure account in under 2 minutes.",
      icon: Smartphone,
      details: [
        "Quick account creation",
        "Secure profile setup",
        "Privacy preferences",
        "Initial health assessment"
      ]
    },
    {
      step: 2, 
      title: "Add Your Medications",
      description: "Scan pill bottles, search our database, or manually add medications with dosage and schedule information.",
      icon: Camera,
      details: [
        "Scan prescription labels",
        "Search 50,000+ medication database", 
        "Set custom schedules",
        "Add special instructions"
      ]
    },
    {
      step: 3,
      title: "Smart Reminders",
      description: "Receive intelligent, personalized reminders that adapt to your routine and preferences.",
      icon: Bell,
      details: [
        "AI-powered timing optimization",
        "Multiple reminder types",
        "Snooze and reschedule options",
        "Emergency contact alerts"
      ]
    },
    {
      step: 4,
      title: "Track & Monitor",
      description: "Log your doses, track symptoms, and monitor your health progress with detailed insights.",
      icon: BarChart3,
      details: [
        "One-tap dose confirmation",
        "Symptom tracking",
        "Side effect monitoring",
        "Progress analytics"
      ]
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Our machine learning algorithms learn your patterns and optimize reminder timing for maximum effectiveness."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Bank-level encryption and HIPAA compliance ensure your medical data stays private and secure."
    },
    {
      icon: Users,
      title: "Family Coordination",
      description: "Share medication schedules with family members and caregivers for better support and oversight."
    },
    {
      icon: AlertTriangle,
      title: "Safety Alerts",
      description: "Get warnings about drug interactions, allergies, and potential medication conflicts."
    },
    {
      icon: Calendar,
      title: "Appointment Integration",
      description: "Sync with your calendar and get reminders for doctor appointments and prescription refills."
    },
    {
      icon: Pill,
      title: "Medication Database",
      description: "Access information on over 50,000 medications including dosages, side effects, and interactions."
    }
  ];

  const benefits = [
    {
      stat: "94%",
      title: "Improved Adherence",
      description: "Users see significant improvement in medication compliance within 30 days"
    },
    {
      stat: "67%", 
      title: "Fewer Hospital Visits",
      description: "Reduced emergency room visits due to missed medications"
    },
    {
      stat: "89%",
      title: "Better Health Outcomes", 
      description: "Users report feeling more in control of their health management"
    },
    {
      stat: "4.8★",
      title: "User Satisfaction",
      description: "Consistently rated as the #1 medication reminder app"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Clock className="w-4 h-4 mr-2" />
              Simple • Smart • Secure
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              How MediSmart Works
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your medication management in 4 simple steps. 
              Our intelligent system makes staying on track effortless and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="p-0 text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <step.icon className="w-12 h-12 text-primary" />
                      </div>
                      <div className="text-6xl font-bold text-primary mb-2">
                        {step.step}
                      </div>
                      <div className="text-lg text-muted-foreground">
                        Step {step.step} of 4
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Better Health
            </h2>
            <p className="text-lg text-muted-foreground">
              Every feature is designed with your health and safety in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-smooth">
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proven Results for Real People
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of thousands of users who've transformed their health with MediSmart.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Safety is Our Priority
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              MediSmart is designed in partnership with healthcare professionals and pharmacists. 
              Our platform follows strict medical guidelines and is continuously updated with the latest 
              safety protocols to ensure your medication management is both effective and secure.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">FDA</div>
                <div className="text-sm text-muted-foreground">Guidelines Compliant</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">HIPAA</div>
                <div className="text-sm text-muted-foreground">Certified Security</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Medical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your journey to better medication management today. 
              Free to download, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90">
                Download MediSmart Now
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;