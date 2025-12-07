import Section from "../components/Section";
import Hero from "../components/Hero";

export default function About() {
  return (
    <div>
      <Hero
        title="PROBENTIS"
        description="A minimally invasive device providing real-time assessment of prostate cancer during biopsy or surgery."
      />

      <Section
        title="The Problem"
        text={[
          "90,000 prostatectomies are performed every year in the US.",
          "During surgery, physicians rely only on their eyes to identify whether cancer remains.",
          "Confirmation of positive margins only occurs after surgery when samples return from pathology.",
        ]}
      />

      <Section
        title="Our Solution"
        text={[
          "Probentis is developing a minimally invasive device that provides real-time, in-vivo cancer assessment.",
          "Inserted during biopsy or surgery, it identifies cancer presence and grades tissue using Gleason and ISUP standards.",
          "This empowers physicians to make accurate decisions and avoid unnecessary procedures.",
        ]}
      />
      <Section
        title="Current State of Technology"
        text={[
          "Uses Raman spectroscopy for cancer detection.",
          "Built on 7+ years of funded research.",
          "Backed by MBIE Smart Ideas funding.",
        ]}
      />
    </div>
  );
}
