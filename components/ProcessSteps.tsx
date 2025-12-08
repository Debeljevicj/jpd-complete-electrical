import { Phone, ClipboardCheck, Wrench, Smile } from 'lucide-react';

export default function ProcessSteps() {
    const steps = [
        {
            icon: <Phone className="w-8 h-8 text-white" />,
            title: "1. Contact Us",
            description: "Call or fill out our form. We'll discuss your needs and schedule a visit."
        },
        {
            icon: <ClipboardCheck className="w-8 h-8 text-white" />,
            title: "2. Upfront Quote",
            description: "We provide a clear, transparent quote with no hidden fees."
        },
        {
            icon: <Wrench className="w-8 h-8 text-white" />,
            title: "3. Job Done Right",
            description: "Our licensed team completes the work to the highest standards."
        },
        {
            icon: <Smile className="w-8 h-8 text-white" />,
            title: "4. Satisfaction",
            description: "We clean up and ensure you're 100% happy with the result."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How We Work</h2>
                    <p className="text-neutral-slate max-w-2xl mx-auto">
                        We make your electrical project simple and stress-free. Here's what to expect when you choose JPD Complete Electrical.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10 transform translate-y-4" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white relative z-10">
                                {step.icon}
                                <div className="absolute -bottom-2 bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full">
                                    Step {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                            <p className="text-neutral-slate text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
