import { DarkThemeToggle, } from "flowbite-react";

import OurNavbar from "./components/Navbar";
import OurFooter from "./components/Footer";
import Hero from "./components/Hero";
import ContactSection from "./components/Contact";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <main className="flex min-h-screen w-full flex-col justify-center gap-2 dark:bg-gray-800">
      <OurNavbar/>
      <Hero/>
      <Newsletter/>
      <ContactSection/>
      <OurFooter/>
    </main>
  );
}

export default App;
