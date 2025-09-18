import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Award, Target, Lightbulb } from "lucide-react";
import doctorImage from "@/assets/doctor-consultation.jpg";
import healthcareTeam from "@/assets/healthcare-team.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every feature we build puts patient health and safety at the forefront of our design decisions."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "HIPAA-compliant infrastructure ensures your medical information stays protected and confidential."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging AI and smart technology to revolutionize how patients manage their medications."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Accurate medication tracking and intelligent reminders help prevent missed doses and errors."
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "2M+", label: "Medications Tracked" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.8★", label: "App Store Rating" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      description: "Former Johns Hopkins physician with 15+ years in digital health innovation."
    },
    {
      name: "Michael Rodriguez",
      role: "CEO & Co-Founder", 
      description: "Healthcare technology veteran who lost his grandfather to medication errors."
    },
    {
      name: "Dr. Emily Watson",
      role: "VP of Clinical Affairs",
      description: "Board-certified pharmacist specializing in medication adherence research."
    },
    {
      name: "David Kim",
      role: "CTO & Co-Founder",
      description: "Former Google engineer passionate about using AI to solve healthcare challenges."
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
              Revolutionizing Medication Management
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded by healthcare professionals and technology experts who believe 
              that missing medications shouldn't be a life-threatening mistake.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={doctorImage} 
                alt="Healthcare professional using MediSmart technology"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every year, medication errors affect millions of patients worldwide. 
                We're building intelligent technology to ensure the right medication 
                reaches the right person at the right time, every time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through AI-powered reminders, smart tracking, and personalized 
                health insights, we're making medication management simple, 
                safe, and stress-free for patients and families everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-smooth">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Healthcare professionals and technology experts united by a common mission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {team.map((member, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={healthcareTeam} 
              alt="MediSmart healthcare and technology team"
              className="rounded-2xl shadow-elegant max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Health Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of thousands of users who trust MediSmart with their medication management.
            </p>
            <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90">
              Download MediSmart Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;