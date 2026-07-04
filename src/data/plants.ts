import { asset } from "../lib/asset";

export type Crop = {
  width: string;
  height: string;
  left: string;
  top: string;
} | null;

export type Plant = {
  id: string;
  name: string;
  image: string;

  thumb: string;
  alt: string;
  price: string;
  description: string;
  lifespan: string;
  height: string;
  watering: string;

  displayHeight: number;

  crop: Crop;

  thumbCrop: Crop;
};

export const plants: Plant[] = [
  {
    id: "cactus",
    name: "Cactus: Spike",
    image: asset("assets/images/plant-cactus.webp"),
    thumb: asset("assets/images/thumbs/plant-cactus.webp"),
    alt: "Potted cactus with pink flowers in a yellow pot",
    price: "18.99$",
    description:
      "The ultimate minimalist companion for your workspace. Spike doesn't care about drama, never complains about the dry office air, and is perfectly happy being ignored for weeks. It stores its own water and guards your desk like a tiny, green, prickly soldier.",
    lifespan: "10 - 50 Years",
    height: "15 - 30 cm",
    watering: "1x / Month",
    displayHeight: 481,
    crop: { height: "112.73%", left: "3.86%", top: "-6.81%", width: "90.4%" },
    thumbCrop: { height: "112.73%", left: "3.86%", top: "-6.81%", width: "90.4%" },
  },
  {
    id: "aloe",
    name: "Aloe Vera",
    image: asset("assets/images/plant-aloe.webp"),
    thumb: asset("assets/images/thumbs/plant-aloe.webp"),
    alt: "Aloe vera plant in a dark green pot",
    price: "21.99$",
    description:
      "Bella is the calming presence your stressful workweek needs. With its soothing, plump, gel-filled leaves, it acts like a little natural healthcare worker on your desk. It looks incredibly neat, clean, and adds a peaceful, refreshing aura to any workspace.",
    lifespan: "5 - 25 Years",
    height: "60 - 90 cm",
    watering: "1x / 3 Weeks",
    displayHeight: 497,
    crop: { height: "114.61%", left: "9.8%", top: "-9.33%", width: "84.37%" },
    thumbCrop: { height: "114.61%", left: "9.8%", top: "-9.33%", width: "84.37%" },
  },
  {
    id: "snake",
    name: "Snake Plant",
    image: asset("assets/images/plant-snake.webp"),
    thumb: asset("assets/images/thumbs/plant-snake.webp"),
    alt: "Tall snake plant with upright leaves in a white pot",
    price: "24.99$",
    description:
      "Zeus is practically immortal and thrives on absolute neglect. Whether your office has zero sunlight or you forget to water it for a month, Zeus just keeps standing tall and sharp. It's the best plant for beginners who want maximum green vibes with zero effort.",
    lifespan: "5 - 12 Years",
    height: "30 - 45 cm",
    watering: "1x / 2 Weeks",
    displayHeight: 562,
    crop: { height: "106.55%", left: "-18.09%", top: "-3.14%", width: "132.98%" },
    thumbCrop: { height: "106.55%", left: "-18.09%", top: "-3.14%", width: "132.98%" },
  },
  {
    id: "monstera",
    name: "Monstera",
    image: asset("assets/images/plant-monstera.webp"),
    thumb: asset("assets/images/thumbs/plant-monstera.webp"),
    alt: "Monstera plant with split leaves in a white pot",
    price: "29.99$",
    description:
      "Monty is the undisputed king of aesthetic workspaces. With its iconic, large, split leaves, it instantly elevates your desk from a boring workspace to a luxury aesthetic cafe. It's a bit dramatic and loves to take up its own space, but it knows it looks good.",
    lifespan: "15 - 30 Years",
    height: "1 - 1.5 m",
    watering: "1x / Week",
    displayHeight: 449,
    crop: null,
    thumbCrop: null,
  },
  {
    id: "pothos",
    name: "Pothos",
    image: asset("assets/images/plant-pothos.webp"),
    thumb: asset("assets/images/thumbs/plant-pothos.webp"),
    alt: "Trailing pothos plant in a terracotta pot",
    price: "16.99$",
    description:
      "Ivy is the overachiever of the plant world. Give it just a tiny bit of water and a splash of light, and its beautiful cascading vines will start growing rapidly. It loves to climb around monitors, shelves, and looks like a living, green waterfall on your desk.",
    lifespan: "5 - 10 Years",
    height: "1 - 2 m",
    watering: "1x / Week",
    displayHeight: 487,
    crop: { height: "103.7%", left: "-14.01%", top: "-3.7%", width: "168.06%" },
    thumbCrop: { height: "117.32%", left: "-6.36%", top: "-17.32%", width: "138.27%" },
  },
  {
    id: "pilea",
    name: "Pilea",
    image: asset("assets/images/plant-pilea.webp"),
    thumb: asset("assets/images/thumbs/plant-pilea.webp"),
    alt: "Pilea plant with round coin-shaped leaves in a white pot",
    price: "19.99$",
    description:
      'Penny brings a unique, playful energy to your desk with its perfectly round, coin-shaped leaves balancing on delicate stems. It pops out tiny baby plants constantly, making it the perfect "friendship plant" to pass around to your favorite coworkers.',
    lifespan: "5 - 10 Years",
    height: "20 - 30 cm",
    watering: "1x / Week",
    displayHeight: 473,
    crop: { height: "79.47%", left: "-11.42%", top: "10.33%", width: "111.42%" },
    thumbCrop: { height: "79.47%", left: "-11.42%", top: "10.33%", width: "111.42%" },
  },
];
