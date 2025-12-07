import Hero from "../components/Hero";
import Section from "../components/Section";

export default function About() {
  return (
    <>
      <Hero />

      <Section title="The Problem"
      img="/images/focused-researcher.png">
        <ul className="list-disc pl-6 space-y-2">
          <li>90,000 prostatectomies take place every year in the US.</li>
          <li>Surgeons currently rely on visual inspection to detect remaining cancer.</li>
          <li>Confirmation only happens after surgery via pathology.</li>
        </ul>
      </Section>

      <Section
        title="Our Solution"
        img="/images/glassware.png"
        reverse
      >
        <p>
          Probentis is developing a minimally invasive Raman spectroscopy device that performs 
          real-time, in-vivo assessment of prostate tissue to detect the presence of cancer and 
          grade its severity according to Gleason and ISUP systems.
        </p>
      </Section>

      <Section
        title="State of Technology"
        img="/images/lab-research.png"
      >
        <p>
          Our platform is backed by 7 years of scientific research, supported by MBIE Smart 
          Ideas funding, and is advancing toward clinical translation.
        </p>
      </Section>
    </>
  );
}
