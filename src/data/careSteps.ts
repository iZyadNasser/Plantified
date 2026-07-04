import { asset } from "../lib/asset";
export type CareStep = {
  icon: string;
  title: string;
  description: string;
};

export const careSteps: CareStep[] = [
  {
    icon: asset("assets/icons/care-package.svg"),
    title: "Unboxing",
    description: "Let the leaves settle and acclimate to your light.",
  },
  {
    icon: asset("assets/icons/care-rain.svg"),
    title: "First Mist",
    description: "Apply a light moisture layer after 48 hours.",
  },
  {
    icon: asset("assets/icons/care-recycle.svg"),
    title: "Routine",
    description: "Establish a weekly cadence for feeding and care.",
  },
  {
    icon: asset("assets/icons/care-plant.svg"),
    title: "Watch it grow",
    description:
      "After a short time, your plant will love you because you take care of it.",
  },
];
