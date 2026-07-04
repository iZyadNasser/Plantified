import { asset } from "../lib/asset";
export type Tip = { icon: string; label: string };

export type Season = {
  id: string;
  name: string;
  months: string;
  icon: string;

  iconBg: string;

  accent: string;
  tips: Tip[];
};

const icon = (n: string) => asset(`assets/icons/${n}.svg`);

export const seasons: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March–May",
    icon: icon("sun"),
    iconBg: "var(--green-08)",
    accent: "#10b981",
    tips: [
      { icon: icon("droplet"), label: "Water every 3 days" },
      { icon: icon("leaf"), label: "Add fertilizer" },
      { icon: icon("zap"), label: "Move to bright light" },
    ],
  },
  {
    id: "summer",
    name: "Summer",
    months: "June–August",
    icon: icon("sun"),
    iconBg: "var(--season-summer)",
    accent: "#f59e0b",
    tips: [
      { icon: icon("droplet"), label: "Water daily" },
      { icon: icon("wind"), label: "Increase air circulation" },
      { icon: icon("shield"), label: "Protect from heat" },
    ],
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September–November",
    icon: icon("leaf"),
    iconBg: "var(--season-autumn)",
    accent: "#f97316",
    tips: [
      { icon: icon("droplet"), label: "Reduce watering" },
      { icon: icon("scissors"), label: "Prune old growth" },
      { icon: icon("thermometer"), label: "Watch temperature" },
    ],
  },
  {
    id: "winter",
    name: "Winter",
    months: "December–February",
    icon: icon("cloud-snow"),
    iconBg: "var(--season-winter)",
    accent: "#6366f1",
    tips: [
      { icon: icon("droplet"), label: "Water sparingly" },
      { icon: icon("moon"), label: "Reduce light" },
      { icon: icon("shield"), label: "Protect from drafts" },
    ],
  },
];
