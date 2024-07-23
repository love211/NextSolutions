import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import "./language/i18n";
import Card2 from "./components/Card2";
import Card3 from "./components/cards/Card3";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card3 />;
    </div>
  );
}

export default App;
