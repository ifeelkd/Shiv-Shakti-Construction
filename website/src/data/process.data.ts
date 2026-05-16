export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Analysis",
    description:
      "Geotechnical surveying and load-bearing simulations using advanced algorithmic modeling.",
  },
  {
    number: "02",
    title: "Drafting",
    description:
      "BIM-integrated structural blueprints ensuring zero-tolerance for error in spatial execution.",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Precision engineering of core components on-site with real-time telemetry monitoring.",
  },
  {
    number: "04",
    title: "Curation",
    description:
      "Final editorial finishing including bespoke lighting design and aesthetic validation.",
  },
];
