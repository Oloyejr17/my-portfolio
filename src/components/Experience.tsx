"use client";

import Link from "next/link";

export default function Experience() {
  const experiences = [
    {
      role: "Fiverr & Freelance",
      period: "Feb 2023 – Present",
      details: [
        "Delivered 10+ cross-platform applications (web & mobile) using React.js, React Native, and JavaScript.",
        "Increased client app performance by up to 25% through optimized code and UI improvements.",
        "Maintained 95%+ client satisfaction rating with on-time delivery of freelance projects.",
        "Collaborated with international clients across 3+ countries, ensuring clear communication and successful project outcomes.",
      ],
    },
    {
      role: "Full-Stack Developer | Codebase Technologies Limited",
      period: "Mar 2020 – Feb 2022",
      details: [
        "Built and deployed a virtual card banking app with React Native, improving transaction efficiency for end-users.",
        "Contributed to Trissol Software, adding new frontend features with React.js and integrating REST APIs.",
        "Reduced bug rate by 30% through proactive code reviews and debugging.",
        "Worked in a cross-functional team of 6 developers, delivering projects within deadlines.",
      ],
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-6xl mx-auto py-24 px-6 md:px-12 space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Relevant Experience
        </h2>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400 italic mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
          <Link
            href="/work"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-full text-center hover:bg-white hover:text-black transition"
          >
            View Work
          </Link>

          <a
            href="https://drive.google.com/file/d/1s6qPaPFXUEJXrDnP_OiIzqsO5wHTbIlc/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-full text-center hover:bg-white hover:text-black transition"
          >
            View Resume
          </a>
        </div>
      </section>

    </main>
  );
}
