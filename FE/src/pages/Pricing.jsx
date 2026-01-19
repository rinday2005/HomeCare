import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { plans, faqs } from "@/data/home";


const Pricing = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1 rounded-full mb-6">
            SIMPLE, UPFRONT PRICING
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transparent Care Plans
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compassionate, professional home care tailored to your family's needs.
            No hidden fees, just quality support when you need it most.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 relative ${
                  plan.popular
                    ? "border-2 border-primary shadow-lg scale-105"
                    : "border border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <div className="mb-6">
                  <p className={`text-sm font-semibold ${plan.popular ? "text-primary" : "text-muted-foreground"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </div>

                <Button
                  variant={plan.buttonVariant}
                  className="w-full mb-6"
                  asChild
                >
                  <Link to="/contact">{plan.buttonText}</Link>
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.popular ? "text-primary" : "text-green-500"}`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about our care plans and commitment.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-sm border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our care advisors are available 24/7 to help you find the right level of
              support for your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-4 h-4" />
                Call (800) CARE-NOW
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;