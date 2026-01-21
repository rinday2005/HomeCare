import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Activity, ArrowRight, Phone } from "lucide-react";
import { services, stats } from "@/data/home";


const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary text-white py-20 rounded-3xl mx-4 mt-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/banner1.jpg')] bg-cover bg-center opacity-80" />
        <div className="container mx-auto px-4 text-center relative z-10">
  {/* Khung xám làm nổi chữ */}
  <div className="bg-gray-600/10 backdrop-blur-md rounded-8xl p-8 md:p-15 inline-block">
    <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-6">
      TRUSTED HOME CARE
    </span>

    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
      Compassionate Care<br />Tailored to You
    </h1>

    <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
      Professional home care management providing peace of mind for families and dignity
      for seniors. Experience the highest standard of personalized health services.
    </p>

    <Button
      size="lg"
      variant="secondary"
      className="bg-white text-primary hover:bg-white/90"
    >
      View Our Services
    </Button>
  </div>
</div>

      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-border shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="text-primary text-sm font-semibold tracking-wider">
        WHAT WE DO
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
        Our Care Offerings
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto mt-4" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
        >
          {/* PHẦN TRÊN: ẢNH */}
          <div className="h-48 bg-gray-100 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* PHẦN DƯỚI */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              {/* ICON NHỎ */}
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <service.icon className="w-5 h-5 text-primary" />
              </div>

              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${service.tagColor}`}
              >
                {service.tag}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              {service.title}
            </h3>

            <p className="text-muted-foreground mb-4">
              {service.description}
            </p>

            <Link
              to="/contact"
              className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to find the perfect care?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Our care managers are available 24/7 to discuss your family's unique needs and create
            a custom plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Free Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Download Brochure
            </Button>
          </div>
          <p className="text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Call us today: (800) CARE-CONNECT
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
