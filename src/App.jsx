import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import "./language/i18n";
import Card2 from "./components/Card2";
import Card3 from "./components/cards/Card3";
import Card4 from "./components/cards/Card4";
import Card5 from "./components/cards/Card5";
import Card6 from "./components/cards/Card6";
import SimpleSlider from "./components/Carousel";
import EmblaCarousel from "./components/carousel/Embla";

const OPTIONS = { loop: true };

const SLIDES = [
  { id: 1, render: <Card3 /> },
  { id: 2, render: <Card2 /> },
  { id: 3, render: <Card4 /> },
  { id: 4, render: <Card5 /> },
  { id: 5, render: <Card6 /> },
];
function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default App;
