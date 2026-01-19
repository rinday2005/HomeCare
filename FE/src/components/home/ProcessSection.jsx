import { Button } from "@/components/ui/button";
import { steps } from "@/data/home";

const ProcessSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              THE PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              How it Works:<br />Starting Your Journey
            </h2>
            <p className="text-muted-foreground">
              We've streamlined the process of finding and managing care to make it as simple as possible for families.
            </p>
            <Button>Book a Free Consultation</Button>
          </div>

          {/* Right Steps */}
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-primary/20">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
