import React, { useEffect, useRef, useState } from 'react';

// A self-animating card component that triggers when it becomes visible in the viewport.
const AnimatedPhaseCard: React.FC<{ phase: string; title: string; description: string; icon: string; isLast: boolean }> = ({ phase, title, description, icon, isLast }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the element is intersecting (visible), update state and unobserve
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2, // Trigger when 20% of the card is visible
            }
        );

        const currentRef = cardRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`flex transform transition-all ease-out duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
            <div className="flex flex-col items-center mr-4">
                <div>
                    <div className="flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full text-brand-dark font-bold text-xl shadow-md">{icon}</div>
                </div>
                {/* The vertical line connecting the phases, hidden for the last item */}
                <div className={`w-px h-full ${isLast ? 'bg-transparent' : 'bg-gray-300'}`}></div>
            </div>
            <div className="pb-8">
                <p className="mb-2 text-sm font-semibold text-brand-brown">{phase}</p>
                <p className="mb-2 text-xl font-bold text-gray-800">{title}</p>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

const ModelSection: React.FC = () => {
    const phases = [
        {
            phase: "PHASE 1",
            title: "Enrollment (Access)",
            description: "Farmers join through an 'Opportunity Package' that includes training, chicks, feed support, and mentorship, signing a partnership agreement to use the Legal Chicks system.",
            icon: "1"
        },
        {
            phase: "PHASE 2",
            title: "Growth (Empowerment)",
            description: "Members get continuous education, monitoring, and marketing assistance. They gain access to discounted supplies and can qualify as certified Legal Chicks Growers.",
            icon: "2"
        },
        {
            phase: "PHASE 3",
            title: "Profit Sharing (Community Reward)",
            description: "A portion of profits goes into a Community Development Fund to help new members, provide micro-loans, or sponsor youth scholars, building community trust.",
            icon: "3"
        },
        {
            phase: "PHASE 4",
            title: "Representation (Voice)",
            description: "Elected 'Cluster Leaders' meet quarterly with HQ to discuss challenges and opportunities, creating shared governance without bureaucracy.",
            icon: "4"
        }
    ];

    return (
        <section id="model" className="py-20 bg-brand-light overflow-x-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-dark">Our Empowerment Model</h2>
                    <p className="text-lg text-gray-600 mt-2">The "Social Enterprise + Farmer Network" Approach</p>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
                </div>
                <div className="grid gap-0 md:grid-cols-1 max-w-3xl mx-auto">
                    {phases.map((item, index) => (
                         <AnimatedPhaseCard
                            key={item.phase}
                            phase={item.phase}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            isLast={index === phases.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModelSection;