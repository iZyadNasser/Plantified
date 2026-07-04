import { TopBar } from "./components/TopBar/TopBar";
import { Hero } from "./components/Hero/Hero";
import { ProductShowcase } from "./components/ProductShowcase/ProductShowcase";
import { HeroCards } from "./components/HeroCards/HeroCards";
import { CareSteps } from "./components/CareSteps/CareSteps";
import { PlantCareCalendar } from "./components/PlantCareCalendar/PlantCareCalendar";
import { FindPlant } from "./components/FindPlant/FindPlant";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <ProductShowcase />
        <HeroCards />
        <CareSteps />
        <PlantCareCalendar />
        <FindPlant />
      </main>
      <Footer />
    </>
  );
}
