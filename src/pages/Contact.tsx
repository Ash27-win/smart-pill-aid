import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from "lucide-react";
import contactImage from "@/assets/contact-support.jpg";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our medical support team",
      contact: "support@medismart.com",
      availability: "24/7 response within 2 hours"
    },
    {
      icon: Phone,
      title: "Phone Support", 
      description: "Speak directly with our care specialists",
      contact: "1-800-MEDISMART",
      availability: "Mon-Fri: 8am-8pm EST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help through our app",
      contact: "Available in MediSmart app",
      availability: "24/7 automated + live agents"
    }
  ];

  const offices = [
    {
      city: "San Francisco, CA",
      address: "123 Healthcare Blvd, Suite 400",
      phone: "+1 (415) 123-4567",
      type: "Headquarters"
    },
    {
      city: "Austin, TX", 
      address: "456 Innovation Drive, Floor 3",
      phone: "+1 (512) 987-6543",
      type: "Development Center"
    },
    {
      city: "Boston, MA",
      address: "789 Medical Center Way, Suite 200", 
      phone: "+1 (617) 555-0123",
      type: "Clinical Operations"
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
              We're Here to Help
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about MediSmart? Need technical support? 
              Our dedicated team of healthcare and technical experts is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-smooth">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <div className="font-medium text-primary mb-2">
                    {method.contact}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {method.availability}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Please describe your question or issue in detail..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary text-white hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Image & Info */}
            <div className="space-y-8">
              <img 
                src={contactImage} 
                alt="MediSmart customer support team"
                className="rounded-2xl shadow-elegant w-full"
              />
              
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-2 text-muted-foreground">
                  <div>Emergency Support: 24/7</div>
                  <div>Phone Support: Mon-Fri 8am-8pm EST</div>
                  <div>Email Support: 24/7 (2hr response)</div>
                  <div>Live Chat: 24/7 in app</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at any of our locations across the United States.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {office.city}
                  </h3>
                  <div className="text-sm text-primary font-medium mb-3">
                    {office.type}
                  </div>
                  <div className="text-muted-foreground mb-2">
                    {office.address}
                  </div>
                  <div className="text-muted-foreground">
                    {office.phone}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-destructive/5 border-destructive/20">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Medical Emergency?
              </h2>
              <p className="text-muted-foreground mb-6">
                For immediate medical emergencies, please contact your local emergency services 
                or call 911. MediSmart support is for app-related questions and technical assistance only.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg">
                  Call 911
                </Button>
                <Button variant="outline" size="lg">
                  Poison Control: 1-800-222-1222
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;