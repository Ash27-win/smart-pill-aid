import { Brain, Shield, Heart, Clock, Smartphone, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart AI Reminders",
      description: "Advanced AI learns your routine and sends personalized medication reminders at optimal times.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Medication Tracking",
      description: "Comprehensive medication management with drug interaction checks and side effect monitoring.",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Health Insights",
      description: "Personalized health analytics and progress tracking to optimize your medication adherence.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Customizable reminder schedules that adapt to your lifestyle and medication requirements.",
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Sync",
      description: "Seamless synchronization across all your devices with cloud backup and family sharing.",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Detailed reports and trends to share with healthcare providers and track improvements.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm mb-4">
            <Heart className="w-4 h-4" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block text-primary">Smart Medicine Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with user-friendly design 
            to revolutionize how you manage your medications and health.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="group hover:shadow-card transition-smooth bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                    <IconComponent className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-card p-8 md:p-12 animate-fade-in">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Adherence Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-muted-foreground">App Store Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;