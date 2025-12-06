import { Section } from "../components/Section";
import { Hero } from "../components/Hero";

export default function About() {
  return (
    <div>
      <Hero
        title="PROBENTIS"
        description="A minimally invasive device providing real-time assessment of prostate cancer during biopsy or surgery."
      />

      <Section title="The Problem">
        <ul className="list-disc pl-6 space-y-2">
          <li>90,000 prostatectomies occur every year in the US.</li>
          <li>Surgeons rely solely on visual judgment to determine if cancer remains.</li>
          <li>Positive margins confirmed only after surgery.</li>
          <li>This delay impacts decision making during procedures.</li>
        </ul>
      </Section>

      <Section title="The Solution">
        <ul className="list-disc pl-6 space-y-2">
          <li>Real-time cancer detection during biopsy or surgery.</li>
          <li>Provides Gleason pattern and ISUP Grade assessments.</li>
          <li>Minimally invasive and fast.</li>
          <li>Reduces unnecessary downstream procedures.</li>
        </ul>
      </Section>

      <Section title="Current State of Technology">
        <ul className="list-disc pl-6 space-y-2">
          <li>Uses Raman spectroscopy for cancer detection.</li>
          <li>Built on 7+ years of funded research.</li>
          <li>Backed by MBIE Smart Ideas funding.</li>
        </ul>
      </Section>
    </div>
  );
}
