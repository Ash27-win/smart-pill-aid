import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Heart, Shield, Sparkles } from "lucide-react";
import pricingImage from "@/assets/pricing-healthcare.jpg";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for individuals getting started with medication management",
      features: [
        "Up to 5 medications",
        "Basic pill reminders",
        "Simple medication tracking", 
        "Mobile app access",
        "Basic health insights",
        "Standard support"
      ],
      limitations: [
        "No family sharing",
        "Limited customization",
        "Basic analytics only"
      ],
      cta: "Get Started Free",
      popular: false,
      icon: Heart
    },
    {
      name: "Family",
      price: "$9.99",
      period: "/month",
      description: "Ideal for families managing multiple medication schedules",
      features: [
        "Unlimited medications",
        "Smart AI reminders",
        "Advanced medication tracking",
        "Family member sharing (up to 6)",
        "Detailed health analytics",
        "Priority support",
        "Medication interaction alerts",
        "Doctor appointment reminders",
        "Pharmacy integration"
      ],
      limitations: [],
      cta: "Start 30-Day Free Trial",
      popular: true,
      icon: Sparkles
    },
    {
      name: "Premium",
      price: "$19.99", 
      period: "/month",
      description: "Comprehensive solution for complex medication needs and chronic conditions",
      features: [
        "Everything in Family plan",
        "Unlimited family members",
        "Advanced AI health insights",
        "Telehealth integration",
        "Personalized medication coaching",
        "24/7 pharmacist consultation",
        "Custom medication reports",
        "Healthcare provider dashboard",
        "Clinical trial matching",
        "HIPAA-compliant data export"
      ],
      limitations: [],
      cta: "Start Premium Trial",
      popular: false,
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "Is my medical data secure?",
      answer: "Absolutely. We're HIPAA compliant and use bank-level encryption to protect your data. Your information is never shared with third parties without your explicit consent."
    },
    {
      question: "Do you offer discounts for seniors or students?",
      answer: "Yes, we offer 50% discounts for seniors (65+) and students. Contact our support team with verification for discount codes."
    },
    {
      question: "What if I'm not satisfied with my plan?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied, we'll refund your payment in full."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Choose Your Health Plan
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From basic medication reminders to comprehensive family health management, 
              find the perfect plan for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-8 ${plan.popular ? 'ring-2 ring-primary shadow-elegant' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="p-0 mb-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                    {plan.period && <span className="text-lg text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start gap-3 opacity-60">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary text-white hover:opacity-90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Enterprise & Healthcare Providers
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Looking for a solution for your healthcare organization, hospital, 
                or pharmacy? We offer custom enterprise plans with advanced features, 
                dedicated support, and seamless integration with existing systems.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom integration with EMR systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Dedicated account management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>White-label options available</span>
                </li>
              </ul>
              <Button size="lg" variant="outline">
                Contact Sales Team
              </Button>
            </div>
            <div>
              <img 
                src={pricingImage} 
                alt="Healthcare professionals using MediSmart enterprise solution"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers to help you choose the right plan.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join over 500,000 users who trust MediSmart with their health.
              No credit card required for free trial.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Try MediSmart Free for 30 Days
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;