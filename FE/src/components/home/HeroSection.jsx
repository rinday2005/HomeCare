import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";
import { heroImages } from "@/data/home";

const HeroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <span className="text-sm font-medium text-primary bg-secondary px-3 py-1 rounded-full">
              TRUSTED BY 5,000+ FAMILIES
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Home Care &{" "}
              <span className="text-gradient" style={{ color: "#19c3e6" }}>Real-time</span>{" "}
              Health Monitoring
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Compassionate care meets modern technology. Keep your loved ones safe and healthy with 24/7 monitoring and professional support.
            </p>
            
            <div className="flex items-center gap-4">
              <Button size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-[#19c3e6] text-[#6DBDE0]">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-background w-9 h-9">
                  <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background w-9 h-9">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background w-9 h-9">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-sm text-muted-foreground">
                Join 1k+ caregivers already on the platform
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
             <div
  className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
  style={{ animationDelay: "0.2s" }}
>
  <div className="relative w-full h-[500px] overflow-hidden">
    {heroImages.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="Caregiver with elderly patient"
        className="absolute inset-0 w-full h-full object-cover animate-hero-slide"
        style={{
          animationDelay: `${index * 4}s`,
        }}
      />
    ))}
  </div>
</div>

              
              {/* Status Card Overlay */}
              <div className="absolute bottom-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">LIVE STATUS</p>
                  <p className="text-sm font-medium">Vitals stable • Caregiver present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
