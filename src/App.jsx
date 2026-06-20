import { useState } from "react";
import LoadingScreen from "./LoadingScreen/loadingScreen.jsx";
import Home from "./Home/Home.jsx";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div id="App">
      {showLoader ? (
        <LoadingScreen
          onFinish={() => setShowLoader(false)}
        />
      ) : (
        <Home />
        )}
    </div>
  );
}