"use client";

const steps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding project scope, objectives, and client needs.",
  },
  {
    number: "02",
    title: "Architecture & Planning",
    description: "Selecting tech stack and designing scalable architecture.",
  },
  {
    number: "03",
    title: "Prototyping",
    description: "Creating mockups or prototypes to visualize functionality.",
  },
  {
    number: "04",
    title: "Development",
    description: "Writing clean, efficient code for frontend and backend.",
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description: "Ensuring performance, fixing bugs, and optimizing user experience.",
  },
  {
    number: "06",
    title: "Deployment & Maintenance",
    description: "Deploying apps and providing ongoing support.",
  },
];


export default function DesignProcess() {
  return (
    <section className="py-20 bg-black text-white px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
      My Full-Stack Development Process

      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <article
            key={step.number}
            className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-zinc-800 hover:border-yellow-400 transition"
          >
            {/* Number inline with title */}
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              <span className="text-yellow-400 font-bold mr-2">{step.number}.</span>
              {step.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
